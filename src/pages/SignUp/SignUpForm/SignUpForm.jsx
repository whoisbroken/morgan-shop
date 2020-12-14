import React from 'react';
import { NavLink } from "react-router-dom";

const SignUp_Form = () => {
  return (
    <form className="SignUpForm">
      <label className="SignUpForm_Label" htmlFor=""  >Full Name</label>
      <input className="SignUpForm_Input" type="text" placeholder="Enter your First and Last name" />
      <label className="SignUpForm_Label" htmlFor=""  >Email</label>
      <input className="SignUpForm_Input" type="text" placeholder="Enter your email" />
      <label className="SignUpForm_Label" htmlFor=""  >Password</label>
      <input className="SignUpForm_Input" type="text" placeholder="Enter your password" />
      <p className="SignUpForm_Privacy">By creating an account you agree to the website terms and conditions and our privacy notice.</p>
      <button className="SignUpForm_Submit" type="submit">LOG IN</button>
      <div className="SignUpForm_Box">
        <p className="SignUpForm_Box_Text">Have an account?</p>
        <NavLink className="SignUpForm_Box_Link" to="/login">
          Login
        </NavLink>  
      </div>
      <p className="SignUpForm_Divider">or</p>
      <div className="SignUpForm_Buttons">
        <button className="SignUpForm_Buttons">With Google</button>
        <button className="SignUpForm_Buttons">With Facebook</button>
      </div>
    </form>
  );
};

export default SignUp_Form;