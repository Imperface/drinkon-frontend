import { DrinkDescriptionFieldsWrapper,AddDescriptionForm,StyledDropzone,DropzoneText,AddDescriptionFormWrapper } from './DrinkDescriptionFields.styled'
import {useDropzone} from 'react-dropzone';
import { IoIosAdd } from "react-icons/io";

export const DrinkDescriptionFields = () => {
   const {
   getRootProps,
   getInputProps,
   isFocused,
   isDragAccept,
   isDragReject
   } = useDropzone({accept: {'image/*': []}});

   return (
   <DrinkDescriptionFieldsWrapper>
      <StyledDropzone {...getRootProps({isFocused, isDragAccept, isDragReject})}>
         <input {...getInputProps()} />
            <IoIosAdd style={{
                        width: '50px',
                        height: '50px',
                        color: '#161F37', 
                        fontSize: '48px', 
                        background: '#F3F3F3',
                        borderRadius: '10px', 
            }}/>
            <DropzoneText>Add image</DropzoneText>
      </StyledDropzone>
      <AddDescriptionFormWrapper>
      <AddDescriptionForm>
         <p>DescriptionForm</p>
      </AddDescriptionForm>
      </AddDescriptionFormWrapper>
   </DrinkDescriptionFieldsWrapper>
   );
};

