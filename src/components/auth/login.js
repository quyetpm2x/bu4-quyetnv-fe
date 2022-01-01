import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";

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
      const loginData = await loginUser(loginForm);
      // if (!loginData.success) {
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    authState: { authLoading, isAuthenticated }
  } = useContext(AuthContext);

  if (authLoading)
    return (
      <>
        <h1 style={{ margin: "20px 20px" }}>Đợi xíu nha...</h1>
      </>
    );
  else if (isAuthenticated) return <Navigate to="/home" />;
  else return (
    <>
      <div className="login">
        <div className="welcome mt-68">
          <div className="welcome-content">
            <h1 className="welcome-title">
              Đăng ký thành viên Travel - Tích điểm thưởng và nhận ưu đãi
            </h1>
            <p className="welcome-desc">
              Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay
              quyền lợi.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="section-container">
            <div className="row-0 is-flex">
              <div className="c-8">
                <div className="row-0 flex-wrap">
                  <div className="c-6 pad-08">
                    <div className="media">
                      <img
                        src="/images/login/login1.png"
                        alt="login1"
                        style={{ width: "65px", height: "70px" }}
                      />
                      <h3 className="media__title">Tích điểm nhanh chóng</h3>
                      <p className="media__content">
                        Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi
                        thành Lux Credit để du lịch nhiều hơn nữa.
                      </p>
                    </div>
                  </div>
                  <div className="c-6 pad-08">
                    <div className="media">
                      <img
                        src="/images/login/login2.png"
                        alt="login2"
                        style={{ width: "65px", height: "70px" }}
                      />
                      <h3 className="media__title">Tiện ích thông minh</h3>
                      <p className="media__content">
                        Check-in và kiểm tra hóa đơn thanh toán kể cả khi không
                        có kết nối mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.
                      </p>
                    </div>
                  </div>
                  <div className="c-6 pad-08">
                    <div className="media">
                      <img
                        src="/images/login/login3.png"
                        alt="login3"
                        style={{ width: "65px", height: "70px" }}
                      />
                      <h3 className="media__title">Thanh toán đơn giản</h3>
                      <p className="media__content">
                        Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức
                        năng lưu thẻ để đặt phòng lần sau.
                      </p>
                    </div>
                  </div>
                  <div className="c-6 pad-08">
                    <div className="media">
                      <img
                        src="/images/login/login4.png"
                        alt="login4"
                        style={{ width: "65px", height: "70px" }}
                      />
                      <h3 className="media__title">Ưu đãi mỗi ngày</h3>
                      <p className="media__content">
                        Nhận thông báo ưu đãi từ Travel khi có kế hoạch du lịch
                        để lựa chọn và đặt ngay cho mình một chỗ ở phù hợp, tiện
                        nghi với giá tốt nhất.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-4">
                <div className="signInForm">
                  <div className="acount">
                    <div>
                      <h3 className="acount__title">Đăng nhập</h3>
                      <p className="acount-desc">
                        Đăng nhập Travel để trải nghiệm
                      </p>
                      <form
                        className="acount-body"
                        id="formSubmit"
                        onSubmit={login}
                      >
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
                          <button type="submit" className="acount-btn">
                            Đăng nhập
                          </button>
                        </div>
                      </form>
                      <div className="acount-footer">
                        <div className="acount-sign-up">
                          Quên mật khẩu?
                          <a href="# " style={{ textDecoration: "none" }}>
                            <span
                              className="sign-up click-here"
                              style={{ cursor: "pointer" }}
                            >
                              {" "}
                              Nhấn vào đây
                            </span>
                          </a>
                        </div>
                        <div className="acount-sign-up">
                          Bạn chưa có tài khoản Travel?
                          <Link
                            to="/register"
                            style={{ textDecoration: "none" }}
                          >
                            <span
                              className="sign-up"
                              style={{ cursor: "pointer" }}
                            >
                              {" "}
                              Đăng ký
                            </span>
                          </Link>
                        </div>
                        <div
                          className="acount-footer-note"
                          style={{ fontSize: "17px" }}
                        >
                          Hoặc
                        </div>

                        <div className="sign-in-social">
                          <div className="sign-in-social-social">
                            <span>Đăng nhập với Facabook</span>
                            <i
                              className="fab fa-facebook-square sign-in-social__icon"
                              style={{ color: "#3a5999" }}
                            ></i>
                          </div>
                          <div className="sign-in-social-social">
                            <span>Đăng nhập với Google</span>
                            <svg
                              version="1.1"
                              viewBox="0 0 16 16"
                              className="sign-in-social__icon"
                            >
                              <g fill="none">
                                <path
                                  pid="0"
                                  fill="#557EBF"
                                  d="M15.85 8.2c0-.55-.05-1.1-.15-1.65H8.15v3.1h4.3c-.2 1-.75 1.85-1.6 2.4v2h2.6c1.5-1.4 2.4-3.45 2.4-5.85z"
                                ></path>
                                <path
                                  pid="1"
                                  fill="#36A852"
                                  d="M8.15 16c2.15 0 3.95-.7 5.3-1.95l-2.6-2c-.7.5-1.65.75-2.7.75-2.1 0-3.85-1.4-4.5-3.3H1v2.05C2.35 14.2 5.05 16 8.15 16z"
                                ></path>
                                <path
                                  pid="2"
                                  fill="#F9BC15"
                                  d="M3.7 9.5c-.15-.5-.25-1-.25-1.5s.1-1.05.25-1.5V4.4H1C.45 5.5.15 6.7.15 8c0 1.3.3 2.5.85 3.6l2.7-2.1z"
                                ></path>
                                <path
                                  pid="3"
                                  fill="#EA4535"
                                  d="M8.15 3.2c1.15 0 2.25.4 3.05 1.2l2.3-2.3C12.15.8 10.3 0 8.15 0 5.05 0 2.35 1.8 1 4.4l2.7 2.1c.6-1.9 2.4-3.3 4.45-3.3z"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Login;
