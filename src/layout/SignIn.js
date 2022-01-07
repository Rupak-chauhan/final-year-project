import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class LogIn extends React.Component {
    signInHandler(){
        alert("Empty Data Base...")
    }
  render() {
      
    return (
      <Form className='container ' style={{width:'50%', marginTop:'50px'}}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter Your Password" />
          
        </FormGroup>
        
        
        <Button color='warning' onClick={this.signInHandler}>Log in</Button>
        {/* <p >don't have an account?</p>
        <Button>Sign Up</Button> */}
         
      </Form>
    );
  }
}