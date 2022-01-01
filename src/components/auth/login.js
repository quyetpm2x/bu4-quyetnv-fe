import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";

import Web3 from 'web3';

  

const Login = () => {
  //context
  const { loginUser } = useContext(AuthContext);

  //router
  const navigate = useNavigate();

  //local state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginForm;

  const onChangeLoginForm = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };
  const login = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        return navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

//////////////////////////
  const connectMetaMask = async() => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return accounts[0];
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const accounts = window.web3.eth.getAccounts();
      return accounts[0];
    }
  };

  const getWallet = () => {
    const web3 = new Web3(window.web3.currentProvider);
    const accounts = web3.eth.getAccounts();
    return accounts[0];
  };


  let body;
  if (authLoading) {
    body = (
      <>
        <h1 style={{ margin: "20px 20px" }}>Đợi xíu nha...</h1>
      </>
    );
  } else if (isAuthenticated) {
    return navigate("/home");
  } else {
    body = (
      <>
        <div className="register">
          <div className="background"></div>

          <div className="acount">
            <div>
              <h3 className="acount__title">Đăng nhập</h3>
              <p className="acount-desc">Đăng nhập B4U để trải nghiệm</p>
              <form className="acount-body" id="formSubmit">
              {/* onSubmit={login} */}
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
                      <i className="far fa-envelope"></i>
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
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="">
                  <button type="submit" className="acount-btn" onClick={connectMetaMask}>
                    Đăng nhập
                  </button>
                </div>
              </form>
              <div className="acount-sign-footer">
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
      </>
    );
  }

  return <>{body}</>;
};
export default Login;
