import React, { useEffect, useState } from 'react';
import { verifyJson } from './helper/api';

const VerifyPage = (props) => {
  const [files, setFiles] = useState('');
  const [isValid, setIsValid] = useState('');

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = async (e) => {
      setFiles(e.target.result);
      const valid = await verifyJson(e.target.result);
      setIsValid(valid);
    };
  };
  return (
    <>
      <h1>Upload Json file - Example</h1>

      <input type="file" onChange={handleChange} />
      <br />
      {'Verify certification -- ' + isValid}
    </>
  );
};

export default VerifyPage;
