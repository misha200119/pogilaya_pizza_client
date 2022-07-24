import styled from 'styled-components';
import { memo } from 'react';

const config = {
  desktop: 1200,
  tablet: 768,
  mobile: 320,
};

export const desktop = (styles: string) => `@media only screen and (min-width: ${config.desktop}px) { ${styles} }`;

export const tablet = (styles: string) => `@media only screen and (min-width: ${config.tablet}px) { ${styles} }`;

export const mobile = (styles: string) => `@media only screen and (min-width: ${config.mobile}px) { ${styles} }`;

export const Container = memo(styled.div`
  padding: 0 30px;

  ${tablet('padding: 0 50px')}

  ${desktop('padding: 0 70px')}
`);
