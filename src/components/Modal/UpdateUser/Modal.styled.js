import styled from 'styled-components';
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

  & .wrapper-modal {
    border-radius: 16px;
    width: 335px;
    height: 345px;
    background-color: ${(props) => props.theme.darkBlueColor};
    padding: 50px 25px;
    position: relative;
    z-index: 1200;
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
    height: 94px;
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
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.darkBlueColor};
  }
`;
