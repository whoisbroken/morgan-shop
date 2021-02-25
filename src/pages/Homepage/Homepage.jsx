import React from 'react';

import Directory from '../../components/Directory/Directory';
import Main from '../../components/Main/Main.jsx';
import Scroll from '../../components/Scroll/Scroll';

import './Homepage.styles.scss';

const HomePage = () => (
  <main className='Homepage'>
    <div className="Homepage_Container Container">
      <Directory />
      <Main />
      <Scroll showBelow={300} />
    </div>
  </main>
);

export default HomePage;