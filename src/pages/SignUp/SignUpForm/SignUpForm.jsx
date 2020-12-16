import React from 'react';
import { NavLink } from "react-router-dom";

import "./SignUpForm.scss";
import GoggleIcon from "../../../images/ic_google.svg";
import FacebookIcon from "../../../images/ic_facebook.svg";

const SignUp_Form = () => {
  return (
    <form className="SignUpForm">
      <label className="SignUpForm_Label" htmlFor=""  >Full Name</label>
      <input className="SignUpForm_Input" type="text" placeholder="Enter your First and Last name" />
      <label className="SignUpForm_Label" htmlFor=""  >Email</label>
      <input className="SignUpForm_Input" type="email" placeholder="Enter your email" />
      <label className="SignUpForm_Label" htmlFor=""  >Password</label>
      <input className="SignUpForm_Input" type="password" placeholder="Enter your password" />
      <p className="SignUpForm_Privacy">By creating an account you agree to the website <span>terms and conditions</span> and our <span>privacy notice.</span></p>
      <button className="SignUpForm_Submit" type="submit">CREATE AN ACCOUNT</button>
      <div className="SignUpForm_Box">
        <p className="SignUpForm_Box_Text">Have an account?</p>
        <NavLink className="SignUpForm_Box_Link" to="/login">
          Login
        </NavLink>  
      </div>
      <p className="SignUpForm_Divider">or</p>
      <div className="SignUpForm_Buttons">
        <button className="SignUpForm_Button">
          <img src={GoggleIcon} alt="GoggleIcon" className="LoginForm_Buttons_Icon"/>
          With Google</button>
        <button className="SignUpForm_Button">
          <img src={FacebookIcon} alt="FacebookIcon" className="LoginForm_Buttons_Icon"/>
          With Facebook</button>
      </div>
    </form>
  );
};

export default SignUp_Form;