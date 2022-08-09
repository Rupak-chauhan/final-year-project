import axios from "axios";
import "../App.css";
// import { useHistory } from 'react-router-dom';
import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import { ExcelRenderer } from "react-excel-renderer";

class PatientDetail extends Component {
  
  state = {
    // Initially, no file is selected
    selectedFile: null,
    progress: 0,
    uploads: false,
    isSuccess: false,
  };

  //process file data and extract row wise
  // processFile = (str, delim = ",") => {
  //   const headers = str.slice(0, str.indexOf("\n")).split(delim);
  //   console.log(headers);
  // };

  //read and show csv file data as text
  // readfile = () => {
  //   const reader = new FileReader();

    // reader.onload = function (e) {
    //   const text = e.target.result;
    //   console.log(text);
    //   // this.processFile(text);
    //   const delim = ",";
    //   const headers = text.slice(0, text.indexOf("\n")).split(",");
    //   console.log(headers);
    //   const rows = text.slice(text.indexOf("\n") + 1).split("\n");
    //   // rows.map((row)=>{
    //   //     console.log(row)
    //   // })
    //   console.log(rows);
    // };

    // reader.readAsText(this.state.selectedFile);
  // };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // let history = useHistory();
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = async (e) => {
    //       var new_file = new File([this.selectedFile], 'hello.xlsx');
    // console.log(new_file);
    e.preventDefault();
    // this.readfile();
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(formData);
    console.log(this.state.selectedFile);

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    this.setState({ uploads: true });
    // Request made to the backend api
    // Send formData object
    console.log(formData);
    const response = await axios.post(
      "http://127.0.0.1:5000/predict_api",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: async (progressEvent) => {
          const progress =
            (await (progressEvent.loaded / progressEvent.total)) * 50;
          console.log(progress);
          this.setState({ progress: progress });
        },
        onDownloadProgress: async (progressEvent) => {
          const progress =
            (await 50) + (progressEvent.loaded / progressEvent.total) * 50;
          console.log(progress);
          this.setState({ progress: progress });
        },
      }
    );
    this.setState({ isSuccess: true });
    this.props.history.push({
      pathname: '/report',
      state: response.data
    })
    console.log("Data from Prediction__API", response.data);
    //   alert(response.data.message);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose file before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    
    let ele;
    ele = 
      localStorage.getItem("isLoggedIn") === "true" ? (<div className="file-upload">
      <h1>Please, upload the file containing appointments which is to be predicted. </h1>
      {/* <h3>upload your files here</h3> */}
      <div>
        <form onSubmit={this.onFileUpload} method="POST">
          <input type="file" onChange={this.onFileChange} name="file" />
          <button type="submit" className="button-upload">Upload!</button>
        </form>
      </div>
      {this.fileData()}
      {this.state.uploads ? (
        <ProgressBar
          bgcolor="#99ff66"
          progress={this.state.progress}
          height={30}
        />
      ) : (
        <div></div>
      )}
    </div>) :(<div>You are not authorized to this route</div>)
    
    return (
      <div>
      {ele}
      </div>
    );
  }
}

export default PatientDetail;
