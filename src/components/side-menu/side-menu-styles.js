import styled from 'styled-components';

export const SideBlock = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 112px;
  height: 97%;
  padding-top: 40px;
  background-color: #131314;

  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;

export const ItemMenu = styled.li`
  display: block;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin-bottom: 70px;
  background: url(${(props) => props.url}) no-repeat center;
`;
