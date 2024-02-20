import styled from 'styled-components'; 
import { IoEllipse } from 'react-icons/io5';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

export const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const PaginationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
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

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: ${props => props.theme.colors.whiteColor};
    pointer-events: none;
  }
`;

export const PaginationEllipseSvg = styled(IoEllipse)`
  fill: ${({ active, theme }) =>
    active === 'true' ? theme.colors.blueFiftyColor : 'none'};
  width: 27px;
  height: 27px;
  :hover,
  :focus {
    fill: ${props => props.theme.colors.blueFiftyColor};
  }
`;

export const PaginationChevronLeft = styled(GoChevronLeft)`
  fill: ${props => props.theme.colors.whiteThirtyColor};
`;

export const PaginationChevronRight = styled(GoChevronRight)`
  fill: ${props => props.theme.colors.whiteThirtyColor};
`;
