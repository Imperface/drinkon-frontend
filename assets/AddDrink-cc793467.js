import{s as n,j as e,u as s,f as l}from"./index-ecbef84a.js";import{P as o}from"./PageTitle-15348ffa.js";const d=n.div``,c=n.div`
 display: block;
  width: 335px;

  .addAvatar {
  display: grid;
  };

  input[type=file]{
  width: 50px;
  height: 50px;
  background: ${t=>t.theme.whiteTwentyColor};
  outline:0;
  opacity:0;
  user-select:none;
};

.formDescription{
  display: grid;
  gap: 20px;
  width: 335px;
  height: 229px;
}

  .inputStyle{
    font-weight: 400;
font-size: 14px;
line-height: 100%;
color: #f3f3f3;
  border: none;
background-color: ${t=>t.theme.whiteTenColor};
height: 34px;
/* margin-bottom: 35px; */
};
.titleAvatar {
font-size: 16px;
  font-weight: 500;
  color: #F3F3F3;
  
};

.label{
  width: 335px;
  height: auto;
  padding-bottom: 10px;
  /* margin-bottom: 35px; */
  display: block;
  font-size: 14px;
  color: ${t=>t.theme.whiteFiftyColor};
  font-weight: 400;
  margin-left: auto;
margin-right: auto;
}
`,p=()=>{const t=["Beer Glass","Parfait glass","Mason jar","Margarita glass","Martini Glass","Balloon Glass","Coupe Glass"],r=["Homemade Liqueur","Punch/Party Drink","Beer","Soft Drink"];return e.jsxs(c,{children:[e.jsxs("div",{className:"addAvatar",children:[e.jsx("input",{type:"file",name:"drinkAvatar"}),e.jsx("label",{className:"titleAvatar",htmlFor:"file",children:"Add image"})]}),e.jsxs("div",{className:"formDescription",children:[e.jsxs("label",{className:"label",children:["Enter item title",e.jsx("input",{className:"inputStyle",type:"text",name:"drink"})]}),e.jsxs("label",{className:"label",children:["Enter about recipe",e.jsx("input",{className:"inputStyle",type:"text",name:"shortDescription"})]}),e.jsxs("label",{className:"label",children:["Category",e.jsx("select",{className:"inputStyle",name:"category",children:r.map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsxs("label",{className:"label",children:["Glass",e.jsx("select",{className:"inputStyle",name:"glass",children:t.map(a=>e.jsx("option",{value:a,children:a},a))})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"alcoholic",children:"Alcoholic"}),e.jsx("input",{type:"radio",name:"alcoholic"}),e.jsx("label",{htmlFor:"nonAlcoholices",children:"Non-alcoholic"}),e.jsx("input",{type:"radio",name:"alcoholic"})]})]})},h=n.div`
display: grid;
.label{
display: grid;
  font-size: 28px;
  color: ${t=>t.theme.whiteColor};
  font-weight: 600;
  
};
.recipe{
    width: 335px;
    height: 184px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 400;
background-color: ${t=>t.theme.whiteTenColor};
/* color: ${t=>t.theme.whiteColor}; */
};
`,m=()=>e.jsx(h,{children:e.jsxs("label",{className:"label",children:["Recipe Preparation",e.jsx("textarea",{className:"recipe",placeholder:"Enter the recipe",name:"instructions"})]})}),x=n.div`
width: 335px;

.btnAdd{ 
border-radius: 42px;
padding: 14px 40px;
width: 107px;
height: 46px;
background: ${t=>t.theme.whiteColor};
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 129%;
color: #161f37;
};
`,g=()=>{const t=s(),r=async a=>{a.preventDefault();const i=new FormData;i.append("drinkAvatar",a.target.elements.drinkAvatar.files[0]),i.append("drink",a.target.elements.drink.value),i.append("category",a.target.elements.category.value),i.append("alcoholic",a.target.elements.alcoholic.value),i.append("glass",a.target.elements.glass.value),i.append("instructions",a.target.elements.instructions.value),i.append("shortDescription",a.target.elements.shortDescription.value),i.append("ingredients",'[{"title":"ingredient1","measure": "measure1", "ingredientId": "64aebb7f82d96cc69e0eb4a7"}, {"title":"ingredient2","measure": "measure2", "ingredientId": "64aebb7f82d96cc69e0eb4a7"},{"title":"ingredient3","measure": "measure3", "ingredientId": "64aebb7f82d96cc69e0eb4a7"}]'),await t(l(i))};return e.jsx(x,{children:e.jsxs("form",{onSubmit:r,children:[e.jsx(p,{}),e.jsx(m,{}),e.jsx("button",{className:"btnAdd",children:"Add"})]})})},f=()=>e.jsxs(d,{children:[e.jsx(o,{name:"Add drink"}),e.jsx(g,{})]});export{f as default};
