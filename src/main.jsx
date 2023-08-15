import React from "react";
import ReactDOM from "react-dom/client";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, MasterMenu, RegisterPage } from "./pages";
import App from "./App";
import { Provider } from "./store/provider/provider";
// import LoginPage from "./pages/LoginPage/LoginPage.jsx";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import MasterMenu from "./pages/MasterMenu/MasterMenu";

export const router = createBrowserRouter([
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/admin/master-menu",
    element: <MasterMenu />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
