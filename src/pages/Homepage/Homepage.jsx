import React from 'react';

import Directory from '../../components/Directory/Directory';
import Products from '../../components/Products/Products';

import './Homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Directory />
    <Products />
  </div>
);

export default HomePage;