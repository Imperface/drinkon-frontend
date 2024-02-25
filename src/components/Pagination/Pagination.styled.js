import styled from 'styled-components';

export const Navigation =styled.nav`
 padding: 14px 0;
`;

export const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 27px;
`;

export const PaginationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
 

  .chevron {
    color: ${(props) => props.theme.whiteThirtyColor};
    width: 2em;
    height: 2em;
  }
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  .ioEllipse {
    fill: none;
    width: 27px;
    height: 27px;
    :hover,
    :focus {
      fill: ${(props) => props.theme.blueFiftyColor};
    }
  }
  .active {
    fill: ${(props) => props.theme.blueFiftyColor};
  }
`;

export const PaginationButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.whiteColor};

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: ${(props) => props.theme.whiteColor};
    pointer-events: none;
  }
`;
