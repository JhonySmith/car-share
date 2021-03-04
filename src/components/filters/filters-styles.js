import styled from 'styled-components';

export const FiltersBlock = styled.section`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 1662px;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 29px 21px 25px 21px;
  margin-top: 30px;
  box-shadow: 0px 4px 19px rgba(180, 178, 208, 0.1);
`;

export const Cursor = styled.button`
  width: 56px;
  height: 54px;
  border: none;
  background: url('./img/location.svg') no-repeat center;
  background-color: #4865ff;
  border-radius: 12px;
`;

export const Settings = styled.button`
  width: 56px;
  height: 54px;
  border: none;
  background: url('./img/settings.svg') no-repeat center;
  background-color: #f5f9ff;
  border-radius: 12px;
`;

export const AddAutoButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 243px;
  height: 54px;
  padding-top: 22px;
  border: none;
  background-color: #272a31;
  border-radius: 12px;

  color: #ffffff;
  font-family: 'FuturaDemiC';
  text-transform: uppercase;

  &::before {
    content: '';
    display: block;
    width: 11px;
    height: 11px;
    margin-right: 10px;
    background: url('./img/plus.svg') no-repeat center;
  }
`;
