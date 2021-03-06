import React from "react";
// import "./App.css";
import * as XLSX from "xlsx";
import { wrapData } from "../components/helper/api";

class ExcelToJson extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      file: "",
    };
  }

  handleClick(e) {
    this.refs.fileUploader.click();
  }

  filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    this.setState({ file });

    console.log(this.state.file);
  }

  readFile()  {
    var f = this.state.file;
    console.log(f);
    // var name = f.name;
    const reader = new FileReader();
    reader.onload = async(evt) => {
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
      // console.log("Data>>>" + data); // shows that excel data is read
      console.log(this.convertToJson(data)); // shows data in json format
      await wrapData(this.convertToJson(data)); //upload to mongo
    };
    reader.readAsBinaryString(f);
  };

  convertToJson(csv) {
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
    // console.log(result);
    return result; //JavaScript object
    // return JSON.stringify(result); //JSON
  }

  render() {
    return (
      <div>
        <input
          type="file"
          id="file"
          // ref="fileUploader"
          onChange={this.filePathset.bind(this)}
        />
        <button
          onClick={() => {
            this.readFile();
          }}
        >
          Read File
        </button>
      </div>
    );
  }
}

export default ExcelToJson;
