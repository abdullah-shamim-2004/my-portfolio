import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./Routers/Router.jsx";
import SmoothScroll from "./Components/SmoothScroll/SmoothScroll .jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {" "}
    <SmoothScroll>
      <RouterProvider router={router}></RouterProvider>
    </SmoothScroll>
  </StrictMode>
);
