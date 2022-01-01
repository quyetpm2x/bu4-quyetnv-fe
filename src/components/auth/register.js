import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

    const [showPw, setShowPw] = useState({
        pw: true,
        checkpw: true,
    });

    const shPw = (e) => {
        if(e.target.id === "lockpw"){
            setShowPw({
                ...showPw,
                pw: !showPw.pw,
            });
        }
        if(showPw.pw) {
            document.getElementById("pw").type = "text";
            document.getElementById("input-group__icon-lockpw").classList.add("show-pw")
        } else {
            document.getElementById("pw").type = "password";
            document.getElementById("input-group__icon-lockpw").classList.remove("show-pw")
        }
    }

    const shCheckPw = (e) => {
        if(e.target.id === "lockcheckpw"){
            setShowPw({
                ...showPw,
                checkpw: !showPw.checkpw,
            });
        }
        if(showPw.checkpw) {
            document.getElementById("checkpw").type = "text";
            document.getElementById("input-group__icon-lockcheckpw").classList.add("show-pw")
        } else {
            document.getElementById("checkpw").type = "password";
            document.getElementById("input-group__icon-lockcheckpw").classList.remove("show-pw")
        }
    }

    return (
        <>
            <div className="register">
                  <div className="background"></div>

                    <div className="acount">
                      <div>
                        <h3 className="acount__title">Đăng ký</h3>
                        <p className="acount-desc">
                          Đăng ký B4U để trải nghiệm
                        </p>
                        <form
                          className="acount-body"
                          id="formSubmit"
                        >

                          <div className="input-group">
                          <div className="input-group-input">
                              <input
                                type="text"
                                placeholder="Tên trường"
                                name="name"
                              />
                              <span className="-group__icon">
                                <i className="far fa-envelope"></i>
                              </span>
                            </div>
                          </div>
                          
                          
                          <div className="input-group">
                          <div className="input-group-input">
                              <input
                                type="text"
                                placeholder="Website"
                                name="website"
                              />
                              <span className="-group__icon">
                                <i className="far fa-envelope"></i>
                              </span>
                            </div>
                          </div>
                          <div className="input-group">
                          <div className="input-group-input">
                              <input
                                type="text"
                                placeholder="Địa chỉ"
                                name="address"
                              />
                              <span className="-group__icon">
                                <i className="far fa-envelope"></i>
                              </span>
                            </div>
                          </div>
                          <div className="input-group">
                          <div className="input-group-input">
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                              />
                              <span className="-group__icon">
                                <i className="far fa-envelope"></i>
                              </span>
                            </div>
                          </div>
                          <div className="input-group">
                          <div className="input-group-input">
                              <input
                                type="text"
                                placeholder="Tài khoản"
                                name="username"
                              />
                              <span className="-group__icon">
                                <i className="far fa-envelope"></i>
                              </span>
                            </div>
                          </div>
                          <div className="input-group">
                          <div className="input-group-input">
                              <input
                                type="text"
                                placeholder="Mật khẩu"
                                name="password"
                              />
                              <span className="-group__icon">
                                <i className="far fa-envelope"></i>
                              </span>
                            </div>
                          </div>
                          
                          <div className="">
                            <button type="submit" className="acount-btn">
                              Đăng ký
                            </button>
                          </div>
                        </form>
                        <div className="acount-sign-footer">
                            Bạn đã có tài khoản B4U?
                            <Link
                              to="/login"
                              style={{ textDecoration: "none" }}
                            >
                              <span
                                className="sign-up"
                                style={{ cursor: "pointer" }}
                              >
                                {" "}
                                Đăng nhập
                              </span>
                            </Link>
                      </div>
                    </div>
                  </div>
                </div>
      </>
    )
}

export default Register
