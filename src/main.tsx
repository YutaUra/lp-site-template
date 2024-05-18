import { render } from "preact";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);

render(<App />, root);
