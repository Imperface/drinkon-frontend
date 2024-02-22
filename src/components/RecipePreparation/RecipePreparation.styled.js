import styled from "styled-components";
import { device } from 'constants/device';


export const RecipeStyle = styled.div`
display: grid;
.label{
display: grid;
  font-size: 28px;
  color: ${(props) => props.theme.whiteColor};
  font-weight: 600;
  
};
.recipe{
    width: 335px;
    height: 184px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 400;
background-color: ${(props) => props.theme.whiteTenColor};
/* color: ${(props) => props.theme.whiteColor}; */
};
`;