import React from 'react';
import { NavLink } from "react-router-dom";

import "./ResetPassword.scss";

const ResetPassword = () => {
  return (
    <div className="ResetPassword_Container Container">
      <h2 className="ResetPassword_Title">RESET YOUR PASSWORD</h2>
      <form className="ResetPassword">
        <p className="ResetPassword_Text">Enter the email address for your Morgan account and we’ll send a single-use password reset link.</p>
        <p className="ResetPassword_Text">This link will expire after 24 hours.</p>
        <label className="ResetPassword_Label" htmlFor=""  >Email</label>
        <input className="ResetPassword_Input" type="email" placeholder="Enter your email" />
        <button className="ResetPassword_Submit" type="submit">SEND A PASSWORD RESET LINK</button>
        <NavLink className="ResetPassword_Link" to="/login">
          Back to login
      </NavLink>
      </form>
    </div>
  );
};

export default ResetPassword;