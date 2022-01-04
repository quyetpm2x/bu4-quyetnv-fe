import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import { readFile } from "fs";

const { getIssuer, updateContractAddress, wrapData } = require("./helper/api");
const {
  isWalletRegisted,
  connectMetaMask,
  registWallet,
  deployDocumentStore,
} = require("./helper/ultis");

const Home = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);
  const [issuer, setIssuer] = useState({});
  const [file, setFile] = useState({}); //set files state

  useEffect(async () => {
    const deployed = await checkContractDeploy();
    const issuer = await getIssuer();
    setIssuer(issuer);
    setIsDeployed(deployed);
    await handleChangeWalletAccount();
  }, []);

  useEffect(async () => {
    const issuer = await getIssuer();
    setIssuer(issuer);
  }, [isDeployed]);

  // useEffect(async () => {
  //   await connectWallet();
  // }, [window.ethereum.currentProvider]);

  console.log(issuer);

  const connectWallet = async () => {
    let wallet;
    const issuer = await getIssuer();
    if (issuer.owner) {
      wallet = await connectMetaMask();
    } else {
      wallet = await registWallet();
    }
    if (wallet) {
      setIsConnected(true);
      props.setWallet(wallet);
    } else {
      setIsConnected(false);
    }
  };

  const handleChangeWalletAccount = async () => {
    window.ethereum.on("accountsChanged", async function () {
      // Time to reload your interface with accounts[0]!
      await connectWallet();
    });
  };

  const checkContractDeploy = async () => {
    const issuer = await getIssuer();
    return issuer.contractAddress;
  };

  const deployContract = async () => {
    const store = await deployDocumentStore(props.wallet);
    await updateContractAddress(store);
    setIsDeployed(true);
    console.log(store);
  };

  //for excels
  const convertToJson = (csv) => {
    var lines = csv.split("\n");
    // console.log(lines);
    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length - 1; i++) {
      //csv auto add \n at the end of file, to be fix
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    console.log(result);
    return result; //JavaScript object
    // return JSON.stringify(result); //JSON
  };

  const filePathset = (e) => {

    var a_file = e.target.files[0];
    console.log(a_file);
    setFile(a_file);
  };

  const handleChange = (evt) => {
    const reader = new FileReader();
    reader.onload = async (evt) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });

      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });

      /* Update state */
      console.log("Data>>>" + data); // shows that excel data is read
      console.log(this.convertToJson(data)); // shows data in json format
      await wrapData(convertToJson(data)); //upload to mongo
      // await getBatches();
      // await getCerts();
    };
    reader.readAsBinaryString(file);
  };

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
              <button
                className="acount-btn"
                onClick={async () => {
                  console.log("connect");
                  if (!isConnected) {
                    await connectWallet();
                  }
                }}
              >
                {isConnected ? "Connected" : "Connect Wallet"}
              </button>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="clearfix"></div>
        <br />

        <div class="col-div-4-1">
          <div class="box">
            <p class="head-1">{issuer.name}</p>
            {isDeployed ? (
              <p class="number">{issuer.contractAddress}</p>
            ) : (
              <button
                className="acount-btn"
                onClick={async () => {
                  await deployContract(props.wallet);
                }}
              >
                Deploy your contract
              </button>
            )}

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
            <p class="percent" style={{ color: "red !important" }}>
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
              {/* <p class="head-1">
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
              </div> */}
              <div>
                <input
                  type="file"
                  // id="file"
                  // ref="fileUploader"
                  onChange={filePathset.bind()}
                />
                <button onClick={handleChange}>Read File</button>
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
                <i class="fa fa-circle" style={{ color: "red!important" }}></i>{" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <p class="act-p">
                <i
                  class="fa fa-circle"
                  style={{ color: "green!important" }}
                ></i>{" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
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
