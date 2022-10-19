import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRequired = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
 

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthRequired;
