import React, { memo, FC } from 'react';
import styled from 'styled-components';
import { Container as ResponsiveContainer } from '../../helpers/responsive';

const FooterContainer = memo(styled.footer`
`);

const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`
  display: flex;
  flex-wrap: wrap;

  padding-top: 45px;

  padding-bottom: 30px;

  background-color: #000;
  color: #fff;
`);

interface FooterItemProps {
  width: string;
}

const FooterItem = memo(styled.div<FooterItemProps>`
  width: ${({ width }) => width};
`);

const Footer: FC<{}> = memo(() => {
  return (
    <FooterContainer>
      <StyledResponsiveContainer>
        <FooterItem
          width="25%"
        >
          1
        </FooterItem>
        <FooterItem
          width="25%"
        >
          2
        </FooterItem>
        <FooterItem
          width="25%"
        >
          3
        </FooterItem>
        <FooterItem
          width="25%"
        >
          4
        </FooterItem>
      </StyledResponsiveContainer>
    </FooterContainer>
  );
});

export default Footer;
