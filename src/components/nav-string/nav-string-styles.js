import styled from 'styled-components';

export const NavStringList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-left: 20px;
  margin-top: 30px;
  list-style: none;
`;
export const NavStringHome = styled.span`
  display: block;
  width: 23px;
  height: 23px;
  background: url('./img/home.svg') no-repeat center;
`;
export const NavStringItem = styled.li`
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: ${(props) => (props.active ? 'none' : 'block')};
    width: 19px;
    height: 19px;
    margin-left: 10px;
    margin-right: 10px;
    background: url('./img/forward.svg') no-repeat center;
  }
`;

export const TextSpan = styled.span`
  border-bottom: 1px solid #8093ac;
  border-bottom: ${(props) => (props.active ? 'none' : '')};

  font-family: 'FuturaBookC';
  font-size: 17px;
  color: ${(props) => (props.active ? '#131314' : '#8093ac')};
  line-height: 13.3px;
`;
