import { renderToString } from "preact-render-to-string";
import { App } from "./App";

export const prerender = () => {
  const html = renderToString(<App />);
  return html;
};
