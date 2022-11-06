import { memo } from 'react';
import styled from 'styled-components';
import { desktop, tablet } from '../../helpers/responsive';

interface Props {
  backgroundImage: string;
}

export const Section = memo(styled.section<Props>`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  scroll-snap-align: start;

  padding: 0 15px;

  ${tablet(`
    padding: 0 50px;
  `)}

  ${desktop(`
    padding: 0 150px;
  `)}
`);
