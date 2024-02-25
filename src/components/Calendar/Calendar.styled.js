import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker.css';
import { device } from 'constants/device';

export const StyledDatePicker = styled(DatePicker)`
  /* ЦЕЙ КУСОК НЕ ЧІПАТИ, БО ЦЕ DIV СТИЛІЗОВАНИЙ, ЯК ІНПУТ */
  border-radius: 42px;
  width: 335px;
  height: 54px;
  padding: 14px 24px 15px 24px;
  border: 1px solid ${(props) => props.theme.whiteFiftyColor};
  color: ${(props) => props.theme.whiteFiftyColor};
  background-color: transparent;
  transition: all 0.3s;
  &:hover {
    border: 1px solid ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.whiteColor};
  }
  &::placeholder {
    border: 1px solid transparent;
    color: ${(props) => props.theme.whiteTwentyColor};
    font-weight: 400;
    font-size: 17px;
  }
  &:focus::placeholder {
    color: ${(props) => props.theme.whiteColor};
  }
  /* ЦЕЙ КУСОК НЕ ЧІПАТИ */
  @media ${device.tablet} {
    width: 400px;
    height: 56px;
  }
`;
