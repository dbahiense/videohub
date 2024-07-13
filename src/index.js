// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const container = document.getElementById("app");

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
