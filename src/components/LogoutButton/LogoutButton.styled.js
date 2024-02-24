import styled from 'styled-components';
import { device } from 'constants/device';
export const ButtonWrapper = styled.button`
  border-radius: 42px;
  display: flex;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.whiteColor};
  transition: all 0.3s;

  &.log-out-btn1 {
    padding: 12px 44px;
    width: 141px;
    height: 42px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;

    color: ${(props) => props.theme.darkBlueColor};
  }

  &.log-out-btn2 {
    padding: 16px 40px;
    width: 140px;
    height: 50px;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.125;

    color: ${(props) => props.theme.darkBlueColor};
  }

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.whiteColor};
  }

  @media ${device.tablet} {
    &.log-out-btn1 {
      padding: 12px 44px;
    }

    &.log-out-btn2 {
      padding: 18px 68px;
      width: 196px;
      height: 54px;
    }
  }

  @media ${device.desktop} {
    &.log-out-btn1 {
      padding: 12px 44px;
    }

    &.log-out-btn2 {
      padding: 18px 68px;
      width: 196px;
      height: 54px;
    }
  }
`;
