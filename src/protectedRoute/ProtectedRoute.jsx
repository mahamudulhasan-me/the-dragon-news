import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Spinner animation="border" variant="success" />;
  }
  if (!user) {
    return <Navigate to={"/login"} state={location} />;
  }
  return children;
};

export default ProtectedRoute;
