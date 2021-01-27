import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.styles.scss';

const MenuItem = ({ title, image, history, alias, match }) => (
  <div 
    className="menu-item" 
    onClick={() => history.push(`${match.url}${alias}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(https://morgan-shop.herokuapp.com${image})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);