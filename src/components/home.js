import React, { useEffect, useState } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { Link } from "react-router-dom";
import { formatActivity } from "./helper/format";
const {
  getIssuer,
  updateContractAddress,
  updateDeployTransaction,
  getHistory,
  getBatches,
  getCerts,
  revokeData,
} = require("./helper/api");
const {
  isWalletRegisted,
  connectMetaMask,
  registWallet,
  deployDocumentStore,
  issueDocument,
  revokeDocument,
} = require("./helper/ultis");
const { formatBatchStatus } = require("./helper/format");

const Home = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);
  const [issuer, setIssuer] = useState({});
  const [history, setHistory] = useState([]);
  const [batches, setBatches] = useState([]);
  const [certs, setCerts] = useState([]);
  const [selected, setSelected] = useState([]);
  const [file, setFile] = useState([]);

  useEffect(async () => {
    const deployed = await checkContractDeploy();
    const issuer = await getIssuer();
    setIssuer(issuer);
    setIsDeployed(deployed);
    await handleChangeWalletAccount();
    await getHistoryActions();
    await getAllBatches();
    await getAllCerts();
  }, []);

  //   useEffect( async () => {
  //     const issuer = await getIssuer();
  //     setIssuer(issuer);
  //  }, [isDeployed]);

  // useEffect(async () => {
  //   await connectWallet();
  // }, [window.ethereum.currentProvider]);

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
    const data = await deployDocumentStore(props.wallet);
    await updateContractAddress(data.contractAddress);
    await updateDeployTransaction(
      data.contractAddress,
      data.transactionHash,
      data.block
    );
    setIsDeployed(true);
  };

  const getHistoryActions = async () => {
    const actions = await getHistory();
    setHistory(actions);
  };

  const getAllBatches = async () => {
    const data = await getBatches();
    setBatches(data);
  };

  const getAllCerts = async () => {
    const data = await getCerts();
    data.map((cert) => {
      cert.checked = false;
      selected.push(cert);
    });
    setCerts(data);
  };

  console.log(selected);

  const issue = async (merkleRoot) => {
    const tx = await issueDocument(
      merkleRoot,
      issuer.contractAddress,
      issuer.owner
    );
    await getHistoryActions();
    await getAllBatches();
  };

  const handleCheckBox = (key) => {
    const checkedList = selected;
    checkedList[key].checked = !checkedList[key].checked;
    setSelected(checkedList);
  };

  const revoke = async () => {
    const studentIds = [];
    selected.map((cert) => {
      if (cert.checked) {
        studentIds.push(cert.studentId);
      }
    });
    const merkleRoot = await revokeData(studentIds);
    await revokeDocument(merkleRoot, issuer.contractAddress, issuer.owner);
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
        {/* <div class="col-div-4-1">
          <div class="box">
            <p class="head-1">purchases</p>
            <p class="number">2343</p>
            <p class="percent" style={{ color: 'red !important' }}>
              <i class="fa fa-long-arrow-down" aria-hidden="true"></i> 5.64% <span>Since Last Months</span>
            </p>
            <i class="fa fa-circle-o-notch box-icon"></i>
          </div>
        </div> */}
        {/* <div class="col-div-4-1">
          <div class="box">
            <p class="head-1">orders</p>
            <p class="number">35343</p>
            <p class="percent">
              <i class="fa fa-long-arrow-up" aria-hidden="true"></i> 5.674% <span>Since Last Months</span>
            </p>
            <i class="fa fa-shopping-bag box-icon"></i>
          </div>
        </div> */}

        <div class="clearfix"></div>
        <br />

        <div class="col-div-4-1">
          <div class="box-1">
            <div class="content-box-1">
              <p class="head-1">Overview</p>
              <br />
              {batches.map((batch) => {
                return (
                  <div class="m-box active">
                    <p>
                      {batch.merkleRoot}
                      <br />
                      <span class="no-1">
                        {formatBatchStatus(batch.status)}
                      </span>
                    </p>
                    {batch.status === 1 && (
                      <button
                        className="acount-btn"
                        onClick={async () => {
                          await issue(batch.merkleRoot);
                        }}
                      >
                        Issue Documents
                      </button>
                    )}
                  </div>
                );
              })}
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
                Activites <span>View All</span>
              </p>
              <br />
              {history.map((activity) => {
                return (
                  <a
                    class="act-p"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://testnet.bscscan.com/tx/${activity.hash}`}
                  >
                    <i class="fa fa-circle"></i>{" "}
                    {formatActivity(activity.action)}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div class="clearfix"></div>
        <br />
        <div class="col-div-12">
          <div class="box-8">
            <div class="content-box">
              <p>
                Top Selling Projects{" "}
                <span>
                  <button
                    className="acount-btn"
                    onClick={async () => {
                      await revoke();
                    }}
                  >
                    Revoke
                  </button>
                </span>
              </p>
              <br />
              <table>
                <tr>
                  <th>Student Id</th>
                  <th>Name</th>
                  <th>Date of birth</th>
                  <th>Study mode</th>
                  <th>Classification</th>
                  <th>Year</th>
                  <th>Check</th>
                </tr>
                {selected.map((cert, key) => {
                  return (
                    <tr>
                      <th>{cert.studentId}</th>
                      <th>{cert.name}</th>
                      <th>{cert.dob}</th>
                      <th>{cert.studyMode}</th>
                      <th>{cert.classification}</th>
                      <th>{cert.graduatedYear}</th>
                      <th>
                        <label>
                          <input
                            type="checkbox"
                            defaultChecked={cert.checked}
                            onChange={() => {
                              handleCheckBox(key);
                            }}
                          />
                        </label>
                      </th>
                    </tr>
                  );
                })}
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
