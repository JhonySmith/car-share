import styled from 'styled-components';

export const SearchField = styled.input`
  box-sizing: border-box;
  width: 531px;
  height: 54px;
  padding-left: 50px;
  color: #9cafd3;

  border: none;
  background-color: #f5f9ff;
  border-radius: 12px;

  font-family: 'FuturaDemiC';
  font-size: 17px;

  &::-webkit-input-placeholder {
    color: #9cafd3;
  }
  &:-ms-input-placeholder {
    color: #9cafd3;
  }
  &::-moz-placeholder {
    color: #9cafd3;
    opacity: 1;
  }
  &:-moz-placeholder {
    color: #9cafd3;
    opacity: 1;
  }
`;

export const SearchWraper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 16px;
    left: 17px;

    width: 19px;
    height: 21px;

    background: url('./img/search.svg') no-repeat center;
  }
`;
