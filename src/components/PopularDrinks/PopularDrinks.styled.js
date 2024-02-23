import { styled } from 'styled-components';

export const PopularDrinksWrapper = styled.div`
height: 516px;
width: 313px;
border: 2px solid red;
margin-top: 80px;

`;

export const PopularDrinksTitle = styled.h3`
  width: 160px;
  height: 32px;
  font-family: Manrope;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 40px;
`;

export const PopularDrinksList = styled.ul`
display: flex;
gap: 28px;
flex-direction: column;
`;

export const PopularDrinksListItem = styled.li`
width:313px;
height:90px;
gap:18px;
border: 1px solid yellow;
display: flex;
flex-direction: row;
`;
export const PopularDrinksListImg = styled.img`
width: 90px;
height: 90px;
border-radius: 10px;
border: 1px solid green;
`;
export const PopularDrinksListDescriptionContainer = styled.div`
display: flex;  
flex-direction: column;
gap: 8px;
`;
export const PopularDrinksListDescriptionTitle = styled.h4`
  margin: 0;
  /* width: 79px; */
  height: 22px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;
export const PopularDrinksListDescription = styled.p`
width: 209px;
  height: 63px;
font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(243, 243, 243, 0.5);
  margin: 0;
`;