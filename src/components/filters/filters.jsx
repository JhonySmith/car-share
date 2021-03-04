import React from 'react';

import FiltersView from './filters-view/filters-view';
import Search from './search/search.jsx';
import SortType from './sort-type/sort-type.jsx';

import { FiltersBlock, Cursor, Settings, AddAutoButton } from './filters-styles.js';

export default function Filters() {
  return (
    <FiltersBlock>
      <FiltersView />
      <Search />
      <SortType />
      <Cursor />
      <Settings />
      <AddAutoButton>Добавить автомобиль</AddAutoButton>
    </FiltersBlock>
  );
}
