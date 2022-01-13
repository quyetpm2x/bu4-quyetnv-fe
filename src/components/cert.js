import React, { useEffect, useState } from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { useParams } from 'react-router-dom';
import { getPublicCert, verifyJson } from './helper/api';

const Cert = (props) => {
  const params = useParams();
  const targetHash = params.targetHash;
  console.log(targetHash);
  const [data, setData] = useState();

  useEffect(async() => {
    await getPublicData();
  }, []);

  const getPublicData = async () => {
    const data = await getPublicCert(targetHash);
    setData(data);
  };

  console.log(data);


  

  return (
    <>
    {!!data && (
        <div>
            <h1> Thông tin</h1>
            <h2>{`Sinh viên: ${data.data.name}`}</h2>
            <h2>{`MSSV: ${data.data.studentId}`}</h2>
            <h2>{`Ngày sinh: ${data.data.dob}`}</h2>
            <h2>{`Xếp loại: ${data.data.classification}`}</h2>
            <h2>{`Năm: ${data.data.graduatedYear}`}</h2>
            <h1>Xác thực</h1>
            <h2>{`Trường: ${data.issuer.name}`}</h2>
            <a href={`https://testnet.bscscan.com/address/${data.issuer.contractAddress}`}>{`Address: ${data.issuer.contractAddress}`}</a>
            {data.history.map((activity) => {
                return (
                    <div>
                        <h2>{`Data ${activity.action === 1 ? 'registered' : 'revoked'} on block chain on block ${activity.block}`}</h2>
                        <a href={`https://testnet.bscscan.com/tx/${activity.hash}`}>{`Transaction: ${activity.hash}`}</a>
                    </div>
                    
                )
            })}
        </div>
        
    )} 

    </>
  );
};

export default Cert;
