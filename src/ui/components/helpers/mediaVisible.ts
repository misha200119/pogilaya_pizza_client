import { memo } from 'react';
import styled from 'styled-components';
import { tablet, desktop } from './responsive';

interface VisibleProps {
  mobileVisible?: boolean;
  tabletVisible?: boolean;
  desktopVisible?: boolean;
}

const Visible = memo(styled.div<VisibleProps>`
  display: ${({ mobileVisible = true }) => (mobileVisible ? 'block' : 'none')};

  ${({ tabletVisible = true }) => (`
    ${tablet(
      `display: ${tabletVisible ? 'block' : 'none'}`,
    )}
  `)};

  ${({ desktopVisible = true }) => (`
    ${desktop(
      `display: ${desktopVisible ? 'block' : 'none'}`,
    )}
  `)};
`);

export default Visible;
