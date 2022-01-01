import { Navigate } from "react-router-dom";
import { AuthContext } from './../contexts/authContext';
import { useContext } from 'react';
import Login from './auth/login';
import Register from './auth/register';

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated }
  } = useContext(AuthContext);

  let body;

  if (authLoading)
    body = (
      <>
        <h1 style={{ margin: "20px 20px" }}>Đợi xíu nha...</h1>
      </>
    );
  else if (isAuthenticated) return <Navigate to="/home" />;
  else
    body = (
      <>
        {authRoute === "login" && <Login />}
        {authRoute === "register" && <Register />}
      </>
    );

  return (
	  <>
		{body}
	  </>
	);
};

export default Auth;
