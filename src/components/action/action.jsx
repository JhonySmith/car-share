import React from 'react';

import ActionType from './action-type/action-type.jsx';

import { ActionsBlock, ActionText, ActionTextChoosen } from './action-styles.js';

export default function Action() {
  return (
    <ActionsBlock>
      <ActionText>
        Всего автомобилей: 4 <ActionTextChoosen>Выбрано: 1</ActionTextChoosen>
      </ActionText>
      <ActionType />
    </ActionsBlock>
  );
}
