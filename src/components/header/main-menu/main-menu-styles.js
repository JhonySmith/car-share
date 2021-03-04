import styled from 'styled-components';

export const MainMenuList = styled.ul`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-content: center;

  min-width: 900px;
  padding-right: 20px;
  padding-left: 20px;

  list-style-type: none;
`;

export const MainMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.active ? '#131314' : '#9cafd3')};
  font-size: 20px;
  font-family: 'FuturaDemiC';
  font-weight: 600;
  line-height: 18.33px;
  text-transform: uppercase;
  cursor: pointer;

  &::after {
    content: '';
    box-sizing: border-box;
    display: block;
    width: 85%;
    height: 3px;
    margin-top: 10px;
    background-color: ${(props) => (props.active ? '#4865ff' : 'transparent')};
  }
`;

export const BurgerMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 32px;
  padding: 0;
  cursor: pointer;
`;

export const BurgerMenuItem = styled.li`
  display: block;
  width: 6px;
  height: 6px;

  background-color: #9cafd3;

  border-radius: 50%;
`;
