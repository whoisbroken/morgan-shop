import React from 'react';
import { NavLink } from "react-router-dom";

import "./ResetPassword.scss";
import CustomButton from "../../components/custom-button/custom-button";
import FormInput from "../../components/form-input/form-input";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
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
    <div className="ResetPassword_Container Container">
      <h2 className="ResetPassword_Title">RESET YOUR PASSWORD</h2>
      <form className="ResetPassword">
        <p className="ResetPassword_Text">Enter the email address for your Morgan account and we’ll send a single-use password reset link.</p>
        <p className="ResetPassword_Text">This link will expire after 24 hours.</p>
        <FormInput 
          name='email'
          type='email'
          handleChange={this.handleChange}
          value={this.state.email}
          label='Email'
          required
        />
        <CustomButton type="submit">SEND A PASSWORD RESET LINK</CustomButton>
        <NavLink className="ResetPassword_Link" to="/login">
          Back to sign in
        </NavLink>
      </form>
    </div>
  );
};
}

export default ResetPassword;