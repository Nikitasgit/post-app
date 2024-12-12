import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.scss";
import App from "./App.jsx";
import { PostProvider } from "./context/PostContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </StrictMode>
);
