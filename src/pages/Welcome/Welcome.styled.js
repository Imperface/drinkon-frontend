import styled from 'styled-components';
import start1xDesktop from '../../images/welcomePage/start-desc@1x.jpg';
import start2xDesktop from '../../images/welcomePage/start-desc@2x.jpg';
import start1xTablet from '../../images/welcomePage/start-tabl@1x.jpg';
import start2xTablet from '../../images/welcomePage/start-tabl@2x.jpg';
import start1xMobile from '../../images/welcomePage/start-mob@1x.jpg';
import start2xMobile from '../../images/welcomePage/start-mob@2x.jpg';
import welcome1x from '../../images/welcomePage/bg-welcome-desc@1x.jpg';
import welcome2x from '../../images/welcomePage/bg-welcome-desc@2x.jpg';

import { device } from 'constants/device';

export const WelcomePageWrapper = styled.div`
  color: ${(props) => props.theme.startPageTxtColor};
  width: 100%;
  height: 100vh;
  background-image: url(${start1xMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  font-family: 'Manrope', sans-serif;

  & .welcome {
    margin: 0 auto;
  }

  & .welcome-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14;
    letter-spacing: 0.2px;
    margin-bottom: 14px;
  }
  & .welcome-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: 0.2px;
    margin-bottom: 40px;
  }
  & .welcome-link-block {
    display: flex;
    justify-content: center;
    column-gap: 14px;
  }
  & .welcome-link {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: 0.2px;
    padding: 14px 40px;
    border-radius: 30px;
    transition: all 0.3s;
  }
  & .link-signup {
    border: 1px solid transparent;
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.darkBlueColor};
    &:hover {
      border: 1px solid transparent;
      background-color: transparent;
      color: ${(props) => props.theme.whiteColor};
      border: 1px solid ${(props) => props.theme.whiteTwentyColor};
    }
  }

  & .link-signin {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.whiteTwentyColor};
    color: ${(props) => props.theme.whiteColor};
    &:hover {
      border: 1px solid transparent;
      background-color: ${(props) => props.theme.whiteColor};
      color: ${(props) => props.theme.darkBlueColor};
    }
  }
  @media ${device.tablet} {
    background-image: url(${start1xTablet});
    text-align: left;

    & .welcome {
      margin: 0;
      margin-right: auto;
    }
    & .welcome-info {
      max-width: 470px;
    }
    & .welcome-title {
      font-size: 40px;
      line-height: 1.1;
    }
    & .welcome-text {
      font-size: 18px;
      line-height: 1.3;
      letter-spacing: -0.02em;
    }
    & .welcome-link-block {
      justify-content: left;
    }
    & .welcome-link {
      font-size: 16px;
      padding: 18px 44px;
    }
  }
  @media ${device.desktop} {
    margin: 0;
    background: url(${welcome1x}), url(${start1xDesktop});
    background-repeat: no-repeat;
    background-size: contain, cover;
    background-position: right, center;

    & .welcome-info {
      max-width: 485px;
    }
  }
`;
