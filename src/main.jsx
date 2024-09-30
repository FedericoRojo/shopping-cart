import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./components/App"


//const router = createBrowserRouter(routes);
//<RouterProvider router={router} />
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
);
