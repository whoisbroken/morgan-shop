import React from 'react';
import { NavLink } from "react-router-dom";

import "./NotFoundPage.scss";
import NotFoundPageImg from '../../images/404.png';

const NotFoundPage = () => {
  return (
    <main className="NotFoundPage">
      <div className="NotFoundPage_Container Container">
      <div className="NotFoundPage_CustomNumber">
        <h2 className="NotFoundPage_Char">4</h2>
        <img src={NotFoundPageImg} alt="404" className="NotFoundPage_Img"/>
        <h2 className="NotFoundPage_Char">4</h2>
      </div>
      <h4 className="NotFoundPage_Text">Sorry, we can't find this page</h4>
        <NavLink className="NotFoundPage_Link" to="/">
          home page
        </NavLink>
      </div>
    </main>
  );
};

export default NotFoundPage;