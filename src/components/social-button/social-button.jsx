import React from "react";

import "./social-button.style.scss";

const SocialButton = ({ children, ...otherProps }) => {
  return (
    <button className="Social_Button" {...otherProps}>
      {children}
    </button>
  )
};

export default SocialButton;