import React, { Component } from 'react';
import Header from './layout/Header';
import SignIn from './layout/SignIn';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import SignUp from './layout/SignUp';
import BackImage from './layout/BackImage';
import AppointmentStatus from './layout/AppointmentStatus';
import PatientDetail from './layout/PatientDetail';
import ReportComponent from './layout/ReportComponent';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{marginBottom:'15px'}}>
        <Header />
        <BackImage />

        <Switch>
          {/* <Route exact path="/" component={SignIn} /> */}
          {/* <Route path="/signin" component={SignIn} /> */}
          <Route path="/status" component={PatientDetail} />
          <Route path="/report" component={ReportComponent} />
          <Redirect to="/" />
        </Switch>
        
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
