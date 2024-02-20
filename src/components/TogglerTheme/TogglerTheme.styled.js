import styled from 'styled-components';

export const StyledTogglerTheme = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;

  .toggler-btn {
    border-radius: 50%;
    position: absolute;
    width: 18px;
    height: 18px;
    translate: 0 -50%;
    top: 50%;
    cursor: pointer;
    transition: transform 300ms ease;
    border: none;
  }
`;
