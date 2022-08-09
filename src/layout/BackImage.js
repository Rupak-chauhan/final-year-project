import React, { useEffect, useState } from "react";
import "../App.css";
import LogIn from "./SignIn";
// import ProjectComponent from "./ProjectComponent";

const BackImage = () => {
  let [isLoggedIn, setIsloggedIn] = useState(localStorage.getItem("isLoggedIn"))

  useEffect(()=>{
      console.log("localStorage",localStorage.getItem("isLoggedIn"))
      console.log("isLoggedIn", isLoggedIn)
      setIsloggedIn((localStorage.getItem("isLoggedIn")))
  }, [])
  return (
    <div className="back">
      <div className="back-image">
        <div className="intro">
          {/* <h1  data-aos="zoom-in-up">
              Just track your appointment here
          </h1> */}
          {/* <p  data-aos="zoom-in-up">
          We help people, organizations to take their business online by developing their websites. 
          We give chance to people across the world to contact us and develop their websites at the most affordable price. 
          Just click on the button below to begin the journey of making your business online.
          </p>
          <a href="/project">
          <button className="back-btn">
              Give Project
          </button>
          </a> */}
          {console.log(typeof(isLoggedIn))}
          {isLoggedIn === "true" ? (<div></div>) : (<LogIn />)}
        </div>
      </div>
      {/* <ProjectComponent /> */}
    </div>
  );
};

export default BackImage;
