import React from 'react';

import InfoBlock from './info-block/info-block';

import { MapSection, MapBlock } from './map-styles.js';

export default function Map() {
  return (
    <MapSection>
      <MapBlock
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71821.80178429841!2d37.92241032546729!3d55.76838065839323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414acc71afc70c31%3A0x26a24d6ca774c494!2z0JHQsNC70LDRiNC40YXQsCwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1614885455607!5m2!1sru!2sru"
        width="1662"
        height="851"
        allowfullscreen=""
        loading="lazy"
        title="MainMap"
      ></MapBlock>
      <InfoBlock />
    </MapSection>
  );
}
