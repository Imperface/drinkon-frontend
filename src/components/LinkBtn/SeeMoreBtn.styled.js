import styled from 'styled-components';

export const Button = styled.button`
  min-width: 143px;
  border-radius: 42px;
  padding: 14px 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: ${(props) => props.theme.darkBlueColor};
  color: ${(props) => props.theme.whiteColor};
  transition: background-color 0.25s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.darkBlueColor};
  }

  @media screen and (min-width: 768px) {
    min-width: 160px;
    font-size: 16px;
    line-height: 18px;
    padding: 18px 44px;
  }
`;
