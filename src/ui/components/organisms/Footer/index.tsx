import React, { memo, FC } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Logo from '../../athoms/Logo';
import { Grid, GridItem } from '../../helpers/grid';
import { Container as ResponsiveContainer } from '../../helpers/responsive';

const logoImage = '/images/Logo.webp';

const FooterContainer = memo(styled.footer`
`);

const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`
  padding-top: 45px;

  padding-bottom: 30px;

  background-color: #000;
  color: #fff;
`);

const LinkContainer = memo(styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`);

const FooterLink = memo(styled.a`
  display: flex;
  align-items: center;
  grid-gap: 5px;

  color: #8d8d8d;
  text-decoration: none;

  transition: all 0.3s;

  &:hover {
    color: #fff;
  }
`);

const FooterLinksBlockTitle = memo(styled.span`
  display: block;
  padding-bottom: 25px;
`);

const LowerFooterItem = memo(styled(GridItem)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`);

const Footer: FC<{}> = memo(() => {
  return (
    <FooterContainer>
      <StyledResponsiveContainer>
        <Grid
          mobileColumnsCount="1"
          tabletColumnsCount="4"
          desktopColumnsCount="4"
          mobileGridGap="60px"
          tabletGridGap="15px"
          desktopGridGap="20px"
        >
          <GridItem>
            <FooterLinksBlockTitle>
              My pizza
            </FooterLinksBlockTitle>
            <LinkContainer>
              <FooterLink
                href="#/catalog"
              >
                Catalog
              </FooterLink>
              <FooterLink
                href=" #"
              >
                Pizzerias
              </FooterLink>
              <FooterLink
                href=" #"
              >
                Information on the content of allergens and nutritional value
              </FooterLink>
              <FooterLink
                href=" #"
              >
                Food safety policy
              </FooterLink>
            </LinkContainer>
          </GridItem>
          <GridItem>
            <FooterLinksBlockTitle>
              Services
            </FooterLinksBlockTitle>
            <LinkContainer>
              <FooterLink
                href="#"
              >
                Pizza tracker
              </FooterLink>
            </LinkContainer>
          </GridItem>
          <GridItem
            width="25%"
          >
            <FooterLinksBlockTitle>
              Contacts
            </FooterLinksBlockTitle>
            <LinkContainer>
              <FooterLink
                href="mailto:myPizza@example.ua"
              >
                info@myPizza.ua
              </FooterLink>
              <FooterLink
                href="#"
              >
                Leave feedback
              </FooterLink>
              <FooterLink
                href="tel:+380685199434"
              >
                +38068-51-99-434
              </FooterLink>
            </LinkContainer>
          </GridItem>
          <GridItem>
            <div>
              <Logo size="50px" imgUrl={logoImage} linkHref="#">
                <p>My pizza</p>
              </Logo>
            </div>
          </GridItem>
          <LowerFooterItem>
            <div></div>
            <FooterLink
              href="https://github.com/misha200119"
            >
              Created by Misha Kravtsov
              <GitHubIcon />
            </FooterLink>
          </LowerFooterItem>
          <LowerFooterItem>
            <FooterLinksBlockTitle>
              Download mobile app
            </FooterLinksBlockTitle>
            <div
              style={{
                display: 'flex',
              }}
            >
              <FooterLink
                href="#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100px" height="40px" viewBox="0 0 135 40" enableBackground="new 0 0 135 40">
                  <g>
                    <g>
                      <g>
                        <path fill="#FFFFFF" d="M30.128,19.784c-0.029-3.223,2.639-4.791,2.761-4.864c-1.511-2.203-3.853-2.504-4.676-2.528 c-1.967-0.207-3.875,1.177-4.877,1.177c-1.022,0-2.565-1.157-4.228-1.123c-2.14,0.033-4.142,1.272-5.24,3.196 c-2.266,3.923-0.576,9.688,1.595,12.859c1.086,1.553,2.355,3.287,4.016,3.226c1.625-0.067,2.232-1.036,4.193-1.036 c1.943,0,2.513,1.036,4.207,0.997c1.744-0.028,2.842-1.56,3.89-3.127c1.255-1.78,1.759-3.533,1.779-3.623 C33.507,24.924,30.161,23.647,30.128,19.784z"></path>
                        <path fill="#FFFFFF" d="M26.928,10.306c0.874-1.093,1.472-2.58,1.306-4.089c-1.265,0.056-2.847,0.875-3.758,1.944 c-0.806,0.942-1.526,2.486-1.34,3.938C24.557,12.205,26.016,11.382,26.928,10.306z"></path>
                      </g>
                    </g>
                    <g>
                      <path fill="#FFFFFF" d="M53.645,31.504h-2.271l-1.244-3.909h-4.324l-1.185,3.909h-2.211l4.284-13.308h2.646L53.645,31.504z M49.755,25.955L48.63,22.48c-0.119-0.355-0.342-1.191-0.671-2.507h-0.04c-0.131,0.566-0.342,1.402-0.632,2.507l-1.105,3.475 H49.755z"></path>
                      <path fill="#FFFFFF" d="M64.662,26.588c0,1.632-0.441,2.922-1.323,3.869c-0.79,0.843-1.771,1.264-2.942,1.264 c-1.264,0-2.172-0.454-2.725-1.362h-0.04v5.055h-2.132V25.067c0-1.026-0.027-2.079-0.079-3.159h1.875l0.119,1.521h0.04 c0.711-1.146,1.79-1.718,3.238-1.718c1.132,0,2.077,0.447,2.833,1.342C64.284,23.949,64.662,25.127,64.662,26.588z M62.49,26.666 c0-0.934-0.21-1.704-0.632-2.31c-0.461-0.632-1.08-0.948-1.856-0.948c-0.526,0-1.004,0.176-1.431,0.523 c-0.428,0.35-0.708,0.807-0.839,1.373c-0.066,0.264-0.099,0.48-0.099,0.65v1.6c0,0.698,0.214,1.287,0.642,1.768 s0.984,0.721,1.668,0.721c0.803,0,1.428-0.31,1.875-0.928C62.266,28.496,62.49,27.68,62.49,26.666z"></path>
                      <path fill="#FFFFFF" d="M75.699,26.588c0,1.632-0.441,2.922-1.324,3.869c-0.789,0.843-1.77,1.264-2.941,1.264 c-1.264,0-2.172-0.454-2.724-1.362H68.67v5.055h-2.132V25.067c0-1.026-0.027-2.079-0.079-3.159h1.875l0.119,1.521h0.04 c0.71-1.146,1.789-1.718,3.238-1.718c1.131,0,2.076,0.447,2.834,1.342C75.32,23.949,75.699,25.127,75.699,26.588z M73.527,26.666 c0-0.934-0.211-1.704-0.633-2.31c-0.461-0.632-1.078-0.948-1.855-0.948c-0.527,0-1.004,0.176-1.432,0.523 c-0.428,0.35-0.707,0.807-0.838,1.373c-0.065,0.264-0.099,0.48-0.099,0.65v1.6c0,0.698,0.214,1.287,0.64,1.768 c0.428,0.48,0.984,0.721,1.67,0.721c0.803,0,1.428-0.31,1.875-0.928C73.303,28.496,73.527,27.68,73.527,26.666z"></path>
                      <path fill="#FFFFFF" d="M88.039,27.772c0,1.132-0.393,2.053-1.182,2.764c-0.867,0.777-2.074,1.165-3.625,1.165 c-1.432,0-2.58-0.276-3.449-0.829l0.494-1.777c0.936,0.566,1.963,0.85,3.082,0.85c0.803,0,1.428-0.182,1.877-0.544 c0.447-0.362,0.67-0.848,0.67-1.454c0-0.54-0.184-0.995-0.553-1.364c-0.367-0.369-0.98-0.712-1.836-1.029 c-2.33-0.869-3.494-2.142-3.494-3.816c0-1.094,0.408-1.991,1.225-2.689c0.814-0.699,1.9-1.048,3.258-1.048 c1.211,0,2.217,0.211,3.02,0.632l-0.533,1.738c-0.75-0.408-1.598-0.612-2.547-0.612c-0.75,0-1.336,0.185-1.756,0.553 c-0.355,0.329-0.533,0.73-0.533,1.205c0,0.526,0.203,0.961,0.611,1.303c0.355,0.316,1,0.658,1.936,1.027 c1.145,0.461,1.986,1,2.527,1.618C87.77,26.081,88.039,26.852,88.039,27.772z"></path>
                      <path fill="#FFFFFF" d="M95.088,23.508h-2.35v4.659c0,1.185,0.414,1.777,1.244,1.777c0.381,0,0.697-0.033,0.947-0.099l0.059,1.619 c-0.42,0.157-0.973,0.236-1.658,0.236c-0.842,0-1.5-0.257-1.975-0.77c-0.473-0.514-0.711-1.376-0.711-2.587v-4.837h-1.4v-1.6h1.4 v-1.757l2.094-0.632v2.389h2.35V23.508z"></path>
                      <path fill="#FFFFFF" d="M105.691,26.627c0,1.475-0.422,2.686-1.264,3.633c-0.883,0.975-2.055,1.461-3.516,1.461 c-1.408,0-2.529-0.467-3.365-1.401s-1.254-2.113-1.254-3.534c0-1.487,0.43-2.705,1.293-3.652c0.861-0.948,2.023-1.422,3.484-1.422 c1.408,0,2.541,0.467,3.396,1.402C105.283,24.021,105.691,25.192,105.691,26.627z M103.479,26.696 c0-0.885-0.189-1.644-0.572-2.277c-0.447-0.766-1.086-1.148-1.914-1.148c-0.857,0-1.508,0.383-1.955,1.148 c-0.383,0.634-0.572,1.405-0.572,2.317c0,0.885,0.189,1.644,0.572,2.276c0.461,0.766,1.105,1.148,1.936,1.148 c0.814,0,1.453-0.39,1.914-1.168C103.281,28.347,103.479,27.58,103.479,26.696z"></path>
                      <path fill="#FFFFFF" d="M112.621,23.783c-0.211-0.039-0.436-0.059-0.672-0.059c-0.75,0-1.33,0.283-1.738,0.85 c-0.355,0.5-0.533,1.132-0.533,1.895v5.035h-2.131l0.02-6.574c0-1.106-0.027-2.113-0.08-3.021h1.857l0.078,1.836h0.059 c0.225-0.631,0.58-1.139,1.066-1.52c0.475-0.343,0.988-0.514,1.541-0.514c0.197,0,0.375,0.014,0.533,0.039V23.783z"></path>
                      <path fill="#FFFFFF" d="M122.156,26.252c0,0.382-0.025,0.704-0.078,0.967h-6.396c0.025,0.948,0.334,1.673,0.928,2.173 c0.539,0.447,1.236,0.671,2.092,0.671c0.947,0,1.811-0.151,2.588-0.454l0.334,1.48c-0.908,0.396-1.98,0.593-3.217,0.593 c-1.488,0-2.656-0.438-3.506-1.313c-0.848-0.875-1.273-2.05-1.273-3.524c0-1.447,0.395-2.652,1.186-3.613 c0.828-1.026,1.947-1.539,3.355-1.539c1.383,0,2.43,0.513,3.141,1.539C121.873,24.047,122.156,25.055,122.156,26.252z M120.123,25.699c0.014-0.632-0.125-1.178-0.414-1.639c-0.369-0.593-0.936-0.889-1.699-0.889c-0.697,0-1.264,0.289-1.697,0.869 c-0.355,0.461-0.566,1.014-0.631,1.658H120.123z"></path>
                    </g>
                    <g>
                      <g>
                        <path fill="#FFFFFF" d="M49.05,10.009c0,1.177-0.353,2.063-1.058,2.658c-0.653,0.549-1.581,0.824-2.783,0.824 c-0.596,0-1.106-0.026-1.533-0.078V6.982c0.557-0.09,1.157-0.136,1.805-0.136c1.145,0,2.008,0.249,2.59,0.747 C48.723,8.156,49.05,8.961,49.05,10.009z M47.945,10.038c0-0.763-0.202-1.348-0.606-1.756c-0.404-0.407-0.994-0.611-1.771-0.611 c-0.33,0-0.611,0.022-0.844,0.068v4.889c0.129,0.02,0.365,0.029,0.708,0.029c0.802,0,1.421-0.223,1.857-0.669 S47.945,10.892,47.945,10.038z"></path>
                        <path fill="#FFFFFF" d="M54.909,11.037c0,0.725-0.207,1.319-0.621,1.785c-0.434,0.479-1.009,0.718-1.727,0.718 c-0.692,0-1.243-0.229-1.654-0.689c-0.41-0.459-0.615-1.038-0.615-1.736c0-0.73,0.211-1.329,0.635-1.794s0.994-0.698,1.712-0.698 c0.692,0,1.248,0.229,1.669,0.688C54.708,9.757,54.909,10.333,54.909,11.037z M53.822,11.071c0-0.435-0.094-0.808-0.281-1.119 c-0.22-0.376-0.533-0.564-0.94-0.564c-0.421,0-0.741,0.188-0.961,0.564c-0.188,0.311-0.281,0.69-0.281,1.138 c0,0.435,0.094,0.808,0.281,1.119c0.227,0.376,0.543,0.564,0.951,0.564c0.4,0,0.714-0.191,0.94-0.574 C53.725,11.882,53.822,11.506,53.822,11.071z"></path>
                        <path fill="#FFFFFF" d="M62.765,8.719l-1.475,4.714h-0.96l-0.611-2.047c-0.155-0.511-0.281-1.019-0.379-1.523h-0.019 c-0.091,0.518-0.217,1.025-0.379,1.523l-0.649,2.047h-0.971l-1.387-4.714h1.077l0.533,2.241c0.129,0.53,0.235,1.035,0.32,1.513 h0.019c0.078-0.394,0.207-0.896,0.389-1.503l0.669-2.25h0.854l0.641,2.202c0.155,0.537,0.281,1.054,0.378,1.552h0.029 c0.071-0.485,0.178-1.002,0.32-1.552l0.572-2.202H62.765z"></path>
                        <path fill="#FFFFFF" d="M68.198,13.433H67.15v-2.7c0-0.832-0.316-1.248-0.95-1.248c-0.311,0-0.562,0.114-0.757,0.343 c-0.193,0.229-0.291,0.499-0.291,0.808v2.796h-1.048v-3.366c0-0.414-0.013-0.863-0.038-1.349h0.921l0.049,0.737h0.029 c0.122-0.229,0.304-0.418,0.543-0.569c0.284-0.176,0.602-0.265,0.95-0.265c0.44,0,0.806,0.142,1.097,0.427 c0.362,0.349,0.543,0.87,0.543,1.562V13.433z"></path>
                        <path fill="#FFFFFF" d="M71.088,13.433h-1.047V6.556h1.047V13.433z"></path>
                        <path fill="#FFFFFF" d="M77.258,11.037c0,0.725-0.207,1.319-0.621,1.785c-0.434,0.479-1.01,0.718-1.727,0.718 c-0.693,0-1.244-0.229-1.654-0.689c-0.41-0.459-0.615-1.038-0.615-1.736c0-0.73,0.211-1.329,0.635-1.794s0.994-0.698,1.711-0.698 c0.693,0,1.248,0.229,1.67,0.688C77.057,9.757,77.258,10.333,77.258,11.037z M76.17,11.071c0-0.435-0.094-0.808-0.281-1.119 c-0.219-0.376-0.533-0.564-0.939-0.564c-0.422,0-0.742,0.188-0.961,0.564c-0.188,0.311-0.281,0.69-0.281,1.138 c0,0.435,0.094,0.808,0.281,1.119c0.227,0.376,0.543,0.564,0.951,0.564c0.4,0,0.713-0.191,0.939-0.574 C76.074,11.882,76.17,11.506,76.17,11.071z"></path>
                        <path fill="#FFFFFF" d="M82.33,13.433h-0.941l-0.078-0.543h-0.029c-0.322,0.433-0.781,0.65-1.377,0.65 c-0.445,0-0.805-0.143-1.076-0.427c-0.246-0.258-0.369-0.579-0.369-0.96c0-0.576,0.24-1.015,0.723-1.319 c0.482-0.304,1.16-0.453,2.033-0.446V10.3c0-0.621-0.326-0.931-0.979-0.931c-0.465,0-0.875,0.117-1.229,0.349l-0.213-0.688 c0.438-0.271,0.979-0.407,1.617-0.407c1.232,0,1.85,0.65,1.85,1.95v1.736C82.262,12.78,82.285,13.155,82.33,13.433z M81.242,11.813v-0.727c-1.156-0.02-1.734,0.297-1.734,0.95c0,0.246,0.066,0.43,0.201,0.553c0.135,0.123,0.307,0.184,0.512,0.184 c0.23,0,0.445-0.073,0.641-0.218c0.197-0.146,0.318-0.331,0.363-0.558C81.236,11.946,81.242,11.884,81.242,11.813z"></path>
                        <path fill="#FFFFFF" d="M88.285,13.433h-0.93l-0.049-0.757h-0.029c-0.297,0.576-0.803,0.864-1.514,0.864 c-0.568,0-1.041-0.223-1.416-0.669s-0.562-1.025-0.562-1.736c0-0.763,0.203-1.381,0.611-1.853c0.395-0.44,0.879-0.66,1.455-0.66 c0.633,0,1.076,0.213,1.328,0.64h0.02V6.556h1.049v5.607C88.248,12.622,88.26,13.045,88.285,13.433z M87.199,11.445v-0.786 c0-0.136-0.01-0.246-0.029-0.33c-0.059-0.252-0.186-0.464-0.379-0.635c-0.195-0.171-0.43-0.257-0.701-0.257 c-0.391,0-0.697,0.155-0.922,0.466c-0.223,0.311-0.336,0.708-0.336,1.193c0,0.466,0.107,0.844,0.322,1.135 c0.227,0.31,0.533,0.465,0.916,0.465c0.344,0,0.619-0.129,0.828-0.388C87.1,12.069,87.199,11.781,87.199,11.445z"></path>
                        <path fill="#FFFFFF" d="M97.248,11.037c0,0.725-0.207,1.319-0.621,1.785c-0.434,0.479-1.008,0.718-1.727,0.718 c-0.691,0-1.242-0.229-1.654-0.689c-0.41-0.459-0.615-1.038-0.615-1.736c0-0.73,0.211-1.329,0.635-1.794s0.994-0.698,1.713-0.698 c0.691,0,1.248,0.229,1.668,0.688C97.047,9.757,97.248,10.333,97.248,11.037z M96.162,11.071c0-0.435-0.094-0.808-0.281-1.119 c-0.221-0.376-0.533-0.564-0.941-0.564c-0.42,0-0.74,0.188-0.961,0.564c-0.188,0.311-0.281,0.69-0.281,1.138 c0,0.435,0.094,0.808,0.281,1.119c0.227,0.376,0.543,0.564,0.951,0.564c0.4,0,0.715-0.191,0.941-0.574 C96.064,11.882,96.162,11.506,96.162,11.071z"></path>
                        <path fill="#FFFFFF" d="M102.883,13.433h-1.047v-2.7c0-0.832-0.316-1.248-0.951-1.248c-0.311,0-0.562,0.114-0.756,0.343 s-0.291,0.499-0.291,0.808v2.796h-1.049v-3.366c0-0.414-0.012-0.863-0.037-1.349h0.92l0.049,0.737h0.029 c0.123-0.229,0.305-0.418,0.543-0.569c0.285-0.176,0.602-0.265,0.951-0.265c0.439,0,0.805,0.142,1.096,0.427 c0.363,0.349,0.543,0.87,0.543,1.562V13.433z"></path>
                        <path fill="#FFFFFF" d="M109.936,9.504h-1.154v2.29c0,0.582,0.205,0.873,0.611,0.873c0.188,0,0.344-0.016,0.467-0.049 l0.027,0.795c-0.207,0.078-0.479,0.117-0.814,0.117c-0.414,0-0.736-0.126-0.969-0.378c-0.234-0.252-0.35-0.676-0.35-1.271V9.504 h-0.689V8.719h0.689V7.855l1.027-0.31v1.173h1.154V9.504z"></path>
                        <path fill="#FFFFFF" d="M115.484,13.433h-1.049v-2.68c0-0.845-0.316-1.268-0.949-1.268c-0.486,0-0.818,0.245-1,0.735 c-0.031,0.103-0.049,0.229-0.049,0.377v2.835h-1.047V6.556h1.047v2.841h0.02c0.33-0.517,0.803-0.775,1.416-0.775 c0.434,0,0.793,0.142,1.078,0.427c0.355,0.355,0.533,0.883,0.533,1.581V13.433z"></path>
                        <path fill="#FFFFFF" d="M121.207,10.853c0,0.188-0.014,0.346-0.039,0.475h-3.143c0.014,0.466,0.164,0.821,0.455,1.067 c0.266,0.22,0.609,0.33,1.029,0.33c0.465,0,0.889-0.074,1.271-0.223l0.164,0.728c-0.447,0.194-0.973,0.291-1.582,0.291 c-0.73,0-1.305-0.215-1.721-0.645c-0.418-0.43-0.625-1.007-0.625-1.731c0-0.711,0.193-1.303,0.582-1.775 c0.406-0.504,0.955-0.756,1.648-0.756c0.678,0,1.193,0.252,1.541,0.756C121.068,9.77,121.207,10.265,121.207,10.853z M120.207,10.582c0.008-0.311-0.061-0.579-0.203-0.805c-0.182-0.291-0.459-0.437-0.834-0.437c-0.342,0-0.621,0.142-0.834,0.427 c-0.174,0.227-0.277,0.498-0.311,0.815H120.207z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </FooterLink>
              <FooterLink
                href="#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" width="100px" height="40px" y="0px" viewBox="0 0 110 30" fill="#FFFFFF">
                  <path d="M37.6,5.3c0,0.1,0,0.3,0,0.5c0,0.8-0.3,1.5-0.8,2c-0.6,0.6-1.3,0.9-2.3,0.9c-0.9,0-1.6-0.3-2.3-0.9 c-0.6-0.6-0.9-1.4-0.9-2.3c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9c0.4,0,0.9,0.1,1.3,0.3c0.4,0.2,0.7,0.4,1,0.7l0,0.1 L36.2,4l-0.1-0.1c-0.4-0.5-0.9-0.7-1.6-0.7c-0.6,0-1.1,0.2-1.6,0.6c-0.4,0.4-0.7,1-0.7,1.7c0,0.7,0.2,1.2,0.7,1.7 c0.5,0.4,1,0.6,1.6,0.6c0.6,0,1.2-0.2,1.6-0.6c0.3-0.3,0.4-0.6,0.5-1.1h-2.2V5.2L37.6,5.3L37.6,5.3z M38.6,8.6h3.7V7.7h-2.7V6H42 V5.1h-2.5V3.4h2.7V2.5h-3.7V8.6z M42.9,3.4h1.7v5.2h0.9V3.4h1.7V2.5h-4.3V3.4z M50,8.6h0.9V2.5H50V8.6z M51.8,3.4h1.7v5.2h0.9V3.4 H56V2.5h-4.3V3.4z M63.8,3.3c0.6,0.6,0.9,1.4,0.9,2.3c0,0.9-0.3,1.7-0.9,2.3c-0.6,0.6-1.4,0.9-2.3,0.9c-0.9,0-1.7-0.3-2.3-0.9 c-0.6-0.6-0.9-1.4-0.9-2.3c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9C62.5,2.3,63.2,2.7,63.8,3.3z M63.2,3.9 c-0.4-0.4-1-0.6-1.6-0.6c-0.6,0-1.1,0.2-1.6,0.6c-0.4,0.4-0.6,1-0.6,1.7s0.2,1.2,0.6,1.7c0.4,0.4,1,0.6,1.6,0.6 c0.6,0,1.1-0.2,1.6-0.6c0.4-0.4,0.6-1,0.6-1.7S63.6,4.3,63.2,3.9z M69.5,2.5V6l0,0.9l-2.8-4.5h-1.1v6.1h0.9V4.8l0-0.9l2.9,4.7l0,0 h0.9V2.5H69.5z M60.3,20.7c0,2.2-1.8,3.9-4,3.9c-2.2,0-4-1.7-4-3.9c0-2.3,1.8-3.9,4-3.9C58.5,16.8,60.3,18.5,60.3,20.7z M58.6,20.7 c0-1.4-1-2.4-2.2-2.4c-1.2,0-2.2,1-2.2,2.4c0,1.4,1,2.4,2.2,2.4C57.5,23.1,58.6,22.1,58.6,20.7z M51.6,20.7c0,2.2-1.8,3.9-4,3.9 c-2.2,0-4-1.7-4-3.9c0-2.3,1.8-3.9,4-3.9C49.9,16.8,51.6,18.5,51.6,20.7z M49.9,20.7c0-1.4-1-2.4-2.2-2.4c-1.2,0-2.2,1-2.2,2.4 c0,1.4,1,2.4,2.2,2.4C48.9,23.1,49.9,22.1,49.9,20.7z M43,18c0.1,0.3,0.1,0.7,0.1,1c0,1.2-0.3,2.8-1.5,3.9c-1.1,1.1-2.5,1.7-4.3,1.7 c-3.4,0-6.2-2.7-6.2-6.1s2.8-6.1,6.2-6.1c1.9,0,3.2,0.7,4.2,1.7l-1.2,1.2c-0.7-0.7-1.7-1.2-3-1.2c-2.5,0-4.4,2-4.4,4.4 s1.9,4.4,4.4,4.4c1.6,0,2.5-0.6,3.1-1.2c0.5-0.5,0.8-1.2,0.9-2.1h-4V18C37.4,18,43,18,43,18z M79.7,19.8l-5.3,2.2 c0.4,0.8,1,1.2,1.9,1.2c0.9,0,1.5-0.4,1.9-1.1l1.3,0.9c-0.4,0.6-1.5,1.7-3.3,1.7c-2.2,0-3.9-1.7-3.9-3.9c0-2.3,1.7-3.9,3.7-3.9 c2.1,0,3.1,1.6,3.4,2.5C79.5,19.3,79.7,19.8,79.7,19.8z M77.6,19.2c-0.2-0.5-0.8-0.8-1.5-0.8c-0.9,0-2.1,0.8-2.1,2.3 C74.1,20.6,77.6,19.2,77.6,19.2z M69.8,12.9h1.7v11.5h-1.7V12.9z M67,17.1h1.6v7c0,2.9-1.7,4.1-3.8,4.1c-1.9,0-3.1-1.3-3.5-2.3 l1.5-0.6c0.3,0.6,0.9,1.4,2,1.4c1.3,0,2.1-0.8,2.1-2.3v-0.6h-0.1c-0.4,0.5-1.1,0.9-2.1,0.9c-2,0-3.8-1.7-3.8-3.9 c0-2.2,1.8-3.9,3.8-3.9c0.9,0,1.7,0.4,2.1,0.9H67V17.1z M67.1,20.8c0-1.4-0.9-2.4-2.1-2.4c-1.2,0-2.2,1-2.2,2.4c0,1.4,1,2.4,2.2,2.4 C66.2,23.1,67.1,22.1,67.1,20.8z M91.5,16.5c0,2.2-1.9,3.6-3.8,3.6h-2.4v4.4h-1.7V12.9h4.2C89.6,12.9,91.5,14.3,91.5,16.5z M89.7,16.5c0-0.9-0.7-2-2-2h-2.5v3.9h2.5C89,18.5,89.7,17.4,89.7,16.5z M101.9,20v4.4h-1.7v-0.9h-0.1c-0.4,0.6-1,1.1-2.2,1.1 c-1.5,0-2.9-1-2.9-2.5c0-1.7,1.7-2.6,3.3-2.6c0.8,0,1.5,0.3,1.8,0.4v-0.1c0-0.9-0.9-1.5-1.8-1.5c-0.6,0-1.3,0.2-1.6,0.8l-1.5-0.6 c0.5-1.2,1.8-1.8,3.1-1.8C100.4,16.8,101.9,17.9,101.9,20z M100.3,21.3c-0.5-0.2-0.8-0.4-1.6-0.4c-0.9,0-1.8,0.3-1.8,1.2 c0,0.7,0.8,1,1.4,1C99.2,23.1,100.1,22.3,100.3,21.3z M110,17.1l-4.8,10.8h-1.8l1.8-3.9l-3.1-7h1.9l2.1,5h0.1l2-5 C108,17.1,110,17.1,110,17.1z M92.4,12.9h1.7v11.5h-1.7V12.9z M0.2,3.4C0.1,3.7,0,4,0,4.5v21.9c0,0.5,0.1,0.8,0.3,1.1L12,15.4 L0.2,3.4z M12.7,14.7l3.7-3.8L2.5,3C2,2.7,1.5,2.6,1,2.8L12.7,14.7z M22.1,14l-4.7-2.7l-3.9,4l4,4.1l4.6-2.6 C23.5,16.1,23.5,14.8,22.1,14z M12.7,16.1l-11.7,12c0.4,0.1,0.9,0,1.5-0.3l14-7.9L12.7,16.1z"></path>
                </svg>
              </FooterLink>
            </div>
          </LowerFooterItem>
          <LowerFooterItem>
            <FooterLinksBlockTitle>
              Supported payments
            </FooterLinksBlockTitle>
            <div
              style={{
                display: 'flex',
                gridGap: '5px',
              }}
            >
              <div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="4em" height="2em" viewBox="23 12 5 24" fill="#FFFFFF"><path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143 c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01 c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228 c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77 c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092 l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77 C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304 C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161 c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066 h-3.888L19.153,16.8z"></path></svg></div>
              <div className="payment-system">
                <svg width="4.5em" height="3em" viewBox="0 0 256 199" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <g>
                    <path d="M46.5392504,198.011312 L46.5392504,184.839826 C46.5392504,179.790757 43.4659038,176.497885 38.1973096,176.497885 C35.5630125,176.497885 32.7091906,177.375984 30.7334678,180.229806 C29.1967945,177.815034 27.0015469,176.497885 23.7086756,176.497885 C21.513428,176.497885 19.3181804,177.15646 17.5619824,179.571233 L17.5619824,176.936935 L12.9519625,176.936935 L12.9519625,198.011312 L17.5619824,198.011312 L17.5619824,186.3765 C17.5619824,182.644579 19.5377052,180.888381 22.6110518,180.888381 C25.6843984,180.888381 27.2210717,182.864103 27.2210717,186.3765 L27.2210717,198.011312 L31.8310916,198.011312 L31.8310916,186.3765 C31.8310916,182.644579 34.0263392,180.888381 36.880161,180.888381 C39.9535076,180.888381 41.490181,182.864103 41.490181,186.3765 L41.490181,198.011312 L46.5392504,198.011312 L46.5392504,198.011312 Z M114.81145,176.936935 L107.347608,176.936935 L107.347608,170.570717 L102.737589,170.570717 L102.737589,176.936935 L98.566618,176.936935 L98.566618,181.107905 L102.737589,181.107905 L102.737589,190.766995 C102.737589,195.59654 104.713311,198.450362 109.981906,198.450362 C111.957628,198.450362 114.152876,197.791787 115.689549,196.913688 L114.372401,192.962243 C113.055252,193.840341 111.518579,194.059866 110.420955,194.059866 C108.225708,194.059866 107.347608,192.742718 107.347608,190.54747 L107.347608,181.107905 L114.81145,181.107905 L114.81145,176.936935 L114.81145,176.936935 Z M153.886857,176.497885 C151.25256,176.497885 149.496362,177.815034 148.398738,179.571233 L148.398738,176.936935 L143.788718,176.936935 L143.788718,198.011312 L148.398738,198.011312 L148.398738,186.156975 C148.398738,182.644579 149.935411,180.668856 152.789233,180.668856 C153.667332,180.668856 154.764956,180.888381 155.643055,181.107905 L156.960204,176.71741 C156.082105,176.497885 154.764956,176.497885 153.886857,176.497885 L153.886857,176.497885 L153.886857,176.497885 Z M94.834697,178.693133 C92.6394495,177.15646 89.566103,176.497885 86.2732315,176.497885 C81.0046375,176.497885 77.492241,179.132183 77.492241,183.303153 C77.492241,186.81555 80.1265385,188.791272 84.736558,189.449847 L86.931806,189.669371 C89.346578,190.10842 90.6637265,190.766995 90.6637265,191.864619 C90.6637265,193.401292 88.9075285,194.498916 85.834182,194.498916 C82.7608355,194.498916 80.346063,193.401292 78.8093895,192.303668 L76.614142,195.816065 C79.0289145,197.572262 82.321786,198.450362 85.614657,198.450362 C91.7613505,198.450362 95.2737465,195.59654 95.2737465,191.645094 C95.2737465,187.913173 92.4199245,185.937451 88.0294295,185.278876 L85.834182,185.059351 C83.858459,184.839826 82.321786,184.400777 82.321786,183.083629 C82.321786,181.546955 83.858459,180.668856 86.2732315,180.668856 C88.9075285,180.668856 91.5418255,181.76648 92.858974,182.425054 L94.834697,178.693133 L94.834697,178.693133 Z M217.329512,176.497885 C214.695215,176.497885 212.939017,177.815034 211.841393,179.571233 L211.841393,176.936935 L207.231373,176.936935 L207.231373,198.011312 L211.841393,198.011312 L211.841393,186.156975 C211.841393,182.644579 213.378066,180.668856 216.231888,180.668856 C217.109987,180.668856 218.207611,180.888381 219.08571,181.107905 L220.402859,176.71741 C219.52476,176.497885 218.207611,176.497885 217.329512,176.497885 L217.329512,176.497885 L217.329512,176.497885 Z M158.496877,187.474123 C158.496877,193.840341 162.887372,198.450362 169.69264,198.450362 C172.765986,198.450362 174.961234,197.791787 177.156481,196.035589 L174.961234,192.303668 C173.205036,193.620817 171.448838,194.279391 169.473115,194.279391 C165.741194,194.279391 163.106897,191.645094 163.106897,187.474123 C163.106897,183.522678 165.741194,180.888381 169.473115,180.668856 C171.448838,180.668856 173.205036,181.32743 174.961234,182.644579 L177.156481,178.912658 C174.961234,177.15646 172.765986,176.497885 169.69264,176.497885 C162.887372,176.497885 158.496877,181.107905 158.496877,187.474123 L158.496877,187.474123 L158.496877,187.474123 Z M201.08468,187.474123 L201.08468,176.936935 L196.47466,176.936935 L196.47466,179.571233 C194.937987,177.595509 192.742739,176.497885 189.888917,176.497885 C183.961749,176.497885 179.351729,181.107905 179.351729,187.474123 C179.351729,193.840341 183.961749,198.450362 189.888917,198.450362 C192.962264,198.450362 195.157512,197.352737 196.47466,195.377015 L196.47466,198.011312 L201.08468,198.011312 L201.08468,187.474123 Z M184.181274,187.474123 C184.181274,183.742202 186.596046,180.668856 190.547492,180.668856 C194.279413,180.668856 196.91371,183.522678 196.91371,187.474123 C196.91371,191.206044 194.279413,194.279391 190.547492,194.279391 C186.596046,194.059866 184.181274,191.206044 184.181274,187.474123 L184.181274,187.474123 Z M129.080559,176.497885 C122.933866,176.497885 118.543371,180.888381 118.543371,187.474123 C118.543371,194.059866 122.933866,198.450362 129.300084,198.450362 C132.373431,198.450362 135.446777,197.572262 137.861549,195.59654 L135.666302,192.303668 C133.910104,193.620817 131.714856,194.498916 129.519609,194.498916 C126.665787,194.498916 123.811965,193.181768 123.153391,189.449847 L138.739648,189.449847 L138.739648,187.693648 C138.959173,180.888381 135.007727,176.497885 129.080559,176.497885 L129.080559,176.497885 L129.080559,176.497885 Z M129.080559,180.449331 C131.934381,180.449331 133.910104,182.20553 134.349153,185.498401 L123.372916,185.498401 C123.811965,182.644579 125.787688,180.449331 129.080559,180.449331 L129.080559,180.449331 Z M243.452958,187.474123 L243.452958,168.594995 L238.842938,168.594995 L238.842938,179.571233 C237.306265,177.595509 235.111017,176.497885 232.257196,176.497885 C226.330027,176.497885 221.720007,181.107905 221.720007,187.474123 C221.720007,193.840341 226.330027,198.450362 232.257196,198.450362 C235.330542,198.450362 237.52579,197.352737 238.842938,195.377015 L238.842938,198.011312 L243.452958,198.011312 L243.452958,187.474123 Z M226.549552,187.474123 C226.549552,183.742202 228.964324,180.668856 232.91577,180.668856 C236.647691,180.668856 239.281988,183.522678 239.281988,187.474123 C239.281988,191.206044 236.647691,194.279391 232.91577,194.279391 C228.964324,194.059866 226.549552,191.206044 226.549552,187.474123 L226.549552,187.474123 Z M72.443172,187.474123 L72.443172,176.936935 L67.833152,176.936935 L67.833152,179.571233 C66.2964785,177.595509 64.101231,176.497885 61.247409,176.497885 C55.3202405,176.497885 50.7102205,181.107905 50.7102205,187.474123 C50.7102205,193.840341 55.3202405,198.450362 61.247409,198.450362 C64.3207555,198.450362 66.5160035,197.352737 67.833152,195.377015 L67.833152,198.011312 L72.443172,198.011312 L72.443172,187.474123 Z M55.3202405,187.474123 C55.3202405,183.742202 57.735013,180.668856 61.6864585,180.668856 C65.4183795,180.668856 68.0526765,183.522678 68.0526765,187.474123 C68.0526765,191.206044 65.4183795,194.279391 61.6864585,194.279391 C57.735013,194.059866 55.3202405,191.206044 55.3202405,187.474123 Z" fill="#fff"></path>
                    <rect fill="#FF5F00" x="93.2980455" y="16.9034088" width="69.1502985" height="124.251009"></rect>
                    <path d="M97.688519,79.0288935 C97.688519,53.783546 109.542856,31.3920209 127.763411,16.9033869 C114.3724,6.3661985 97.468994,-1.94737475e-05 79.0289145,-1.94737475e-05 C35.3434877,-1.94737475e-05 1.7258174e-06,35.3434665 1.7258174e-06,79.0288935 C1.7258174e-06,122.71432 35.3434877,158.057806 79.0289145,158.057806 C97.468994,158.057806 114.3724,151.691588 127.763411,141.1544 C109.542856,126.88529 97.688519,104.274241 97.688519,79.0288935 Z" fill="#EB001B"></path>
                    <path d="M255.746345,79.0288935 C255.746345,122.71432 220.402859,158.057806 176.717432,158.057806 C158.277352,158.057806 141.373945,151.691588 127.982936,141.1544 C146.423015,126.665766 158.057827,104.274241 158.057827,79.0288935 C158.057827,53.783546 146.20349,31.3920209 127.982936,16.9033869 C141.373945,6.3661985 158.277352,-1.94737475e-05 176.717432,-1.94737475e-05 C220.402859,-1.94737475e-05 255.746345,35.5629913 255.746345,79.0288935 Z" fill="#F79E1B"></path>
                  </g>
                </svg>
              </div>
            </div>
          </LowerFooterItem>
          <LowerFooterItem>
            <FooterLinksBlockTitle>
              Social
            </FooterLinksBlockTitle>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <FooterLink
                href="#"
              >
                <FacebookIcon
                  fontSize="large"
                />
              </FooterLink>
              <FooterLink
                href="#"
              >
                <YouTubeIcon
                  fontSize="large"
                />
              </FooterLink>
              <FooterLink
                href="#"
              >
                <InstagramIcon
                  fontSize="large"
                />
              </FooterLink>
              <FooterLink
                href="#"
              >
                <TelegramIcon
                  fontSize="large"
                />
              </FooterLink>
            </div>
          </LowerFooterItem>
        </Grid>
      </StyledResponsiveContainer>
    </FooterContainer>
  );
});

export default Footer;
