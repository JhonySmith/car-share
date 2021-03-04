import styled from 'styled-components';

export const InfoSection = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  align-items: center;

  width: 475px;
  height: 852px;
  padding-top: 55px;

  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 11px 47px rgba(174, 173, 231, 0.25);
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InfoItemImg = styled.img``;
export const InfoItemDescription = styled.span`
  font-family: 'FuturaDemiC';
  font-size: 40px;
`;
