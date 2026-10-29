// AI assistance: ChatGPT generated this starter entry point.
// Prompt: "Create a minimal Vite React entry point for a Web Dev II starter."
// Keep this acknowledgement accurate if this code is changed or reused.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
