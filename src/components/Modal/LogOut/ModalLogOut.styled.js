import styled from 'styled-components';
import { device } from 'constants/device';

export const OverlayLogOut = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;

  & .modalLogOut {
    padding: 50px 25px;
    min-width: 280px;
    width: 335px;
    // height: 193px;
    z-index: 1200;
    max-height: 304px;
    background-color: ${(props) => props.theme.darkBlueColor};
    border-radius: 16px;
    position: relative;
  }

  & .text-modal {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28571;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 25px;
  }

  & .button-close {
    position: absolute;
    top: 14px;
    right: 14px;
    background-color: transparent;
    padding: 0;
    border: none;
  }
  & .close {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.white};
  }

  & .list-button {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  & .button-cancel {
    border: 1px solid transparent;
    border-radius: 42px;
    padding: 16px 41px;
    width: 136px;
    height: 50px;
    background-color: ${(props) => props.theme.greyColor};
    color: ${(props) => props.theme.white};
    transition: all 0.3s;

    font-weight: 600;
    font-size: 16px;
    line-height: 1.125;
    &:hover {
      background-color: ${(props) => props.theme.white};
      color: ${(props) => props.theme.darkBlueColor};
    }
  }
  @media ${device.tablet} {
    & .modalLogOut {
      padding: 50px;

      width: 500px;
      height: 215px;
      max-height: 400px;
      background-color: ${(props) => props.theme.darkBlueColor};
      border-radius: 16px;
      position: relative;
    }

    & .text-modal {
      font-size: 18px;
      line-height: 1.33333;
      margin-bottom: 37px;
    }

    & .close {
      width: 32px;
      height: 32px;
    }

    & .list-button {
      gap: 12px;
    }
    & .button-cancel {
      border-radius: 42px;
      padding: 18px 69px;
      width: 192px;
      height: 54px;
    }
  }

  @media ${device.desktop} {
    & .text-modal {
      font-size: 18px;
      line-height: 1.33333;
    }
    & .close {
      width: 32px;
      height: 32px;
    }
    & .list-button {
      gap: 12px;
    }
    & .button-cancel {
      border-radius: 42px;
      padding: 18px 69px;
      width: 192px;
      height: 54px;
    }
  }
`;
