import React from 'react';
import { NavLink } from "react-router-dom";

const ResetPassword = () => {
  return (
    <form className="ResetPassword">
      <h2 className="ResetPassword_Title">RESET YOUR PASSWORD</h2>
      <p className="ResetPassword_Text">Enter the email address for your Morgan account and we’ll send a single-use password reset link.</p>
      <p className="ResetPassword_Text">This link will expire after 24 hours.</p>
      <label className="ResetPassword_Label" htmlFor=""  >Email</label>
      <input className="ResetPassword_Input" type="text" placeholder="Enter your email" />
      <button className="ResetPassword_Submit" type="submit">LOG IN</button>
      <NavLink className="ResetPassword_Link" to="/login">
          Back to login
      </NavLink>
    </form>
  );
};

export default ResetPassword;