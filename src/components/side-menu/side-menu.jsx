import React from 'react';

import Logo from './logo/logo';

import { SideBlock, ListMenu, ItemMenu } from './side-menu-styles';

export default function SideMenu() {
  return (
    <SideBlock>
      <Logo />
      <ListMenu>
        <ItemMenu width={35} height={35} url={'./img/send.svg'} />
        <ItemMenu width={40} height={40} url={'./img/message.svg'} />
        <ItemMenu width={39} height={37} url={'./img/notification.svg'} />
        <ItemMenu width={38} height={38} url={'./img/profile.svg'} />
        <ItemMenu width={39} height={39} url={'./img/setting.svg'} />
      </ListMenu>
    </SideBlock>
  );
}
