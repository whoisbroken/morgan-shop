import React from 'react';

import NotFoundPageImg from '../../images/404.png'

const NotFoundPage = () => {
  return (
    <div>
      <div className="NotFoundPage_Container Container">
      <div className="NotFoundPage_Box">
        <h2 className="NotFoundPage_Char">4</h2>
        <img src={NotFoundPageImg} alt="" className="NotFoundPage_Img"/>
        <h2 className="NotFoundPage_Char">4</h2>
      </div>
      <h4 className="NotFoundPage_Text">Sorry, we can't find this page</h4>
      <button className="NotFoundPage_Button">HOME PAGE</button>
      </div>
    </div>
  );
};

export default NotFoundPage;