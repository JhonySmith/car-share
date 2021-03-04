import React from 'react';
import { SearchField, SearchWraper } from './serach-styles.js';

export default function Search() {
  return (
    <SearchWraper>
      <SearchField placeholder="Найти по марке, модели, регистрационному знаку, группе..." />
    </SearchWraper>
  );
}
