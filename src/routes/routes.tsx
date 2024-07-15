import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoginInSuccess from "../components/LoginInSuccess/LoginInSuccess";
import TrackingScreen from "../pages/TrackingScreen/TrackingScreen";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login-success",
    element: (
      <PrivetRoutes>
        <LoginInSuccess />
      </PrivetRoutes>
    ),
  },
  {
    path: "/tracking-screen",
    element: (
      <PrivetRoutes>
        <TrackingScreen />
      </PrivetRoutes>
    ),
  },
]);
