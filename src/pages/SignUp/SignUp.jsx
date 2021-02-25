import React from 'react';

import "./SignUp.scss";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <main className="SignUp">
      <div className="SignUp_Container Container">
        <h2 className="SignUp_Title">CREATE AN ACCOUNT</h2>
        <SignUpForm />
      </div>
    </main>
  );
}

export default SignUp;