import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "../App.css";
import { Form, FormGroup, Label, Input } from "reactstrap";
import NavLink from "react-router-dom/NavLink";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../actions/userActions";
import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let history = useHistory()

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  const redirect = "/status";

  // useEffect(() => {

  //     if (isAuthenticated) {
  //         history.push(redirect)
  //     }

  //     if (error) {
  //         alert.error(error);
  //         dispatch(clearErrors());
  //     }

  // }, [dispatch, alert, isAuthenticated, error, history])

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
    } catch (error) {
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
            {/* <div class="input-group">
    <div class="align-items-center">
    <span  >Don't have an account?</span>
    </div>
  
    <NavLink to="/signup"><button type="button" className="btn btn-warning">Sign up</button></NavLink>
  </div> */}
          </div>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default LogIn;
