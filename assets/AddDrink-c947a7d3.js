import{s as a,d as n,G as N,r as u,u as k,q as C,t as I,h as p,k as $,j as e,m as _,v as B,w as L,n as j,x as P,L as S,y as z,F as A}from"./index-b2aa70be.js";import{P as R}from"./PageTitle-21af51ef.js";import{a as F,b as E,S as y,s as O}from"./react-select.esm-bf2c7d60.js";import{b as D,c as q,d as T}from"./selectors-a7001df1.js";import{v}from"./v4-4a60fe23.js";import{S as Z}from"./Section-0cb8d1a2.js";import"./floating-ui.dom-9d61e2db.js";const G=a.div`
  margin: 0 auto;
  margin-bottom: 80px;
  padding: 80px 0;
  @media ${n.tablet} {
    padding: 140px 0;
  }
  @media ${n.desktop} {
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
`,M=a.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  margin-bottom: 40px;
  @media ${n.tablet} {
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

    /* margin-bottom: 35px; */
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
    /* margin-bottom: 40px; */
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
`;function U(t){return N({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z",clipRule:"evenodd"},child:[]}]})(t)}const H=({imageURL:t,setImageURL:d})=>{const[s,m]=u.useState(!1),c=k();u.useEffect(()=>{c(C()),c(I())},[c]);const l=p(F),h=p(E),f=()=>l?l.map(o=>({value:o,label:o})):void 0,b=()=>h?h.map(o=>({value:o,label:o})):void 0;p($).dateOfBirth;const i=r=>{const o=URL.createObjectURL(r.target.files[0]);d(o),console.log(o)};return e.jsxs(M,{children:[e.jsxs("div",{className:"addAvatar",children:[t&&e.jsx("img",{src:`${t}`,style:{zIndex:2,width:"100%",height:"100%",objectFit:"cover"}}),e.jsxs("div",{className:"avatar",children:[e.jsx(U,{className:"icon"}),e.jsx("input",{type:"file",name:"drinkAvatar",onChange:i,required:!0}),e.jsx("label",{className:"titleAvatar",id:"file",children:"Add image"})]})]}),e.jsxs("div",{className:"formDescription",children:[e.jsxs("label",{className:"label",children:["Enter item title",e.jsx("input",{className:"inputStyle",type:"text",name:"drink",required:!0})]}),e.jsxs("label",{className:"label",children:["Enter about recipe",e.jsx("input",{className:"inputStyle",type:"text",name:"shortDescription",required:!0})]}),e.jsxs("label",{className:"label",children:["Category",e.jsx(y,{name:"category",options:f(),classNamePrefix:"react-select",placeholder:"select a category",required:!0})]}),e.jsxs("label",{className:"label",children:["Glass",e.jsx(y,{name:"glass",options:b(),classNamePrefix:"react-select",placeholder:"select a glass",required:!0})]}),e.jsxs("div",{className:"radioBtnBlock",children:[e.jsxs("label",{className:"radioBtn",children:[e.jsx("input",{className:"textRadioBtn visually-hidden",type:"radio",name:"alcoholic",value:"Alcoholic",disabled:s}),e.jsx("span",{className:"custom-radiobutton"}),"Alcoholic"]}),e.jsxs("label",{className:"radioBtn",children:[e.jsx("input",{className:"textRadioBtn",type:"radio",name:"alcoholic",defaultChecked:"true",value:"Non alcoholic"}),e.jsx("span",{className:"custom-radiobutton"}),"Non-alcoholic"]})]})]})]})},V=a.div`
  display: grid;
  margin-bottom: 17px;
  width: 335px;
  @media ${n.tablet} {
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
`,W=()=>e.jsx(V,{children:e.jsxs("label",{className:"label",children:["Recipe Preparation",e.jsx("textarea",{className:"recipe",placeholder:"Enter the recipe",name:"instructions",required:!0})]})}),J=a.div`
  @media ${n.tablet} {
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
`,K=a.div`
  display: grid;
  width: 335px;
  margin-bottom: 40px;
  @media ${n.tablet} {
    width: 100%;
  }
  @media ${n.desktop} {
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
      @media ${n.tablet} {
        width: 332px;
      }
      @media ${n.desktop} {
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
    /* opacity: 0.1; */
    width: 104px;
    height: 38px;
    /* transition: all; */
    color: white;
    /* padding: 0 10px; 0 10 */
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
    /* justify-content: space-between; */
    gap: 18px;
    @media ${n.tablet} {
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
    @media ${n.tablet} {
      width: 150px;
    }
  }

  .itemIngrButton {
    background-color: transparent;
    border: none;
    color: #ffffff50;
    transition: all 0.3s;
    @media ${n.tablet} {
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
    /* opacity: 0.1; */
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
`;function Q(t){return N({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"},child:[]}]})(t)}const Y=({ingredientList:t,setIngredientList:d,handleIncrementProduct:s,handleDecrementProduct:m,onButtonDeleteClick:c})=>{const l=k();u.useEffect(()=>{l(_())},[l]);const h=p(O),f=()=>h.map(i=>({value:i._id,label:i.title})),b=({value:i,label:r},o)=>{const x=t.map(g=>(g.id===o&&(g.ingredientId=i,g.title=r),g));d(x)},w=({value:i},r)=>{const o=t.map(x=>(x.id===r&&(x.measure=i),x));d(o)};return e.jsxs(K,{children:[e.jsx("div",{children:e.jsxs("div",{className:"title",children:[e.jsx("h3",{className:"text",children:"Ingredients"}),e.jsxs("div",{className:"counter",children:[e.jsx("button",{className:"btnCounter",onClick:m,disabled:t.length===1,children:"-"}),e.jsx("span",{className:"titleCounter",children:t.length}),e.jsx("button",{className:"btnCounter",onClick:s,children:"+"})]})]})}),h.length>0&&e.jsx("div",{className:"listIngr",children:t.map((i,r)=>e.jsxs("div",{className:"itemIngr",children:[e.jsx(y,{className:"itemIngrSelect",options:f(),classNamePrefix:"react-select",placeholder:"select a category",onChange:o=>b(o,i.id),required:!0}),e.jsx("input",{className:"itemIngrInput",type:"text",placeholder:"1 cl",name:`ingredients[${r}].measure`,onChange:o=>w(o.target,i.id),required:!0}),e.jsx("button",{className:"itemIngrButton",onClick:()=>c(i.id),children:e.jsx(Q,{})})]},i.id))})]})},X=()=>{const t=k(),d=p(D),[s,m]=u.useState(""),[c,l]=u.useState([{id:v(),title:"",ingredientId:"",measure:""}]),h=()=>{l(i=>[...i,{id:v()}])},f=i=>{l(r=>r.length===1?r:r.filter(o=>o.id!==i))},b=()=>{l(i=>[...i.slice(0,-1)])},w=async i=>{i.preventDefault();const r=new FormData,o=i.target;r.append("drink",o.elements.drink.value),r.append("shortDescription",o.elements.shortDescription.value),r.append("category",o.elements.category.value),r.append("glass",i.target.elements.glass.value),r.append("alcoholic",i.target.elements.alcoholic.value),r.append("ingredients",JSON.stringify(c)),r.append("instructions",i.target.elements.instructions.value),r.append("drinkAvatar",i.target.elements.drinkAvatar.files[0]);const{error:x,payload:g}=await t(L(r));if(x){j.Notify.failure(`No drink added. Error: ${g}`);return}j.Notify.success("Drink successfully added"),m(""),o.reset()};return e.jsxs(J,{children:[d&&e.jsx(B,{}),e.jsx(R,{name:"Add drink"}),e.jsxs("form",{className:"form",onSubmit:w,children:[e.jsx(H,{imageURL:s,setImageURL:m}),e.jsx(Y,{ingredientList:c,setIngredientList:l,handleIncrementProduct:h,handleDecrementProduct:b,onButtonDeleteClick:f}),e.jsx(W,{}),e.jsx("button",{className:"btnAdd",children:"Add"})]})]})},ee=a.div`
  margin-top: 80px;
  @media ${n.desktop} {
    width: 313px;
  }
`,te=a.h3`
  width: 160px;
  height: 32px;
  font-family: Manrope;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 28px;
  @media ${n.tablet} {
    font-size: 24px;
    margin-bottom: 40px;
  }
`,ie=a.ul`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`,re=a.li`
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
`,oe=a.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
`,ne=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ae=a.h4`
  margin: 0;
  /* width: 79px; */
  height: 22px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`,se=a.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(243, 243, 243, 0.5);
  margin: 0;
  max-height: calc(1.4rem * 3);
  overflow: hidden;
`,le=()=>{const t=k();u.useEffect(()=>{t(P())},[t]);const d=p(q);return p(D),p(T),d.length===0?e.jsx("p",{children:"No popular drinks available at the moment."}):e.jsxs(ee,{children:[e.jsx(te,{children:"Popular drinks"}),e.jsx(ie,{children:d.map(s=>e.jsx(re,{children:e.jsxs(S,{to:`${z}${s._id}`,className:"popular-link",children:[e.jsx(oe,{src:s.drinkThumb,alt:s.drink}),e.jsxs(ne,{children:[e.jsx(ae,{children:s.drink}),e.jsx(se,{children:s.shortDescription})]})]})},s._id))})]})},me=()=>e.jsx(G,{children:e.jsx(Z,{className:"addDrinkSection",children:e.jsxs("div",{className:"drinkBlocks",children:[e.jsx(X,{}),e.jsxs("div",{className:"sideBar",children:[e.jsx(A,{title:"Follow Us"}),e.jsx(le,{})]})]})})});export{me as default};
