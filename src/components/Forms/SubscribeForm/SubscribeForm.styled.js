import { Field, Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const SubscribeWrapper = styled(FormikForm)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 309px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`;

export const SubscribeInput = styled(Field)`
  width: 335px;
  margin-top: 24px;
  margin-bottom: 18px;
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid ${(props) => props.theme.whiteTwentyColor};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  text-align: center;
  color: ${(props) => props.theme.whiteFiftyColor};
  background-color: transparent;
  transition:
    border 500ms ease-in,
    transform 500ms ease-in,
    color 500ms ease-in;

  &:focus,
  &:hover {
    border: 1px solid ${(props) => props.theme.whiteFiftyColor};
    color: ${(props) => props.theme.whiteColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    padding: 14px 23px;
    line-height: 1.56;
    width: 309px;
  }
`;

export const SubscribeText = styled.p`
  color: var(--white-color);
  font-weight: 400;
  line-height: 1.42857;
  width: 335px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
    width: 309px;
  }
`;

export const SubscribeButton = styled.button`
  width: 335px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  margin: 0 auto;
  padding: 18px;
  border: 1px solid ${(props) => props.theme.whiteTwentyColor};
  border-radius: 200px;
  color: ${(props) => props.theme.whiteColor};
  background-color: transparent;
  transition: all 0.3s;

  &:disabled {
    color: ${(props) => props.theme.whiteTwentyColor};
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus,
  &:hover {
    border: 1px solid ${(props) => props.theme.whiteFiftyColor};
    color: ${(props) => props.theme.whiteColor};
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: 309px;
  }
`;
