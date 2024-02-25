import styled from 'styled-components';
import nebulaLeftImg from '../../images/Background-left-top.png';
import nebulaRightImg from '../../images/Background-right-top.png';

export const StyledOverlayHeader = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  left: 0;
  overflow: auto;
  z-index: 999;
  transition: top 300ms ease;

  background-color: ${({ theme }) => theme.blackColor};
  background-image: url(${nebulaLeftImg}), url(${nebulaRightImg});
  background-position:
    left top,
    right top;
  background-repeat: no-repeat;

  color: #c2c2c2;

  .overlay-head-container {
    height: 84.8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.darkBlueTwentyColor};

    @media screen and (min-width: 768px) {
      padding: 20px 32px;
    }

    @media screen and (min-width: 1440px) {
      padding: 28px 100px;
      align-items: center;
    }
  }

  .overlay-head-right-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay-body-container {
  }
  .overlay-close-btn {
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    background-color: transparent;
  }

  .overlay-close-svg {
    display: block;
  }
`;
