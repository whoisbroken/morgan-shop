import React from 'react';
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="LoginForm">
      <label className="LoginForm_Label" htmlFor=""  >Email</label>
      <input className="LoginForm_Input" type="text" placeholder="Enter your email" />
      <label className="LoginForm_Label" htmlFor=""  >Password</label>
      <NavLink className="LoginForm_Box_Link" to="/reset-pass">
        Forgotten your password?
      </NavLink>  
      <input className="LoginForm_Input" type="text" placeholder="Enter your password" />
      <button className="LoginForm_Submit" type="submit">LOG IN</button>
      <div className="LoginForm_Box">
        <p className="LoginForm_Box_Text">Don't have an account?</p>
        <NavLink className="LoginForm_Box_Link" to="/signup">
          Create an account
        </NavLink>  
      </div>
      <p className="LoginForm_Divider">or</p>
      <div className="LoginForm_Buttons">
        <button className="LoginForm_Buttons">With Google</button>
        <button className="LoginForm_Buttons">With Facebook</button>
      </div>
    </form>
  );
};

export default LoginForm;