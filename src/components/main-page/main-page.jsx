import React from 'react';

import Header from '../header/header.jsx';
import NavString from '../nav-string/nav-string.jsx';
import Filters from '../filters/filters.jsx';
import Action from '../action/action.jsx';
import Map from '../map/map.jsx';
import SideMenu from '../side-menu/side-menu';

import { MainPageBlock } from './main-page-styles.js';

function MainPage() {
  return (
    <MainPageBlock>
      <SideMenu />
      <Header />
      <NavString />
      <Filters />
      <Action />
      <Map />
    </MainPageBlock>
  );
}

export default MainPage;
