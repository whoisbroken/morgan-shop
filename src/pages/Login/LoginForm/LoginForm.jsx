import React from 'react';
import { NavLink } from "react-router-dom";

import "./LoginForm.scss";
import GoggleIcon from "../../../images/ic_google.svg";
import FacebookIcon from "../../../images/ic_facebook.svg";

const LoginForm = () => {
  return (
    <form className="LoginForm">
      <label className="LoginForm_Label" htmlFor=""  >Email</label>
      <input className="LoginForm_Input" type="email" placeholder="Enter your email" />
      <label className="LoginForm_Label" htmlFor=""  >Password</label>
      <NavLink className="LoginForm_Link" to="/reset-pass">
        Forgotten your password?
      </NavLink>  
      <input className="LoginForm_Input" type="password" placeholder="Enter your password" />
      <button className="LoginForm_Submit" type="submit">LOG IN</button>
      <div className="LoginForm_Box">
        <p className="LoginForm_Box_Text">Don't have an account?</p>
        <NavLink className="LoginForm_Box_Link" to="/signup" activeClassName="LoginForm_Box_Link_active">
          Create an account
        </NavLink>  
      </div>
      <span className="LoginForm_Divider">or</span>
      <div className="LoginForm_Buttons">
        <button className="LoginForm_Button">
          <img src={GoggleIcon} alt="GoggleIcon" className="LoginForm_Buttons_Icon"/>
          <span>With Goggle</span>
        </button>
        <button className="LoginForm_Button">
          <img src={FacebookIcon} alt="FacebookIcon" className="LoginForm_Buttons_Icon"/>
          <span>With Facebook</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;