import styled from 'styled-components';

export const ActionTypeWraper = styled.div`
  position: relative;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 218px;
  height: 54px;

  padding-left: 20px;

  border: 1px solid #e5efff;
  border-radius: 12px;

  font-family: 'FuturaDemiC';
  font-size: 17px;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 30px;
    height: 100%;
    border-left: 2px solid #e5efff;

    background: url('./img/back.svg') no-repeat center;
  }
`;
