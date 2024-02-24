import{s as l,G as h,r as c,u as x,f as g,h as m,k as p,l as u,j as e,m as f}from"./index-62cc04f8.js";import{P as b}from"./PageTitle-2eb382bf.js";const j=l.div`
margin-bottom:80px;
`,y=l.div`
 display: block;
  width: 335px;
  margin-bottom: 40px;

  .addAvatar {
    position: relative;
  display: grid;
  width: 335px;
  height: 320px;
  margin-bottom: 40px;
  background-color: ${t=>t.theme.darkBlueFiftyColor};
  };
 .avatar{
  position: absolute;
  top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 80px;
height: 88px;
 }
 .icon{
  color: black;
  background-color: #F3F3F3;
  border-radius: 6px;
  position: absolute;
  top: 30%;
    left: 50%;
    margin-bottom: -50%;
    transform: translate(-50%, -50%);
  width: 50px;
height: 50px;
 }
  input[type=file]{
    position: absolute;
  top: 20%;
    left: 50%;
    margin-bottom: -50%;
    transform: translate(-50%, -50%);
width: 50px;
height: 50px;
  /* background: ${t=>t.theme.whiteZeroColor}; */
  outline:0;
  opacity:0;
  user-select:none;
};

.formDescription{
  display: grid;
  gap: 20px;
  width: 335px;
  height: 229px;
  margin-bottom: 40px;
}

  .inputStyle{
    font-weight: 400;
font-size: 14px;
line-height: 100%;
color: #f3f3f3;
  border: none;
background-color: ${t=>t.theme.whiteZeroColor};
height: 34px;
/* margin-bottom: 35px; */
};
.titleAvatar {

  position: absolute;
font-size: 16px;
  font-weight: 500;
  color: #F3F3F3;
  margin-top: 70px;
  
};
.itemForm{
  display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 50px;
    width: 104px;
    height: 38px;
    color: white;
}

.label{
  display: flex;
    justify-content: space-between;
    align-items: center;
  width: 335px;
  height: auto;
  padding-bottom: 10px;
  /* margin-bottom: 40px; */
  font-size: 14px;
  color: ${t=>t.theme.whiteFiftyColor};
  font-weight: 400;
  border-width: 1px;
 border-top-style: none;
border-bottom-style: solid;
}  
.radioBtn{
  width: 80px;
height: 19px;
font-weight: 400;
font-size: 14px;
letter-spacing: -0.02em;
padding: 5px;
margin-right: 20px;
/* color: #f3f3f3; */
}
.textRadioBtn{
  font-weight: 400;
font-size: 14px;
letter-spacing: -0.02em;
padding-left: 10px;
/* padding: 5px; */
}
`;function w(t){return h({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z",clipRule:"evenodd"},child:[]}]})(t)}const v=t=>t.filters.categories,k=t=>t.filters.glasses,C=()=>{const[t,s]=c.useState(!1),i=x();c.useEffect(()=>{i(g())},[i]),c.useEffect(()=>{i(m())},[i]);const o=p(v),n=p(k),d=p(u).dateOfBirth;return console.log("userDateOfBirth: ",d),console.log("user: ",d),e.jsxs(y,{children:[e.jsx("div",{className:"addAvatar",children:e.jsxs("div",{className:"avatar",children:[" ",e.jsx(w,{className:"icon"}),e.jsx("input",{type:"file",name:"drinkAvatar"}),e.jsx("label",{className:"titleAvatar",htmlFor:"file",children:"Add image"})]})}),e.jsxs("div",{className:"formDescription",children:[e.jsxs("label",{className:"label",htmlFor:"drink",children:["Enter item title",e.jsx("input",{className:"inputStyle",type:"text",name:"drink"})]}),e.jsxs("label",{className:"label",children:["Enter about recipe",e.jsx("input",{className:"inputStyle",type:"text",name:"shortDescription"})]}),e.jsxs("label",{className:"label",children:["Category",e.jsx("select",{className:"inputStyle",name:"category",children:o.map(r=>e.jsx("option",{value:r,children:r},r))})]}),e.jsxs("label",{className:"label",children:["Glass",e.jsx("select",{className:"inputStyle",name:"glass",children:n.map(r=>e.jsx("option",{value:r,children:r},r))})]})]}),e.jsxs("div",{children:[e.jsx("input",{className:"textRadioBtn",type:"radio",name:"alcoholic",value:"Alcoholic",disabled:t}),e.jsx("label",{className:"radioBtn",children:"Alcoholic"}),e.jsx("input",{className:"textRadioBtn",type:"radio",name:"alcoholic",value:"Non alcoholic"}),e.jsx("label",{className:"radioBtn",children:"Non-alcoholic"})]})]})},N=l.div`
display: grid;
margin-bottom: 17px;
.label{
display: grid;
  font-size: 28px;
  color: ${t=>t.theme.whiteColor};
  font-weight: 600;
  margin-bottom: 43px;
  
};
.recipe{
    width: 335px;
    height: 184px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 400;
background-color:  ${t=>t.theme.whiteZeroColor};
color: ${t=>t.theme.whiteColor};
};
`,D=()=>e.jsxs(N,{children:[e.jsx("label",{className:"label",htmlFor:"drink",children:"Recipe Preparation"}),e.jsx("textarea",{className:"recipe",placeholder:"Enter the recipe",name:"instructions"})]}),A=l.div`
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
`,F=l.div`
display: grid;
width: 335px;
margin-bottom: 40px;

.counter{
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 50px;
    /* opacity: 0.1; */
    width: 104px;
    height: 38px;
    /* transition: all; */
    color: white;
    /* padding: 0 10px; 0 10 */
}
.btnCounter{
    background-color:  ${t=>t.theme.whiteZeroColor};
    border: none;
    font-weight: 400;
font-size: 14px;
line-height: 129%;
text-align: center;
color: #f3f3f3;
}
.titleCounter{
    font-weight: 400;
font-size: 14px;
line-height: 129%;
text-align: center;
color: #f3f3f3;  
}
.title{
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
.text{
font-weight: 600;
font-size: 28px;
line-height: 114%;
color: #f3f3f3;
}
.listIngr{
    display: grid;
    /* justify-content: space-between; */
    gap: 10px;   
}
.ingredient{
    display: flex;
    justify-content: space-between;
    gap: 10px;  
}
.inputStyle{
background-color:  ${t=>t.theme.whiteZeroColor};
color: white;
border-radius: 200px;
width: 200px;
height: 50px;
padding-left: 20px;
padding-right: 20px;
font-weight: 400;
font-size: 14px;
line-height: 129%;
color: #f3f3f3;
}
.quantity{
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    border: 1px solid rgba(243, 243, 243, 0.5);
    /* opacity: 0.1; */
    border-radius: 200px;
width: 101px;
height: 50px;
    transition: all;
    color: white;
    
}
.textQuantity{
    width: 30px;
    background-color:  ${t=>t.theme.whiteZeroColor};
    border: none;
    font-weight: 400;
font-size: 14px;
line-height: 129%;
text-align: center;
color: #f3f3f3;  
}
.btnDelet {
    background-color: ${t=>t.theme.whiteZeroColor};
    border: none; 
    font-size: 18px;
    color: #f3f3f3;  
}
`;function S(t){return h({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"},child:[]}]})(t)}const B=()=>{const t=["Beer Glass","Parfait glass","Mason jar","Margarita glass","Martini Glass","Balloon Glass","Coupe Glass"],[s,i]=c.useState(3),o=()=>{i(a=>a+1)},n=()=>{s<=3||i(a=>a-1)};return e.jsxs(F,{children:[e.jsx("div",{children:e.jsxs("div",{className:"title",children:[e.jsx("h3",{className:"text",children:"Ingredients"}),e.jsxs("div",{className:"counter",children:[e.jsx("button",{className:"btnCounter",onClick:n,children:"-"}),e.jsx("span",{className:"titleCounter",children:s}),e.jsx("button",{className:"btnCounter",onClick:o,children:"+"})]})]})}),e.jsxs("div",{className:"listIngr",children:[Array.from({length:5},(a,d)=>d),Array.from({length:3},()=>e.jsxs("div",{className:"ingredient",children:[e.jsx("select",{className:"inputStyle",name:"ingredients",children:t.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsxs("div",{className:"quantity",children:[e.jsx("input",{className:"textQuantity",type:"number",placeholder:"1"}),e.jsx("span",{className:"btnCounter",children:"cl"})]}),e.jsx("button",{className:"btnDelet",children:e.jsx(S,{})})]})),e.jsx("div",{}),e.jsx("div",{})]})]})},z=()=>{const t=x(),s=async i=>{i.preventDefault();const o=i.target,n=new FormData;n.append("drinkAvatar",i.target.elements.drinkAvatar.files[0]),n.append("drink",i.target.elements.drink.value),n.append("category",i.target.elements.category.value),n.append("alcoholic",i.target.elements.alcoholic.value),n.append("glass",i.target.elements.glass.value),n.append("instructions",i.target.elements.instructions.value),n.append("shortDescription",i.target.elements.shortDescription.value),n.append("ingredients",'[{"title":"ingredient1","measure": "measure1", "ingredientId": "64aebb7f82d96cc69e0eb4a7"}, {"title":"ingredient2","measure": "measure2", "ingredientId": "64aebb7f82d96cc69e0eb4a7"},{"title":"ingredient3","measure": "measure3", "ingredientId": "64aebb7f82d96cc69e0eb4a7"}]'),await t(f(n)),o.reset()};return e.jsx(A,{children:e.jsxs("form",{onSubmit:s,children:[e.jsx(C,{}),e.jsx(B,{}),e.jsx(D,{}),e.jsx("button",{className:"btnAdd",children:"Add"})]})})},G=()=>e.jsxs(j,{children:[e.jsx(b,{name:"Add drink"}),e.jsx(z,{})]});export{G as default};
