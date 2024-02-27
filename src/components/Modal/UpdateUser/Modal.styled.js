import styled from 'styled-components';
import { device } from 'constants/device';
export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 2200;

  & .wrapper-modal {
    border-radius: 16px;
    width: 335px;
    height: 345px;
    background-color: ${(props) => props.theme.darkBlueColor};
    padding: 50px 25px;
    position: relative;
    z-index: 2200;
  }

  & .button-close {
    position: absolute;
    top: 14px;
    right: 14px;
    background-color: transparent;
    padding: 0;
    border: none;
  }

  & .icon-close {
    color: ${(props) => props.theme.white};
    width: 24px;
    height: 24px;
  }

  & .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  & .wrapper-photo {
    margin-bottom: 25px;
  }

  & .label-text {
    position: relative;
  }

  & .img-user {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  & .wrapper-img-inp {
    margin-bottom: 25px;
  }
  & .pen-input {
    position: absolute;
    top: 19px;
    right: 24px;
  }
  & .name-user {
    margin-bottom: 18px;
    width: 285px;
    height: 54px;

    padding: 18px 40px 18px 24px;
    border-radius: 42px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.white};
    background-color: transparent;
  }

  & .btn-submit {
    border-radius: 42px;
    padding: 18px 90px;
    width: 285px;
    height: 54px;
    border:none;
    font-weight: 600;
    font-size: 14px; transition: all 0.3s;
    line-height: 1.28571;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.darkBlueColor}; 

  }

  & .custom-upload-label {
    display: inline-block;
    height: 94px;
    position: relative;
    cursor: pointer;
  }
  & .plus {
    background-color: #546081;
    border-radius: 50%;
  }

  & .supun-plus {
    position: absolute;
    top: 66px;
    left: 26px;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #546081;
    border-radius: 50%;
  }

  @media ${device.tablet} {
    & .wrapper-modal {
      width: 500px;
      height: 426px;
      padding: 50px 50px 75px 50px;
    }

    & .button-close {
      top: 18px;
      right: 18px;
    }

    & .icon-close {
      width: 32px;
      height: 32px;
    }

    & .img-user {
      object-fit: cover;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    & .wrapper-img-inp {
      height: 116px;
      margin-bottom: 50px;
    }

    & .supun-plus {
      top: 84px;
      left: 34px;
      width: 32px;
      height: 32px;
    }

    & .pen-input {
      top: 18px;
      width: 20px;
      height: 20px;
    }

    & .name-user {
      width: 400px;
      height: 56px;
      font-weight: 400;
      font-size: 17px;
      line-height: 1.56;
      padding: 14px 40px 15px 24px;
    }

    & .label-text {
      margin-bottom: 25px;
    }

    & .btn-submit {
      width: 400px;
      height: 56px;
      font-weight: 400;
      font-size: 17px;
      line-height: 1.56;
      padding: 18px 146px;
      font-size: 16px;
 
      line-height: 1.125;
       &:hover {
       
    background-color: transparent;
       border: 1px solid ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.whiteColor};
    }
  }

  @media ${device.desktop} {   
`;
