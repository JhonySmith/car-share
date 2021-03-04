import styled from 'styled-components';

export const FiltersViewBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  border-radius: 12px;
  border: 1px solid #f5f9ff;
  overflow: hidden;
`;

export const LineView = styled.button`
  margin: 0;
  padding: 0;
  width: 51px;
  height: 51px;
  background: url('./img/burger.svg') no-repeat center;
  background-color: ${(props) => (props.active ? '#F5F9FF' : 'transparent')};
  border: none;
  cursor: pointer;
`;

export const BlockView = styled.button`
  margin: 0;
  padding: 0;
  width: 51px;
  height: 51px;
  background-color: ${(props) => (props.active ? '#F5F9FF' : 'transparent')};
  background: url('./img/category.svg') no-repeat center;
  border: none;
  cursor: pointer;
`;
