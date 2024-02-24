import styled from 'styled-components';

export const ButtonFavorite = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: #161f37;

  padding: 14px 40px;
  margin-bottom: 80px;
  border-radius: 42px;
  text-align: center;
  border-color: transparent;
  background-color: #f3f3f3;

  &:focus,
  &:hover {
    background-color: #161f37;
    color: #f3f3f3;
    outline: 1px solid #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.1;

    padding: 18px 44px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 198px;
  }
`;
