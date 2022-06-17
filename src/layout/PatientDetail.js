import axios from "axios";

import "../App.css";
import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'


class PatientDetail extends Component {

  state = {
    // Initially, no file is selected
    selectedFile: null,
    progress: 0,
    uploads: false,
    isSuccess: false,
  };

  onFileChange = (event) => {
    if(event.target.files[0] && event.target.files[0].type==="text/csv"){
      console.log("selectedfile:")
    this.setState({ selectedFile: event.target.files[0] });
    } else{
      // alert("You can only select csv files here")
      toastr.options = {
        positionClass : 'toast-top-full-width',
        hideDuration: 300,
        timeOut: 6000
      }
      toastr.error("You can only select csv files here")
      this.setState({ selectedFile: null });
    }
  };

  onFileUpload = async (e) => {
    
    e.preventDefault();
    if(this.state.selectedFile === null){
      toastr.options = {
        positionClass : 'toast-top-full-width',
        hideDuration: 300,
        timeOut: 6000
      }
      toastr.error("You can only send csv file and atleast one file must be selected")
      return;
    }
    const formData = new FormData();

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
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile != null) {
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
    
    window.scrollBy(0, document.body.scrollHeight)

    // alert("kkkkkkkkkkkk")

    let ele;
    ele = 
      localStorage.getItem("isLoggedIn") === "true" ? (<div className="file-upload">
      <h1>Please, upload the file containing appointments which is to be predicted. </h1>
      <div>
        <form onSubmit={this.onFileUpload} method="POST" className="form-uploads">
          <input type="file" accept={".csv"} excludeAcceptAllOption="true" onChange={this.onFileChange} name="file" />
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
