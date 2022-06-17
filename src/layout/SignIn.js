import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../App.css";
import { Form, FormGroup, Label, Input, Alert } from "reactstrap";
import axios from "axios";

import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  let history = useHistory()

  const toggleAlert = () => {
    setIsVisible(!isVisible);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    
    let response;
    try {
      response = await axios.post("http://localhost:4000/api/auth/login", {
        email: email,
        password: password,
      });
      console.log("Response from loginaAPI: ", response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isLoggedIn", Boolean(true));
      localStorage.getItem("token");
      history.push("/status")
      console.log("after history", history)

     const isLoggedIn = localStorage.getItem("isLoggedIn")
     props.login(isLoggedIn);

      if(isLoggedIn == 'true'){
        toastr.options = {
          positionClass : 'toast-top-full-width',
          hideDuration: 300,
          timeOut: 6000
        }
        toastr.success(`Login successful`)
      }


    } catch (error) {
      console.log("isVisible:", isVisible);
      setIsVisible(true)
      console.log("Error in login: ", error);
    }
    

  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "6px 6px white",
        }}
      >
        <h2 className="text-center mt-5">
          Please, login here to access admin panel
        </h2>
        <Form
          className="container "
          style={{ width: "80%", marginTop: "50px" }}
          onSubmit={submitHandler}
        >
          <Alert color="danger" isOpen={isVisible} toggle={toggleAlert}>Invalid credentials, please login again.</Alert>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <div
            class="btn-toolbar justify-content-between"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group" role="group" aria-label="First group">
              <button type="submit" className="btn btn-warning mr-2">
                Log in
              </button>
            </div>
          </div>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default LogIn;
