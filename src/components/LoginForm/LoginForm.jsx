import React from 'react';
import { NavLink } from "react-router-dom";

import CustomButton from "../custom-button/custom-button";
import SocialButton from "../social-button/social-button";
import FormInput from "../form-input/form-input";

import { signInWithGoogle, signInWithFacebook } from "../../firebase/firebase.utils";

import GoogleIcon from "../../images/ic_google.svg";
import FacebookIcon from "../../images/ic_facebook.svg";

import "./LoginForm.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
  return (
    <form className="LoginForm" onSubmit={this.handleSubmit}>
      <FormInput
        name='email'
        type='email'
        handleChange={this.handleChange}
        value={this.state.email}
        label='Email'
        required
      />
      <FormInput
        name='password'
        type='password'
        value={this.state.password}
        handleChange={this.handleChange}
        label='Password'
        required
      />
      <NavLink className="LoginForm_Link" to="/reset-pass">
        Forgotten your password?
      </NavLink>
      <CustomButton type="submit">LOG IN</CustomButton>
      <div className="LoginForm_Box">
        <p className="LoginForm_Box_Text">Don't have an account?</p>
        <NavLink className="LoginForm_Box_Link" to="/signup" activeClassName="LoginForm_Box_Link_active">
          Create an account
        </NavLink>
      </div>
      <span className="LoginForm_Divider">or</span>
      <div className="LoginForm_Buttons">
        <SocialButton onClick={signInWithGoogle}>
          <img src={GoogleIcon} alt="GoogleIcon" className="Social_Icon" />
          <span>With Google</span>
        </SocialButton>
        <SocialButton onClick={signInWithFacebook}>
          <img src={FacebookIcon} alt="FacebookIcon" className="Social_Icon" />
          <span>With Facebook</span>
        </SocialButton>
      </div>
    </form>
  );
};
}

export default LoginForm;