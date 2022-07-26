import { memo } from 'react';
import styled from 'styled-components';
import Visible from './mediaVisible';
import { tablet as tabletMedia, desktop as desktopMedia } from './responsive';

interface GridProps {
  mobileColumnsCount: string;
  tabletColumnsCount: string;
  desktopColumnsCount: string;
  mobileColumnsSize: string;
  tabletColumnsSize: string;
  desktopColumnsSize: string;
  mobileGridGap: string;
  tabletGridGap: string;
  desktopGridGap: string;
}

export const Grid = memo(styled.div<GridProps>`
  display: grid;
  grid-template-rows: auto;

  ${({ mobileColumnsCount, mobileGridGap, mobileColumnsSize }) => `
    grid-template-columns: ${mobileColumnsCount === 'auto' ? mobileColumnsCount : `repeat(${mobileColumnsCount}, ${mobileColumnsSize || '1fr'})`};
    grid-gap: ${mobileGridGap};
  `}
  
  ${({ tabletColumnsCount, tabletGridGap, tabletColumnsSize }) => `
    ${tabletMedia(`
    grid-template-columns: ${tabletColumnsCount === 'auto' ? tabletColumnsCount : `repeat(${tabletColumnsCount}, ${tabletColumnsSize || '1fr'})`};
      grid-gap: ${tabletGridGap};
    `)}
  `}

  ${({ desktopColumnsCount, desktopGridGap, desktopColumnsSize }) => `
    ${desktopMedia(`
    grid-template-columns: ${desktopColumnsCount === 'auto' ? desktopColumnsCount : `repeat(${desktopColumnsCount}, ${desktopColumnsSize || '1fr'})`};
      grid-gap: ${desktopGridGap};
    `)}
  `}
`);

type Position = {
  start: number;
  end: number;
};

interface GridItemProps {
  mobile: Position;
  tablet: Position;
  desktop: Position;
}

export const GridItem = memo(styled(Visible)<GridItemProps>`
  width: 100%;
  height: 100%;
  ${({ mobile }) => mobile && `grid-column: ${mobile.start} / ${mobile.end + 1};`}

  ${({ tablet }) => tablet && `${tabletMedia(`
    grid-column: ${tablet.start} / ${tablet.end + 1};
  `)}`}

  ${({ desktop }) => desktop && `${desktopMedia(`
    grid-column: ${desktop.start} / ${desktop.end + 1};
  `)}`}
`);

interface GridWithTemplateProps {
  templateAreasMobile: string;
  templateAreasTablet: string;
  templateAreasDesktop: string;
}

/**
 * That component affords you create fully custom layout of elements, be attentive because pattern
 * depends of your current viewport size so you must do patterns for all possible variants
 * (mobile, tablet, desktop) also set count of columns on different variants of @media
 *
 * @param templateAreas An string with pattern like '"logo logo" "nav nav" for two columns
 * for example...'
 */
export const GridWithTemplate = memo(styled(Grid)<GridWithTemplateProps>`
  grid-template-areas: ${({ templateAreasMobile }) => templateAreasMobile};

  ${({ templateAreasTablet }) => `${tabletMedia(`
    grid-template-areas: ${templateAreasTablet};
  `)}`}

  ${({ templateAreasDesktop }) => `${desktopMedia(`
    grid-template-areas: ${templateAreasDesktop};
  `)}`}
`);

interface GridItemAreaProps {
  areaName: string;
}

export const GridItemArea = memo(styled(Visible)<GridItemAreaProps>`
  width: 100%;
  height: 100%;
  grid-area: ${({ areaName }) => areaName};
`);
