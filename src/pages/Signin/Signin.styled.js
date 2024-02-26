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

export const SigninPageWrapper = styled.div`
  color: ${(props) => props.theme.startPageTxtColor};
  width: 100%;
  min-height: 100vh;
  padding: 20px 0;
  background-image: url(${start1xMobile});

  @supports (-webkit-image-set: url()) {
    background-image: -webkit-image-set(
      url(${start1xMobile}) 1x,
      url(${start2xMobile}) 2x
    );
  }

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  font-family: 'Manrope', sans-serif;

  & .section {
    margin: 0 auto;
  }

  & .signin {
    width: 335px;
  }

  & .signinTitle {
    display: flex;
    justify-content: flex-start;
    font-weight: 600;
    font-size: 28px;
    padding-bottom: 28px;
    margin-block-end: 0;
  }

  & .signinForm {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  & .inputSignin {
    border-radius: 42px;
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    border: 1px solid ${(props) => props.theme.whiteFiftyColor};
    color: ${(props) => props.theme.whiteFiftyColor};
    background-color: transparent;
    transition: all 0.3s;

    &:hover {
      border: 1px solid ${(props) => props.theme.whiteColor};
      color: ${(props) => props.theme.whiteColor};
    }

    &::placeholder {
      border: 1px solid transparent;

      color: ${(props) => props.theme.whiteTwentyColor};
      font-weight: 400;
      font-size: 14px;
    }

    &:focus::placeholder {
      color: ${(props) => props.theme.whiteColor};
    }
  }

  & .buttonSignin {
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.darkBlueColor};
    border-radius: 42px;
    font-weight: 600;
    font-size: 14px;
    width: 335px;
    display: block;
    padding: 15px 0;
    border: 1px solid ${(props) => props.theme.whiteColor};
    margin-top: 14px;
    transition: all 0.3s;

    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.whiteColor};
    }
  }
  & .link {
    color: ${(props) => props.theme.whiteColor};
    font-weight: 600;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media ${device.tablet} {
    background-image: url(${start1xTablet});
    text-align: left;

    & .section {
      margin: 0;
    }

    & .signin {
      width: 400px;
    }

    & .signinTitle {
      font-size: 40px;
    }

    & .inputSignin {
      width: 400px;
      height: 56px;
      padding: 14px 24px 15px 24px;

      &::placeholder {
        font-size: 17px;
      }
    }

    & .buttonSignin {
      font-size: 16px;
      width: 400px;
      height: 54px;
      margin-top: 26px;
    }
    & .link {
      display: flex;
      font-size: 14px;
      justify-content: center;
      align-items: center;
      padding: 14px;
    }
  }

  @supports (-webkit-image-set: url()) {
    background-image: -webkit-image-set(
      url(${start1xTablet}) 1x,
      url(${start2xTablet}) 2x
    );
  }

  @media ${device.desktop} {
    background: url(${welcome1x}), url(${start1xDesktop});
    background-repeat: no-repeat;
    background-size: contain, cover;
    background-position: right, center;

    & .signin {
      padding-left: 0;
    }
  }

  @supports (-webkit-image-set: url()) {
    background-image: -webkit-image-set(
      url(${start1xDesktop}) 1x,
      url(${start2xDesktop}) 2x
    );
  }
`;
