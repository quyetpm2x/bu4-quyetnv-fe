import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";

const Register = () => {
  const [showPw, setShowPw] = useState({
    pw: true,
    checkpw: true,
  });

  const shPw = (e) => {
    if (e.target.id === "lockpw") {
      setShowPw({
        ...showPw,
        pw: !showPw.pw,
      });
    }
    if (showPw.pw) {
      document.getElementById("pw").type = "text";
      document
        .getElementById("input-group__icon-lockpw")
        .classList.add("show-pw");
    } else {
      document.getElementById("pw").type = "password";
      document
        .getElementById("input-group__icon-lockpw")
        .classList.remove("show-pw");
    }
  };

  const shCheckPw = (e) => {
    if (e.target.id === "lockcheckpw") {
      setShowPw({
        ...showPw,
        checkpw: !showPw.checkpw,
      });
    }
    if (showPw.checkpw) {
      document.getElementById("checkpw").type = "text";
      document
        .getElementById("input-group__icon-lockcheckpw")
        .classList.add("show-pw");
    } else {
      document.getElementById("checkpw").type = "password";
      document
        .getElementById("input-group__icon-lockcheckpw")
        .classList.remove("show-pw");
    }
  };

  return (
    <>
      <div className="register">
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
                <form className="signUpForm">
                  <div className="acount">
                    <form action="" autocomplete="off">
                      <h3 className="acount__title">Đăng ký thành viên</h3>
                      <div className="acount-body">
                        <div className="input-group">
                          <label htmlFor="" className="input-group__label">
                            Đại chỉ email
                          </label>
                          <div className="input-group-input">
                            <input
                              type="email"
                              name="email"
                              placeholder="Địa chỉ email"
                              required
                            />
                            <span className="input-group__icon">
                              <i className="far fa-envelope"></i>
                            </span>
                          </div>
                        </div>
                        <div className="input-group">
                          <label htmlFor="" className="input-group__label">
                            Số điện thoại
                          </label>
                          {/* <div className="update-phone">
                                                        <div className="country-phone">
                                                            <span className="flag-wrapper">
                                                                <img src="img/sign/la-co-viet-nam.png" style={{width: '20px', height: '14px'}} alt="" />
                                                                <span>+84</span>
                                                                <span style= {{fontSize: '10px'}}>▼</span>
                                                            </span>
                                                        </div> */}
                          <div className="input-group-input">
                            <input
                              type="phone"
                              placeholder="số điện thoại"
                              required
                            />
                          </div>
                          {/* </div> */}
                        </div>
                        <div className="input-group">
                          <label htmlFor="" className="input-group__label">
                            Họ và Tên
                          </label>
                          <div className="input-group-input">
                            <input
                              type="text"
                              name="name"
                              placeholder="Họ và tên"
                              required
                            />
                          </div>
                        </div>
                        <div className="input-group">
                          <label htmlFor="" className="input-group__label">
                            <span>Mật khẩu</span>
                          </label>
                          <div className="input-group-input">
                            <input
                              type="password"
                              placeholder="Mật khẩu"
                              name="password"
                              id="pw"
                              required
                            />
                            <span
                              className="input-group__icon"
                              id="input-group__icon-lockpw"
                            >
                              <i
                                className="fas fa-lock"
                                id="lockpw"
                                onClick={shPw}
                              ></i>
                            </span>
                          </div>
                        </div>
                        <div className="input-group">
                          <label htmlFor="" className="input-group__label">
                            Xác nhận mật khẩu mới
                          </label>
                          <div className="input-group-input">
                            <input
                              type="password"
                              placeholder="Nhập lại mật khẩu"
                              name="password"
                              id="checkpw"
                              required
                            />
                            <span
                              className="input-group__icon"
                              id="input-group__icon-lockcheckpw"
                            >
                              <i
                                className="fas fa-lock"
                                id="lockcheckpw"
                                onClick={shCheckPw}
                              ></i>
                            </span>
                          </div>
                        </div>

                        <button type="submit" className="acount-btn">
                          Đăng ký
                        </button>
                      </div>
                      <div className="acount-footer">
                        <div className="acount-sign-up">
                          Bạn đã có tài khoản Travel?
                          <Link to="/login" style={{ textDecoration: "none" }}>
                            <span
                              className="sign-up"
                              style={{ cursor: "pointer" }}
                            >
                              {" "}
                              Đăng nhập
                            </span>
                          </Link>
                        </div>
                        <div className="acount-footer-note">
                          Tôi đồng ý với
                          <a href="# "> Bảo mật </a>
                          và
                          <a href="# "> Điều khoản hoạt động </a>
                          của Luxstay
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
                    </form>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
