import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="mySidenav" class="sidenav">
        <p class="logo">
          M-SoftTech <span class="menu">&#9776;</span>
        </p>
        <p class="logo1">
          {" "}
          <span class="menu1">&#9776;</span>
        </p>
        <a href="# " class="icon-a">
          <i class="fa fa-dashboard icons"></i> Dashboard
        </a>
        <a href="# " class="icon-a">
          <i class="fa fa-pie-chart icons"></i> Charts
        </a>
        <a href="# " class="icon-a">
          <i class="fa fa-list icons"></i> Projects
        </a>
        <a href="# " class="icon-a">
          <i class="fa fa-shopping-bag icons"></i> Orders
        </a>
        <a href="# " class="icon-a">
          <i class="fa fa-tasks icons"></i> Inventory
        </a>
        <a href="# " class="icon-a">
          <i class="fa fa-user icons"></i> Accounts
        </a>
        <a href="# " class="icon-a">
          <i class="fa fa-list-alt icons"></i> Tasks
        </a>
        <a href="# " class="icon-a">
          <i class="fa fa-bell icons"></i> Notification
        </a>
        <a href="# " class="icon-a">
          <i class="fa fa-circle icons"></i> Icons
        </a>
      </div>
      <div id="main">
        <div class="head">
          <div class="col-div-6">
            <p class="nav"> Dashboard</p>
          </div>

          <div class="col-div-6">
            <i class="fa fa-search search-icon"></i>

            <i class="fa fa-bell noti-icon"></i>
            <div class="notification-div">
              <p class="noti-head">
                Notification <span>2</span>
              </p>
              <hr class="hr" />
              <p>
                Your Order is Placed
                <span>Lorem Ipsum is simply dummy </span>
              </p>
              <p>
                Your Order is Placed
                <span>Lorem Ipsum is simply dummy </span>
              </p>
              <p>
                Your Order is Placed
                <span>Lorem Ipsum is simply dummy </span>
              </p>
            </div>
            <div class="profile">
              <img src="images/user.png" class="pro-img" />
              <p>
                Manoj Adhikari{" "}
                <i class="fa fa-ellipsis-v dots" aria-hidden="true"></i>
              </p>
              <div class="profile-div">
                <p>
                  <i class="fa fa-user"></i> Profile
                </p>
                <p>
                  <i class="fa fa-cogs"></i> Settings
                </p>
                <p>
                  <i class="fa fa-power-off"></i> Log Out
                </p>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="clearfix"></div>
        <br />

        <div class="col-div-4-1">
          <div class="box">
            <p class="head-1">Sales</p>
            <p class="number">67343</p>
            <p class="percent">
              <i class="fa fa-long-arrow-up" aria-hidden="true"></i> 5.674%{" "}
              <span>Since Last Months</span>
            </p>
            <i class="fa fa-line-chart box-icon"></i>
          </div>
        </div>
        <div class="col-div-4-1">
          <div class="box">
            <p class="head-1">purchases</p>
            <p class="number">2343</p>
            <p class="percent" style={{color: "red !important"}}>
              <i class="fa fa-long-arrow-down" aria-hidden="true"></i> 5.64%{" "}
              <span>Since Last Months</span>
            </p>
            <i class="fa fa-circle-o-notch box-icon"></i>
          </div>
        </div>
        <div class="col-div-4-1">
          <div class="box">
            <p class="head-1">orders</p>
            <p class="number">35343</p>
            <p class="percent">
              <i class="fa fa-long-arrow-up" aria-hidden="true"></i> 5.674%{" "}
              <span>Since Last Months</span>
            </p>
            <i class="fa fa-shopping-bag box-icon"></i>
          </div>
        </div>

        <div class="clearfix"></div>
        <br />

        <div class="col-div-4-1">
          <div class="box-1">
            <div class="content-box-1">
              <p class="head-1">Overview</p>
              <br />
              <div class="m-box active">
                <p>
                  Member Profit
                  <br />
                  <span class="no-1">Last Months</span>
                </p>
                <span class="no">+2343</span>
              </div>

              <div class="m-box">
                <p>
                  Member Profit
                  <br />
                  <span class="no-1">Last Months</span>
                </p>
                <span class="no">+2343</span>
              </div>

              <div class="m-box">
                <p>
                  Member Profit
                  <br />
                  <span class="no-1">Last Months</span>
                </p>
                <span class="no">+2343</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-div-4-1">
          <div class="box-1">
            <div class="content-box-1">
              <p class="head-1">
                Total Sale <span>View All</span>
              </p>

              <div class="circle-wrap">
                <div class="circle">
                  <div class="mask full">
                    <div class="fill"></div>
                  </div>
                  <div class="mask half">
                    <div class="fill"></div>
                  </div>
                  <div class="inside-circle"> 70% </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-div-4-1">
          <div class="box-1">
            <div class="content-box-1">
              <p class="head-1">
                Acitivity <span>View All</span>
              </p>
              <br />
              <p class="act-p">
                <i class="fa fa-circle"></i> Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.{" "}
              </p>
              <p class="act-p">
                <i class="fa fa-circle" style={{color:"red!important"}}></i> Lorem
                Ipsum is simply dummy text of the
                printing and typesetting industry.{" "}
              </p>
              <p class="act-p">
                <i class="fa fa-circle" style={{color:"green!important"}}></i>{" "}
                Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.{" "}
              </p>
              <p class="act-p">
                <i class="fa fa-circle"></i> Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.{" "}
              </p>
            </div>
          </div>
        </div>

        <div class="clearfix"></div>
        <br />
        <div class="col-div-12">
          <div class="box-8">
            <div class="content-box">
              <p>
                Top Selling Projects <span>Sell All</span>
              </p>
              <br />
              <table>
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="clearfix"></div>
      </div>
    </>
  );
};

export default Home;
