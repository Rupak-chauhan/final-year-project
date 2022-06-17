import React, { Component, useEffect, useState } from 'react';
import Header from './layout/Header';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import BackImage from './layout/BackImage';
import login from './layout/SignIn';
import PatientDetail from './layout/PatientDetail';
import ReportComponent from './layout/ReportComponent';


const App = () => {

  let [disLoggedIn, setDIsloggedIn] = useState("false1111111")

  const dloginHandle = (isLoggedIn) => {
    setDIsloggedIn(isLoggedIn)
  }

  useEffect(() => {
    disLoggedIn === 'true' ?  disLoggedIn : setDIsloggedIn(localStorage.getItem("isLoggedIn"))
  }, [])

    return (
      <BrowserRouter>
        <div style={{marginBottom:'15px'}}>

        <Header dlogin={disLoggedIn}/>
        <BackImage  hideMenu={dloginHandle}/>

        <Switch>
          {/* <Route path="/" component={login} /> */}
          <Route path="/status" component={PatientDetail} />
          <Route path="/report" component={ReportComponent} />
          <Redirect to="/" />
        </Switch>
        
      </div>
      </BrowserRouter>
      
    );
}

export default App;
