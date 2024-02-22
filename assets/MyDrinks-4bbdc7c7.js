import{s as o,h as r,u as p,r as d,k as m,j as s,l as c}from"./index-5fba7cfa.js";import{d as a,S as k}from"./Section-5a489203.js";import{P as x}from"./PageTitle-991efc44.js";import{s as D,D as l,P as h}from"./Placeholder-63204213.js";const g=o.div`
  width: 100%;

  & .myDrinks {
    padding-top: 80px;
    padding-bottom: 80px;

    @media ${a.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
    }

    @media ${a.desktop} {
      padding-top: 158px;
      padding-bottom: 140px;
    }
  }
`,v=()=>{const n=r(D),t=p();d.useEffect(()=>{t(m())},[t]);const e=i=>{t(c(i))};return s.jsx(g,{children:s.jsxs(k,{className:"myDrinks",children:[s.jsx(x,{name:"MyDrinks"}),n.length>0?s.jsx(l,{data:n,onRemoveDrinks:e}):s.jsx(h,{})]})})};export{v as default};
