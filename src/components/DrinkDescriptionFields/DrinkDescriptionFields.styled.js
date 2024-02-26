import styled from 'styled-components';
import { device } from 'constants/device';

export const DrinkStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  margin-bottom: 40px;
  @media ${device.tablet} {
  }
  .alcoholicBlock {
    cursor: not-allowed;
  }
  & .react-select {
    margin-left: auto;
    width: 200px;
    background-color: transparent;
    color: #fff;
    &__control {
      cursor: pointer;
      background-color: transparent;
      width: 200px;
      border: none;
      color: white !important;
    }
    &--menu-is-open {
      background-color: transparent;
    }
    &__indicator-separator {
      display: none;
    }
    &__menu {
      background-color: rgba(22, 31, 55, 1);
      border-radius: 20px;
    }
    &__option {
      cursor: pointer;
      &--is-focused {
        color: white;
        background-color: transparent;
      }
    }
    &__single-value {
      color: white;
    }
  }

  .addAvatar {
    position: relative;
    display: grid;
    width: 335px;
    height: 320px;
    margin-bottom: 40px;
    background-color: ${(props) => props.theme.darkBlueFiftyColor};
  }
  .avatar {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 88px;
    & input {
      cursor: pointer;
    }
  }
  .icon {
    color: black;
    background-color: #f3f3f3;
    border-radius: 6px;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-bottom: -50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  input[type='file'] {
    position: absolute;
    top: 20%;
    left: 50%;
    margin-bottom: -50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    /* background: ${(props) => props.theme.whiteZeroColor}; */
    outline: 0;
    opacity: 0;
    user-select: none;
    cursor: pointer;
  }

  .formDescription {
    display: grid;
    gap: 20px;
    width: 335px;

    margin-bottom: 40px;
  }

  .inputStyle {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #f3f3f3;
    border: none;
    background-color: ${(props) => props.theme.whiteZeroColor};
    height: 34px;
    min-width: 200px;

    /* margin-bottom: 35px; */
  }
  .titleAvatar {
    position: absolute;
    font-size: 16px;
    font-weight: 500;
    color: #f3f3f3;
    margin-top: 70px;
  }
  .itemForm {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 50px;
    width: 104px;
    height: 38px;
    color: white;
  }

  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 335px;
    height: auto;
    padding-bottom: 10px;
    /* margin-bottom: 40px; */
    font-size: 14px;
    color: ${(props) => props.theme.whiteFiftyColor};
    font-weight: 400;
    border-width: 1px;
    border-top-style: none;
    border-bottom-style: solid;
  }
  & .radioBtnBlock {
    display: flex;
    margin-top: 20px;
  }
  .radioBtn1 {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    color: rgba(243, 243, 243, 0.5);

    & .custom-radiobutton {
      display: inline-block;
      height: 24px;
      width: 24px;
      border: 1px solid rgba(243, 243, 243, 0.5);
      cursor: pointer;
      background-color: transparent;
      margin-right: 10px;
      border-radius: 50%;
      position: relative;
    }
    & .textRadioBtn:checked + span {
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 15px;
        height: 15px;
        background-color: #fff;
      }
    }
  }

  .radioBtn {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;

    & .custom-radiobutton {
      display: inline-block;
      height: 24px;
      width: 24px;
      border: 1px solid white;
      cursor: pointer;
      background-color: transparent;
      margin-right: 10px;
      border-radius: 50%;
      position: relative;
    }
    & .textRadioBtn:checked + span {
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 15px;
        height: 15px;
        background-color: #fff;
      }
    }
  }
  .textRadioBtn {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    padding-left: 10px;
    visibility: hidden;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
