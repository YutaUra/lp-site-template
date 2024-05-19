import "./index.css";
import { render } from "preact";
import { App } from "./App";

// biome-ignore lint/style/noNonNullAssertion: index.html always has a root element
const root = document.getElementById("app")!;

render(<App />, root);
