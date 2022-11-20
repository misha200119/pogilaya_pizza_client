/* eslint-disable import/named */
import React, { memo } from 'react';
import { currentCursorEffect as _currentCursorEffect } from '../../../store/slices/themeSlice';
import { CursorEffects } from '../../../utils/constants/ui/cursorEffects';
import { useAppSelector } from '../../../utils/hooks/reduxHooks';
import { CursorAfterEffect } from './CursorAfterEffect';
import { PizzaWithCursor } from './PizzaWithCursor';

export const cursorEffects = {
  [CursorEffects.PIZZA_AFTER_CURSOR_EFFECT]: <CursorAfterEffect />,
  [CursorEffects.PIZZA_WITH_CURSOR]: <PizzaWithCursor />,
};

export const Animations = memo(() => {
  const cursorEffect = useAppSelector(_currentCursorEffect);

  return cursorEffects[cursorEffect];
});
