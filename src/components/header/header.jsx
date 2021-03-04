import React from 'react';

import MainMenu from './main-menu/main-menu.jsx';
import UserInfo from './user-info/user-info.jsx';

import { HeaderBlock } from './header-styles.js';

function Header() {
  return (
    <HeaderBlock>
      <MainMenu />
      <UserInfo />
    </HeaderBlock>
  );
}

export default Header;
