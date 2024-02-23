import {styled} from 'styled-components'

export const DrinkDescriptionFieldsWrapper = styled.div`
display: flex;
margin-bottom: 80px;
/* margin-right: 90px; */
gap: 40px;
`;

export const StyledDropzone = styled.div`
   width: 400px;
   height: 400px;
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 20px;
   border-width: 2px;
   border-radius: 10px;
   border-color: #000000;
   background: #161F37;
   outline: black;
`;
export const DropzoneText = styled.p`
color: #F3F3F3;
margin-top: 18px;
`;
export const AddDescriptionFormWrapper = styled.div`
width: 393px;
height: 320px;
border: 2px;
color: white;
display: flex;
flex-direction: column;
`;
export const AddDescriptionForm = styled.form`
gap: 20px;
display: flex;
flex-direction: column;
`;
