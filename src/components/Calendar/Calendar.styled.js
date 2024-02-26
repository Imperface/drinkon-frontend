import { createGlobalStyle, styled } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker.css';
import { device } from 'constants/device';

export const StyledDatePicker = styled(DatePicker)`
  /* THIS DIV IS STYLED AS INPUT */
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
  @media ${device.tablet} {
    width: 400px;
    height: 56px;
  }
`;
export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;
  }

  .react-datepicker { 
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex !important;
    flex-direction: column;
    align-items: center ;
    justify-content: center ;
    width: 270px;
    height: 354px;
    padding: 0;
    background: ${(props) => props.theme.darkBlueColor} !important;
    border-radius: 16px;
     color: ${(props) => props.theme.whiteColor}!important;
  }
 
  .react-datepicker__header {
    position: relative;
    background: ${(props) => props.theme.darkBlueColor} !important;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
     color: ${(props) => props.theme.whiteColor};
  }

  .react-datepicker__day-name {
    margin: 0;
    padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: ${(props) => props.theme.whiteColor} !important;
  }


  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }


  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }

  .react-datepicker__day--selected {
    background-color: white;
    color: #3e85f3;
    font-size: 14px;
  }

  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: ${(props) => props.theme.darkBlueColor};
  }

  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: white;
    color: #3e85f3;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color: #3e85f3;
  }

  
  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }

  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }

  .react-datepicker__triangle {
    visibility: hidden;
  }
`;
