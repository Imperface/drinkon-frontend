import React, { useState } from 'react';
import Select from 'react-select';


export const DrinkDescriptionFields = () => {
    const category = [
        'Ordinary Drink',
        'Cocktail',
        'Shake',
        'Other/Unknown',
        'Cocoa',
        'Shot',
        'Coffee/Tea',
        'Homemade Liqueur',
        'Punch/Party Drink',
        'Beer',
        'Soft Drink',
      ];
  
      
     const handleChange = function(asd){
        return <option>{asd}</option>
      };

    return (
        <div>
    
       
               <form>

               <input type="file" accept="image/*"/>
                <input type="text" placeholder="Enter item title"/>
                <input type="text" placeholder="Enter about recipe"/>

                <Select>category.map(handleChange())</Select>
                {/* <input type="text" placeholder="Category"/> */}
                <input type="text" placeholder="Glass"/>
               </form>
              
                
         
        </div>
    )
    }

   

      
//     import React, { useState } from 'react';
// import Select from 'react-select';
// const options = [
//    { value: 'apple', label: 'Apple' },
//    { value: 'banana', label: 'Banana' },
//    { value: 'grape', label: 'Grape' },
//    { value: 'orange', label: 'Orange' }
// ];
// const App = () => {
//    const [selectedOption, setSelectedOption] = useState('');
//    const handleChange = selected => {
//       setSelectedOption(selected);
//    };
//    return (
      
//          Select your favorite fruit:
         
//          You have selected: {selectedOption.label}
      
//    );
// };

 // class ImageUpload extends React.Component {
    //     constructor(props) {
    //       super(props);
    //       this.state = { imageUrl: null };
      
    //       this.handleImageChange = this.handleImageChange.bind(this);
    //     }
      
    //     handleImageChange(event) {
    //       const file = event.target.files[0];
    //       const imageUrl = URL.createObjectURL(file);
    //       this.setState({ imageUrl });
    //     }
      
    //     render() {
    //       return (
    //         <div>
    //           <input
    //             type="file"
    //             accept="image/*"
    //             onChange={this.handleImageChange}
    //           />
    //           {this.state.imageUrl && (
    //             <img src={this.state.imageUrl} alt="Uploaded" />
    //           )}
    //         </div>
    //       );
    //     }
    //   }