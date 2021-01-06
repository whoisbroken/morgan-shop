import React, { Component } from 'react';

import "./SignUp.scss";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <div className="SignUp_Container Container">
          <h2 className="SignUp_Title">CREATE AN ACCOUNT</h2>
          <SignUpForm />
        </div>
      </div>
    );
  }
}

export default SignUp;