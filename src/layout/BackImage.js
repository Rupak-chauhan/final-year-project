import React, { useEffect, useState } from "react";
import "../App.css";
import LogIn from "./SignIn";

const BackImage = (props) => {
  let [isLoggedIn, setIsloggedIn] = useState(localStorage.getItem("isLoggedIn"))

  const loginHandle = (isLoggedIn) => {
    setIsloggedIn(isLoggedIn);
    props.hideMenu(isLoggedIn);
  }

  useEffect(()=>{
      console.log("localStorage",localStorage.getItem("isLoggedIn"))
      console.log("isLoggedIn", isLoggedIn)
      setIsloggedIn((localStorage.getItem("isLoggedIn")))
  }, [])
  return (
    <div className="back">
      <div className="back-image">
        <div className="intro">
          {isLoggedIn === "true" ? (<div></div>) : (<LogIn  login={loginHandle} />)}
        </div>
      </div>
    </div>
  );
};

export default BackImage;
