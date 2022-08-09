import React from 'react';
import '../App.css';
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class SignUp extends React.Component {
  constructor(props){
    super(props);

    this.state={
      email: '',
      fullName: '',
      password: '',
      cPassword: '',
      gender: ''
    }
  }

  inputChangeHandler = (event) =>{
    event.preventDefault();
    console.log(event.target.name)
    this.setState({
      [event.target.name] : event.target.value,
    })
  };

  signUpHandler = (event) =>{
    event.preventDefault();
    console.log(this.state)
    alert("Empty Data Base...");
  }
  
  render() {
      
    return (
      <React.Fragment>
        <h2 className='text-center mt-5'>sign up here by providing accurate details</h2>
      <Form className='container ' style={{width:'50%', marginTop:'50px'}}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" onChange={this.inputChangeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Full Name</Label>
          <Input type="email" name="fullName" id="exampleEmail" placeholder="Enter Your Name" onChange={this.inputChangeHandler}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter Your Password" onChange={this.inputChangeHandler}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Confirm Password</Label>
          <Input type="password" name="cPassword" id="examplePassword" placeholder="Confirm Your Password" onChange={this.inputChangeHandler}/>
        </FormGroup>
        <div class="form-check">
  <input class="form-check-input" 
  type="radio" 
  name="gender" 
  id="flexRadioDefault1" 
  value="male" 
  onChange={this.inputChangeHandler}
  checked={this.state.gender === "male"} 
  >

  </input>
  <label class="form-check-label" for="flexRadioDefault1">
    male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" 
  type="radio" name="gender" 
  id="flexRadioDefault2" 
  checked={this.state.gender === "female"} 
  value="female"
  onChange={this.inputChangeHandler}
  >

  </input>
  <label class="form-check-label" for="flexRadioDefault2">
    female
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" 
  type="radio" name="gender" 
  id="flexRadioDefault2" 
  checked={this.state.gender === "other"}  
  value="other" 
  onChange={this.inputChangeHandler}
  >

  </input>
  <label class="form-check-label" for="flexRadioDefault2">
    other
  </label>
</div>
      
        <div class="btn-toolbar justify-content-between mt-4" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
  <button type="button" className="btn btn-warning mr-2" onClick={this.signUpHandler}>Sign up</button>
  </div>
  <div class="input-group">
    <div class="align-items-center">
    <span  >sign in, instead?</span>
    </div>
  
    <NavLink to="/signin"><button type="button" className="btn btn-warning"  to="/signin">Log in</button></NavLink>
  </div>
</div>
       
      </Form>
      </React.Fragment>
    );
  }
}