import "font-awesome/css/font-awesome.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { LoginPage, MasterMenu, MasterRole, RegisterPage } from "./pages";
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
    path: "/admin/menu",
    element: <MasterMenu />,
  },
  {
    path: "/admin/role",
    element: <MasterRole />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
