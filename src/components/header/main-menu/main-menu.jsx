import React from 'react';
import { MainMenuList, MainMenuItem, BurgerMenu, BurgerMenuItem } from './main-menu-styles.js';

export default function MainMenu() {
  return (
    <MainMenuList>
      <MainMenuItem active={true}>Мои автомобили</MainMenuItem>
      <MainMenuItem>Настройки</MainMenuItem>
      <MainMenuItem>Финансы</MainMenuItem>
      <BurgerMenu>
        <BurgerMenuItem />
        <BurgerMenuItem />
        <BurgerMenuItem />
      </BurgerMenu>
    </MainMenuList>
  );
}
