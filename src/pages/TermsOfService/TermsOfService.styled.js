import { styled } from 'styled-components';

export const TermsOfServiceWrapper = styled.div`
  width: 100%;
  & h1 {
    margin-bottom: 30px;
  }
  & .termsOfService-section {
    margin: 0 auto;
    padding: 30px 0;
  }
  & p + p {
    margin-top: 30px;
  }
`;
