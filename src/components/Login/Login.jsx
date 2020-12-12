import React, { Component } from 'react';

import LoginForm from "../LoginForm/LoginForm";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login_Container Container">
          <h2 className="Login_Title">LOGIN</h2>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;