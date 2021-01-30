import React from 'react';

import Directory from '../../components/Directory/Directory';
import Products from '../../components/Products/Products.jsx';

import './Homepage.styles.scss';

const HomePage = () => (
  <div className='Homepage'>
    <div className="Homepage_Container Container">
      <Directory />
      <Products />
    </div>
  </div>
);

export default HomePage;