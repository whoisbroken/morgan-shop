import React, { Component } from 'react';

import "./Login.scss";
import LoginForm from "../../components/LoginForm/LoginForm";

class Login extends Component {
  render() {
    return (
      <main className="Login">
        <div className="Login_Container Container">
          <h2 className="Login_Title">LOGIN</h2>
          <LoginForm />
        </div>
      </main>
    );
  }
}

export default Login;