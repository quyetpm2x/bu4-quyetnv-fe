import { Link } from "react-router-dom";
import { getIssuer, updateIssuer } from "./helper/api";
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [issuer, setIssuer] = useState();
  const [owner, setOwner] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [matched, setMatched] = useState(true);

  useEffect(async() => {
    await getIssuerData();
    // await getIssuerData();
  }, []);

  const getIssuerData = async () => {
    const data = await getIssuer();
    setIssuer(data);
    setOwner(data.owner);
  };

  const handleSubmit = async () => {
    if(matched) {
      const data = {
        password: password,
        owner: owner
      }
      await updateIssuer(data);
    }
    
  }

  const handleChangeOwner = async (event) => {
    setOwner(event.target.value);
  }

  const handleChangePassword = async (event) => {
    setPassword(event.target.value);
    
  }

  const handleChangeConfirmPassword = async (event) => {
    setConfirmPassword(event.target.value);
    if(password !== event.target.value) {
      setMatched(false);
    } else {
      setMatched(true);
    }
  }

  return (
    <>
    {issuer && (
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
                <span>{issuer.email}</span>
              </div>
            </div>
          </div>
          <div className="c-5">
            <div className="acount-body" id="formSubmit">
              {/* <div className="input-group">
                <div className="input-group-input">
                  <input type="text" placeholder="Tên trường" name="name" value={issuer.name} style={{ pointerEvents: 'none' }}/>
                </div>
              </div>

              <div className="input-group">
                <div className="input-group-input">
                  <input type="text" placeholder="Website" name="website" value={issuer.website} style={{ pointerEvents: 'none' }}/>
                </div>
              </div>

              <div className="input-group">
                <div className="input-group-input">
                  <input type="text" placeholder="Số điện thoại" name="phone" value={issuer.phone}/>
                </div>
              </div>

              <div className="input-group">
                <div className="input-group-input">
                  <input type="email" placeholder="Địa chỉ email" name="email" value={issuer.email}/>
                  <span className="-group__icon">
                    <i className="far fa-envelope pointer"></i>
                  </span>
                </div>
              </div> */}

              <div className="input-group">
                <div className="input-group-input">
                  <input type="text" placeholder="Địa chỉ ví" name="owner" value={owner} onChange={handleChangeOwner}/>
                </div>
              </div>

              <div className="input-group">
                <div className="input-group-input">
                  <input type="password" placeholder="Mật khẩu mới" name="password" onChange={handleChangePassword}/>
                  <span className="input-group__icon">
                    <i className="fas fa-lock pointer"></i>
                  </span>
                </div>
              </div>

              <div className="input-group">
                <div className="input-group-input">
                  <input type="password" placeholder="Xác nhận mật khẩu" name="password" onChange={handleChangeConfirmPassword} />
                  <span className="input-group__icon">
                    <i className="fas fa-lock pointer"></i>
                  </span>
                </div>
              </div>
              <div className="">
                <button className="acount-btn" onClick={async () => {
                  await handleSubmit();
                }}>
                  Lưu thông tin
                </button>
              </div>
              {!matched && (
          
              <div>
                <span class="m-label-error" v-show="errorMessage != ''">Please confirm your passwork again</span>
              </div>)}
            </div>
          </div>
          
        
        </div>
        
      </div>
    )}
    </>
    
  );
};

export default Profile;
