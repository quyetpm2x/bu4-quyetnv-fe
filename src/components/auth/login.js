import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  // Context
  const { loginUser } = useContext(AuthContext);

  // Local state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();

    try {
      console.log("loginForm", loginForm)
      const loginData = await loginUser(loginForm);
      console.log(loginData)
      if (!loginData.success) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading)
    return (
      <>
        <h1 style={{ margin: "20px 20px" }}>Đợi xíu nha...</h1>
      </>
    );
  else if (isAuthenticated) return <Navigate to="/home" />;
  else
    return (
      <>
        <div className="login">
          <div className="bg-university"></div>
          <div className="logInForm">
            <div className="acount">
              <div>
                <h3 className="acount__title">Đăng nhập</h3>
                <p className="acount-desc">Đăng nhập Travel để trải nghiệm</p>
                <form className="acount-body" id="formSubmit" onSubmit={login}>
                  <div className="input-group">
                    <div className="input-group-input">
                      <input
                        type="email"
                        placeholder="Địa chỉ email"
                        name="email"
                        value={email}
                        onChange={onChangeLoginForm}
                      />
                      <span className="-group__icon">
                        <i className="far fa-envelope pointer"></i>
                      </span>
                    </div>
                  </div>

                  <div className="input-group">
                    <div className="input-group-input">
                      <input
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        value={password}
                        onChange={onChangeLoginForm}
                      />
                      <span className="input-group__icon">
                        <i className="fas fa-lock pointer"></i>
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <button type="submit" className="acount-btn">
                      Đăng nhập
                    </button>
                  </div>
                </form>
                <div className="acount-footer">
                  <div className="acount-sign-up">
                    Bạn chưa có tài khoản B4U?
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      <span className="sign-up" style={{ cursor: "pointer" }}>
                        {" "}
                        Đăng ký
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default Login;
