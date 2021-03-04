import styled from 'styled-components';

export const SortTypeWraper = styled.div`
  position: relative;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 540px;
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

export const HeadText = styled.span`
  color: #9cafd3;
  margin-right: 8px;
`;
