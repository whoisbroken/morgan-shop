import React from 'react';
import { NavLink } from "react-router-dom";

import CustomButton from "../custom-button/custom-button";
import SocialButton from "../social-button/social-button";
import FormInput from "../form-input/form-input";

import { auth, createUserProfileDocument, 
         signInWithGoogle, signInWithFacebook } from "../../firebase/firebase.utils";

import GoggleIcon from "../../images/ic_google.svg";
import FacebookIcon from "../../images/ic_facebook.svg";

import "./SignUpForm.scss";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password} = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '', 
      })

    } catch(error) {
      console.log(error)
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="SignUpForm" onSubmit={this.handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={this.state.displayName}
          handleChange={this.handleChange}
          label='Full Name'
          required
        />
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
          handleChange={this.handleChange}
          value={this.state.password}
          label='Password'
          required
        />
        <p className="SignUpForm_Privacy">By creating an account you agree to the website <span>terms and conditions</span> and our <span>privacy notice.</span></p>
        <CustomButton type="submit">CREATE AN ACCOUNT</CustomButton>
        <div className="SignUpForm_Box">
          <p className="SignUpForm_Box_Text">Have an account?</p>
          <NavLink className="SignUpForm_Box_Link" to="/login">
            Login
          </NavLink>
        </div>
        <p className="SignUpForm_Divider">or</p>
        <div className="SignUpForm_Buttons">
          <SocialButton onClick={signInWithGoogle}>
            <img src={GoggleIcon} alt="GoggleIcon" className="Social_Icon" />
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

export default SignUpForm;