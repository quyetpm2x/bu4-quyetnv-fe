import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile-wrapper flex-center">
      <div className="c-8 is-flex flex-center bg-white min-height-500 rel">
        <div class="abs mt-10 flex-center profile-header  top-0">
          <Link to="/home" className="abs back-home ml-10">
            <i class="fas fa-arrow-left mr-10 back-icon"></i>
          </Link>
          <div className="profile-title">Chỉnh sửa thông tin</div>
        </div>
        <div className="c-3 flex-center pdr-155">
          <div className="avatar-profile flex-center flex-col">
            <img
              src="/images/login/DH-Bach-khoa-HN-9252-1631681129.jpg"
              alt=""
              className="profile-img img-circle"
            />
            <div className="profile-desc bold mt-10">
              <span>Tên Email</span>
            </div>
          </div>
        </div>
        <div className="c-5">
          <form className="acount-body" id="formSubmit">
            <div className="input-group">
              <div className="input-group-input">
                <input type="text" placeholder="Tên trường" name="name" />
              </div>
            </div>

            <div className="input-group">
              <div className="input-group-input">
                <input type="text" placeholder="Website" name="website" />
              </div>
            </div>

            <div className="input-group">
              <div className="input-group-input">
                <input type="text" placeholder="Số điện thoại" name="phone" />
              </div>
            </div>

            <div className="input-group">
              <div className="input-group-input">
                <input type="email" placeholder="Địa chỉ email" name="email" />
                <span className="-group__icon">
                  <i className="far fa-envelope pointer"></i>
                </span>
              </div>
            </div>

            <div className="input-group">
              <div className="input-group-input">
                <input type="password" placeholder="Mật khẩu" name="password" />
                <span className="input-group__icon">
                  <i className="fas fa-lock pointer"></i>
                </span>
              </div>
            </div>
            <div className="">
              <button type="submit" className="acount-btn">
                Lưu thông tin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
