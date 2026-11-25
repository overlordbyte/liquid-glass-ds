/* Maps bare `react` imports onto the global React loaded from a CDN,
   so the preview bundle needs no module loader. */
const React = window.React;
export default React;
export const useState = React.useState;
export const useEffect = React.useEffect;
export const useRef = React.useRef;
export const useId = React.useId;
export const useMemo = React.useMemo;
export const useCallback = React.useCallback;
export const Children = React.Children;
export const Fragment = React.Fragment;
export const createElement = React.createElement;
