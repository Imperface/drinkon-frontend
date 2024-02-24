import styled from "styled-components";
import { device } from 'constants/device';


export const RecipeStyle = styled.div`
display: grid;
margin-bottom: 17px;
.label{
display: grid;
  font-size: 28px;
  color: ${(props) => props.theme.whiteColor};
  font-weight: 600;
  margin-bottom: 43px;
  
};
.recipe{
    width: 335px;
    height: 184px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 400;
background-color:  ${(props) => props.theme.whiteZeroColor};
color: ${(props) => props.theme.whiteColor};
};
`;