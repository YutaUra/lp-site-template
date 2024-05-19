import type { Meta } from "@storybook/preact";
import { App } from "./App";

const meta = {
  title: "App",
} satisfies Meta<typeof App>;

export default meta;

export const Default = () => <App />;
