import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import "@fontsource-variable/quicksand";
import "@fontsource-variable/saira";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
