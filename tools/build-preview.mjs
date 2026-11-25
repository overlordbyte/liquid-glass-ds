/* Builds preview/bundle.js — a browser-ready IIFE exposing every component
   on window.LiquidGlass, so the @dsCard HTML files render without the
   project compiler. The real compiler emits _ds_bundle.js; the cards load
   that first and fall back to this. Run: node tools/build-preview.mjs */
import { build } from "esbuild";
import { readdirSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (e.endsWith(".jsx")) out.push(p);
  }
  return out;
}

const files = walk(join(root, "components")).sort();
const entry = join(root, "tools", ".entry.js");
writeFileSync(
  entry,
  files
    .map((f) => `export * from "${f.replace(/\\/g, "/")}";`)
    .join("\n")
);

mkdirSync(join(root, "preview"), { recursive: true });

await build({
  entryPoints: [entry],
  outfile: join(root, "preview", "bundle.js"),
  bundle: true,
  format: "iife",
  globalName: "__LG_NS",
  jsx: "transform",
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  alias: { react: join(root, "tools", "react-shim.js") },
  target: ["es2020"],
  footer: {
    js: "if (!window.LiquidGlass) { window.LiquidGlass = __LG_NS; }",
  },
  logLevel: "info",
});

// ---- one bundle per UI kit, exposed on window.LiquidGlassKits[<dir>] ----
const kitsRoot = join(root, "ui_kits");
const kits = readdirSync(kitsRoot).filter((d) => statSync(join(kitsRoot, d)).isDirectory());

for (const kit of kits) {
  const kitFiles = walk(join(kitsRoot, kit)).sort();
  if (!kitFiles.length) continue;
  const kitEntry = join(root, "tools", `.entry-${kit}.js`);
  writeFileSync(
    kitEntry,
    kitFiles
      .map((f) => `export * from "${f.replace(/\\/g, "/")}";`)
      .join("\n")
  );
  await build({
    entryPoints: [kitEntry],
    outfile: join(root, "preview", `kit-${kit}.js`),
    bundle: true,
    format: "iife",
    globalName: "__LG_KIT",
    jsx: "transform",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    alias: { react: join(root, "tools", "react-shim.js") },
    target: ["es2020"],
    footer: {
      js: `window.LiquidGlassKits = window.LiquidGlassKits || {}; window.LiquidGlassKits["${kit}"] = __LG_KIT;`,
    },
    logLevel: "warning",
  });
  console.log(`bundled kit ${kit} (${kitFiles.length} screens)`);
}

console.log(`bundled ${files.length} components`);
