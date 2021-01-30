import React from 'react';

import Directory from '../../components/Directory/Directory';
import Main from '../../components/Main/Main.jsx';

import './Homepage.styles.scss';

const HomePage = () => (
  <main className='Homepage'>
    <div className="Homepage_Container Container">
      <Directory />
      <Main />
    </div>
  </main>
);

export default HomePage;