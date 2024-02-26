import {
  ErrorPageImage,
  ErrorPageText,
  CenterPageContainer,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <CenterPageContainer>
      <ErrorPageText>4</ErrorPageText>
      <ErrorPageImage />
      <ErrorPageText>4</ErrorPageText>
    </CenterPageContainer>
  );
};

export default NotFound;
