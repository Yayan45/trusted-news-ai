import { createRoot } from "react-dom/client";

import "./index.css";
import "./styles/theme.css";

import { Toaster } from "react-hot-toast";

import App from "./App.jsx";

import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <>
      <App />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  </ThemeProvider>,
);
