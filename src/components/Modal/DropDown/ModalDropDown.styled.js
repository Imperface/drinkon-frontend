import styled from 'styled-components';

import { device } from 'constants/device';

export const ModalWrapperDrop = styled.div`
  border-radius: 8px;
  width: 177px;
  height: 134px;
  background: #161f37;
  position: absolute;
  top: 104px;
  right: 32px;
  padding: 18px;
  display: flex;
  gap: 38px;
  flex-direction: column;
box-shadow: 0px -4px 74px -15px rgba(249,249,249,0.75);
-webkit-box-shadow: 0px -4px 74px -15px rgba(249,249,249,0.75);
-moz-box-shadow: 0px -4px 74px -15px rgba(249,249,249,0.75);x 6px 0px rgba(251, 250, 250, 0.75);

  & .wrapper-text {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: #f3f3f3;
  }

& .btn-log-out{
    border-radius: 42px;
  display: flex;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.whiteColor};
  transition: all 0.3s;
   padding: 12px 44px;
    width: 141px;
    height: 42px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;

    color: ${(props) => props.theme.darkBlueColor};
     &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.whiteColor};
  }
}

  & .button-edit {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }

  & .pen {
    color: ${(props) => props.theme.whiteColor};
    width: 14px;
    height: 14px;
  }

  @media ${device.tablet} {
      & .log-out-btn1 {
      padding: 12px 44px;
    }
  }

  @media ${device.desktop} {
  }
`;
