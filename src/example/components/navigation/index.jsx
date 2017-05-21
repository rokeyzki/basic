import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { HeaderBar } from './header-bar';
import { SideBar } from './side-bar';
import { BottomBar } from './bottom-bar';
import { Container } from './container';

const Navigation = () => (
  <Router>
    <div>
      <HeaderBar />
      <SideBar />
      <Container />
      <BottomBar />
    </div>
  </Router>
);


export { Navigation };
