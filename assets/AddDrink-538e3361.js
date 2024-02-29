import{s as l,d as s,G as C,u as y,r as w,q as $,t as B,h as x,k as _,j as e,o as z,v as L,w as P,x as A,n as N,y as S,L as F,z as R,F as O}from"./index-0a84b6e4.js";import{a as E,b as q,S as j,s as T}from"./react-select.esm-c8aae6a3.js";import{P as M}from"./PageTitle-601068a5.js";import{b as I,c as Z,d as G}from"./selectors-a7001df1.js";import{v as D}from"./v4-4a60fe23.js";import{S as U}from"./Section-0cf2d87a.js";import"./floating-ui.dom-9d61e2db.js";const H=l.div`
  margin: 0 auto;
  margin-bottom: 80px;
  padding: 80px 0;
  @media ${s.tablet} {
    padding: 140px 0;
  }
  @media ${s.desktop} {
    padding: 160px 0 140px;

    & .drinkBlocks {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    & .sideBar {
      width: 100%;
    }
  }

  & .sideBar {
    width: 300px;
  }
`,Y=l.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  margin-bottom: 40px;
  @media ${s.tablet} {
  }
  .alcoholicBlock {
    cursor: not-allowed;
  }
  & .react-select {
    margin-left: auto;
    width: 200px;
    background-color: transparent;
    color: #fff;
    &__control {
      cursor: pointer;
      background-color: transparent;
      width: 200px;
      border: none;
      color: white !important;
    }
    &--menu-is-open {
      background-color: transparent;
    }
    &__indicator-separator {
      display: none;
    }
    &__menu {
      background-color: rgba(22, 31, 55, 1);
      border-radius: 20px;
    }
    &__option {
      cursor: pointer;
      &--is-focused {
        color: white;
        background-color: transparent;
      }
    }
    &__single-value {
      color: white;
    }
  }

  .addAvatar {
    position: relative;
    display: grid;
    width: 335px;
    height: 320px;
    margin-bottom: 40px;
    background-color: ${t=>t.theme.darkBlueFiftyColor};
  }
  .avatar {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 88px;
    & input {
      cursor: pointer;
    }
  }
  .icon {
    color: black;
    background-color: #f3f3f3;
    border-radius: 6px;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-bottom: -50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  input[type='file'] {
    position: absolute;
    top: 20%;
    left: 50%;
    margin-bottom: -50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    /* background: ${t=>t.theme.whiteZeroColor}; */
    outline: 0;
    opacity: 0;
    user-select: none;
    cursor: pointer;
  }

  .formDescription {
    display: grid;
    gap: 20px;
    width: 335px;

    margin-bottom: 40px;
  }

  .inputStyle {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #f3f3f3;
    border: none;
    background-color: ${t=>t.theme.whiteZeroColor};
    height: 34px;
    min-width: 200px;

  }
  .titleAvatar {
    position: absolute;
    font-size: 16px;
    font-weight: 500;
    color: #f3f3f3;
    margin-top: 70px;
  }
  .itemForm {
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

  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 335px;
    height: auto;
    padding-bottom: 10px;
    font-size: 14px;
    color: ${t=>t.theme.whiteFiftyColor};
    font-weight: 400;
    border-width: 1px;
    border-top-style: none;
    border-bottom-style: solid;
  }
  & .radioBtnBlock {
    display: flex;
    margin-top: 20px;
  }
  .radioBtn1 {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    color: rgba(243, 243, 243, 0.5);

    & .custom-radiobutton {
      display: inline-block;
      height: 24px;
      width: 24px;
      border: 1px solid rgba(243, 243, 243, 0.5);
      cursor: pointer;
      background-color: transparent;
      margin-right: 10px;
      border-radius: 50%;
      position: relative;
    }
    & .textRadioBtn:checked + span {
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 15px;
        height: 15px;
        background-color: #fff;
      }
    }
  }

  .radioBtn {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;

    & .custom-radiobutton {
      display: inline-block;
      height: 24px;
      width: 24px;
      border: 1px solid white;
      cursor: pointer;
      background-color: transparent;
      margin-right: 10px;
      border-radius: 50%;
      position: relative;
    }
    & .textRadioBtn:checked + span {
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 15px;
        height: 15px;
        background-color: #fff;
      }
    }
  }
  .textRadioBtn {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    padding-left: 10px;
    visibility: hidden;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;function V(t){return C({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z",clipRule:"evenodd"},child:[]}]})(t)}const W=({imageURL:t,setImageURL:c})=>{const a=y();w.useEffect(()=>{a($()),a(B())},[a]);const g=x(E),u=x(q),p=()=>g?g.map(r=>({value:r,label:r})):void 0,m=()=>u?u.map(r=>({value:r,label:r})):void 0,h=x(_);h.dateOfBirth;const f=()=>{if(!h.dateOfBirth)return;let[o,r,i]=h.dateOfBirth.split("/");o=Number(o),r=Number(r),i=Number(i);const n=new Date,d=new Date(i,r-1,o);let k=n.getFullYear()-d.getFullYear();const v=n.getMonth()-d.getMonth();return(v<0||v===0&&n.getDate()<d.getDate())&&k--,!(k<18)},b=o=>{const r=URL.createObjectURL(o.target.files[0]);c(r)};return e.jsxs(Y,{children:[e.jsxs("div",{className:"addAvatar",children:[t&&e.jsx("img",{src:`${t}`,style:{zIndex:2,width:"100%",height:"100%",objectFit:"cover"}}),e.jsxs("div",{className:"avatar",children:[e.jsx(V,{className:"icon"}),e.jsx("input",{type:"file",name:"drinkAvatar",onChange:b,required:!0}),e.jsx("label",{className:"titleAvatar",id:"file",children:"Add image"})]})]}),e.jsxs("div",{className:"formDescription",children:[e.jsxs("label",{className:"label",children:["Enter item title",e.jsx("input",{className:"inputStyle",type:"text",name:"drink",required:!0})]}),e.jsxs("label",{className:"label",children:["Enter about recipe",e.jsx("input",{className:"inputStyle",type:"text",name:"shortDescription",required:!0})]}),e.jsxs("label",{className:"label",children:["Category",e.jsx(j,{name:"category",options:p(),classNamePrefix:"react-select",placeholder:"select a category",required:!0})]}),e.jsxs("label",{className:"label",children:["Glass",e.jsx(j,{name:"glass",options:m(),classNamePrefix:"react-select",placeholder:"select a glass",required:!0})]}),h&&e.jsxs("div",{className:"radioBtnBlock",children:[e.jsxs("label",{className:`radioBtn ${f()?"":"alcoholicBlock"}`,children:[e.jsx("input",{className:"textRadioBtn visually-hidden",type:"radio",name:"alcoholic",value:"Alcoholic",disabled:!f()}),e.jsx("span",{className:"custom-radiobutton"}),"Alcoholic"]}),e.jsxs("label",{className:"radioBtn",children:[e.jsx("input",{className:"textRadioBtn",type:"radio",name:"alcoholic",defaultChecked:"true",value:"Non alcoholic"}),e.jsx("span",{className:"custom-radiobutton"}),"Non-alcoholic"]})]})]})]})},J=l.div`
  display: grid;
  margin-bottom: 17px;
  width: 335px;
  @media ${s.tablet} {
    width: 480px;
  }

  .label {
    display: grid;
    font-size: 28px;
    color: ${t=>t.theme.whiteColor};
    font-weight: 600;
  }
  .recipe {
    resize: none;
    padding: 10px;
    margin-top: 40px;

    height: 184px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 400;
    background-color: ${t=>t.theme.whiteZeroColor};
    color: ${t=>t.theme.whiteColor};
  }
`,K=()=>e.jsx(J,{children:e.jsxs("label",{className:"label",children:["Recipe Preparation",e.jsx("textarea",{className:"recipe",placeholder:"Enter the recipe",name:"instructions",required:!0})]})}),Q=l.div`
  @media ${s.tablet} {
    width: 704px;
  }
  .btnAdd {
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
  }
`,X=l.div`
  display: grid;
  width: 335px;
  margin-bottom: 40px;
  @media ${s.tablet} {
    width: 100%;
  }
  @media ${s.desktop} {
    width: 540px;
  }

  & .react-select {
    margin-left: auto;
    background-color: transparent;
    color: #fff;
    &__control {
      width: 200px;

      cursor: pointer;
      background-color: transparent;
      border: none;
      color: white !important;
      border: 1px solid rgba(243, 243, 243, 0.5);
      border-radius: 20px;
      @media ${s.tablet} {
        width: 332px;
      }
      @media ${s.desktop} {
        width: 316px;
      }
    }
    &--menu-is-open {
      background-color: transparent;
    }
    &__indicator-separator {
      display: none;
    }
    &__menu {
      background-color: rgba(22, 31, 55, 1);
      border-radius: 20px;
    }
    &__option {
      cursor: pointer;
      &--is-focused {
        color: white;
        background-color: transparent;
      }
    }
    &__single-value {
      color: white;
    }
  }

  .counter {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 50px;
    width: 104px;
    height: 38px;
    color: white;
  }
  .btnCounter {
    background-color: ${t=>t.theme.whiteZeroColor};
    border: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    text-align: center;
    color: #f3f3f3;
  }
  .titleCounter {
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    text-align: center;
    color: #f3f3f3;
  }
  .title {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 40px;
  }
  .text {
    font-weight: 600;
    font-size: 28px;
    line-height: 114%;
    color: #f3f3f3;
  }
  .listIngr {
    display: grid;
    gap: 18px;
    @media ${s.tablet} {
      width: 100%;
      gap: 24px;
    }
  }
  .itemIngr {
    display: flex;
    column-gap: 8px;
  }

  .itemIngrSelect {
  }

  .itemIngrInput {
    border: 1px solid rgba(243, 243, 243, 0.5);
    background-color: transparent;
    color: white;
    border-radius: 20px;
    padding: 0 10px;
    width: 101px;
    @media ${s.tablet} {
      width: 150px;
    }
  }

  .itemIngrButton {
    background-color: transparent;
    border: none;
    color: #ffffff50;
    transition: all 0.3s;
    @media ${s.tablet} {
      margin-left: auto;
    }
    &:hover {
      color: white;
    }
  }
  .ingredient {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .inputStyle {
    background-color: ${t=>t.theme.whiteZeroColor};
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
  .quantity {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 101px;
    height: 50px;
    transition: all;
    color: white;
  }
  .textQuantity {
    width: 30px;
    background-color: ${t=>t.theme.whiteZeroColor};
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
`;function ee(t){return C({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"},child:[]}]})(t)}const te=({ingredientList:t,setIngredientList:c,handleIncrementProduct:a,handleDecrementProduct:g,onButtonDeleteClick:u})=>{const p=y();w.useEffect(()=>{p(z())},[p]);const m=x(T),h=()=>m.map(o=>({value:o._id,label:o.title})),f=({value:o,label:r},i)=>{const n=t.map(d=>(d.id===i&&(d.ingredientId=o,d.title=r),d));c(n)},b=({value:o},r)=>{const i=t.map(n=>(n.id===r&&(n.measure=o),n));c(i)};return e.jsxs(X,{children:[e.jsx("div",{children:e.jsxs("div",{className:"title",children:[e.jsx("h3",{className:"text",children:"Ingredients"}),e.jsxs("div",{className:"counter",children:[e.jsx("button",{className:"btnCounter",onClick:g,disabled:t.length===1,children:"-"}),e.jsx("span",{className:"titleCounter",children:t.length}),e.jsx("button",{className:"btnCounter",onClick:a,children:"+"})]})]})}),m.length>0&&e.jsx("div",{className:"listIngr",children:t.map((o,r)=>e.jsxs("div",{className:"itemIngr",children:[e.jsx(j,{className:"itemIngrSelect",options:h(),classNamePrefix:"react-select",placeholder:"select a category",onChange:i=>f(i,o.id),required:!0}),e.jsx("input",{className:"itemIngrInput",type:"text",placeholder:"1 cl",name:`ingredients[${r}].measure`,onChange:i=>b(i.target,o.id),required:!0}),e.jsx("button",{className:"itemIngrButton",onClick:()=>u(o.id),children:e.jsx(ee,{})})]},o.id))})]})},re=()=>{const t=y(),c=x(I),[a,g]=w.useState(""),[u,p]=w.useState([{id:D(),title:"",ingredientId:"",measure:""}]),m=L(),h=()=>{p(r=>[...r,{id:D()}])},f=r=>{p(i=>i.length===1?i:i.filter(n=>n.id!==r))},b=()=>{p(r=>[...r.slice(0,-1)])},o=async r=>{r.preventDefault();const i=new FormData,n=r.target;i.append("drink",n.elements.drink.value),i.append("shortDescription",n.elements.shortDescription.value),i.append("category",n.elements.category.value),i.append("glass",r.target.elements.glass.value),i.append("alcoholic",r.target.elements.alcoholic.value),i.append("ingredients",JSON.stringify(u)),i.append("instructions",r.target.elements.instructions.value),i.append("drinkAvatar",r.target.elements.drinkAvatar.files[0]);const{error:d,payload:k}=await t(A(i));if(d){N.Notify.failure(`No drink added. Error: ${k}`);return}N.Notify.success("Drink successfully added"),g(""),n.reset(),m("/my-drinks")};return e.jsxs(Q,{children:[c&&e.jsx(P,{}),e.jsx(M,{name:"Add drink"}),e.jsxs("form",{className:"form",onSubmit:o,children:[e.jsx(W,{imageURL:a,setImageURL:g}),e.jsx(te,{ingredientList:u,setIngredientList:p,handleIncrementProduct:h,handleDecrementProduct:b,onButtonDeleteClick:f}),e.jsx(K,{}),e.jsx("button",{className:"btnAdd",children:"Add"})]})]})},ie=l.div`
  margin-top: 80px;
  @media ${s.desktop} {
    width: 313px;
  }
`,oe=l.h3`
  width: 160px;
  height: 32px;
  font-family: Manrope;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 28px;
  @media ${s.tablet} {
    font-size: 24px;
    margin-bottom: 40px;
  }
`,ne=l.ul`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`,ae=l.li`
  width: 313px;
  height: 90px;
  gap: 18px;
  display: flex;
  flex-direction: row;
  & .popular-link {
    gap: 18px;
    display: flex;
    flex-direction: row;
  }
`,se=l.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
`,le=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,de=l.h4`
  margin: 0;
  height: 22px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`,ce=l.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(243, 243, 243, 0.5);
  margin: 0;
  max-height: calc(1.4rem * 3);
  overflow: hidden;
`,pe=()=>{const t=y();w.useEffect(()=>{t(S())},[t]);const c=x(Z);return x(I),x(G),c.length===0?e.jsx("p",{children:"No popular drinks available at the moment."}):e.jsxs(ie,{children:[e.jsx(oe,{children:"Popular drinks"}),e.jsx(ne,{children:c.map(a=>e.jsx(ae,{children:e.jsxs(F,{to:`${R}${a._id}`,className:"popular-link",children:[e.jsx(se,{src:a.drinkThumb,alt:a.drink}),e.jsxs(le,{children:[e.jsx(de,{children:a.drink}),e.jsx(ce,{children:a.shortDescription})]})]})},a._id))})]})},we=()=>e.jsx(H,{children:e.jsx(U,{className:"addDrinkSection",children:e.jsxs("div",{className:"drinkBlocks",children:[e.jsx(re,{}),e.jsxs("div",{className:"sideBar",children:[e.jsx(O,{title:"Follow Us"}),e.jsx(pe,{})]})]})})});export{we as default};
