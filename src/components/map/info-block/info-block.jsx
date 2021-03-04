import React from 'react';
import { InfoSection, InfoItem, InfoItemImg, InfoItemDescription } from './info-block-styles.js';

export default function InfoBlock() {
  return (
    <InfoSection>
      <InfoItem>
        <InfoItemImg src="./img/car.png" />
        <InfoItemDescription>Skoda Rapid T312KT799</InfoItemDescription>
      </InfoItem>
    </InfoSection>
  );
}
