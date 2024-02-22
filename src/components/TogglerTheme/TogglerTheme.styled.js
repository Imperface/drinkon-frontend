import styled from 'styled-components';

export const StyledTogglerTheme = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    position: relative;
    width: 40px;
    height: 22px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;
    margin-right: 28px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.whiteColor};

    .toggler-btn {
      border-radius: 50%;
      position: absolute;
      width: 18px;
      height: 18px;
      transform: translateY(-50%);
      top: 50%;
      left: 1.5px;
      transition: transform 300ms ease;
      border: none;
      background-color: ${({ theme }) => theme.darkBlueColor};
      ${({ isToggled }) => isToggled && `transform: translate(100%, -50%)`}
    }
  }
`;
