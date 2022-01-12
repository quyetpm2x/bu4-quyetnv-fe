import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import Home from './../home';

const ProtectedRoute = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading) {
    return (
      <>
        <h1 style={{margin: "20px 20px"}}>Đợi xíu nha...</h1>
      </>
    );
  }

  return (
        isAuthenticated ? (
          <>
            <Home />
          </>
        ) : (
          <Navigate to="/login" />
          // <Home />
        )
  );
};

export default ProtectedRoute;
