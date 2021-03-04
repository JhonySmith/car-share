import React from 'react';
import { FiltersViewBlock, LineView, BlockView } from './filters-view-styles.js';

export default function FiltersView() {
  return (
    <FiltersViewBlock>
      <LineView active={true} />
      <BlockView active={false} />
    </FiltersViewBlock>
  );
}
