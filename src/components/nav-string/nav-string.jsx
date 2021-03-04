import React from 'react';
import { NavStringList, NavStringHome, NavStringItem, TextSpan } from './nav-string-styles.js';

export default function NavString() {
  return (
    <NavStringList>
      <NavStringItem>
        <NavStringHome />
      </NavStringItem>
      <NavStringItem>
        <TextSpan>Мой аккаунт</TextSpan>
      </NavStringItem>
      <NavStringItem>
        <TextSpan>Поездки</TextSpan>
      </NavStringItem>
      <NavStringItem>
        <TextSpan>Мои автомобили</TextSpan>
      </NavStringItem>
      <NavStringItem active={true}>
        <TextSpan active={true}>Карта</TextSpan>
      </NavStringItem>
    </NavStringList>
  );
}
