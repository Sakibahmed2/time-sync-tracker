import React from "react";
import { getUserInfo } from "../services/auth.services";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }: { children: React.ReactNode }) => {
  const user = getUserInfo();
  const location = useLocation();
  console.log(user);

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivetRoutes;
