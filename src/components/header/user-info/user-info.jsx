import React from 'react';
import { UserBlock, UserName, UserPhoto, UserImg } from './user-info-styles.js';

function UserInfo() {
  return (
    <UserBlock>
      <UserName>Иван Сергеенко</UserName>
      <UserPhoto>
        <UserImg />
      </UserPhoto>
    </UserBlock>
  );
}

export default UserInfo;
