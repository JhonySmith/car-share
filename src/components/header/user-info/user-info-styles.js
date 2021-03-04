import styled from 'styled-components';

export const UserBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const UserName = styled.div`
  font-family: 'FuturaDemiC';
  font-size: 20px;
  text-decoration: underline;
  color: #252733;
`;
export const UserPhoto = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 44px;
  height: 44px;
  margin-left: 15px;
  border: 2px solid #dfe0eb;
  border-radius: 50%;
`;
export const UserImg = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;

  display: block;
  background: url('./img/avatar.png') no-repeat center center;
  border: 2px solid transparent;
  border-radius: 50%;
`;
