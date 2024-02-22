import{s as o,d as r,u as p,r as d,g as m,j as s,e as c}from"./index-f1d972dc.js";import{d as e,S as k}from"./Section-b73e3bd7.js";import{P as x}from"./PageTitle-f7fd149e.js";import{s as D,D as l,P as g}from"./Placeholder-f5d76084.js";const h=o.div`
  width: 100%;

  & .myDrinks {
    padding-top: 80px;
    padding-bottom: 80px;

    @media ${e.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
    }

    @media ${e.desktop} {
      padding-top: 158px;
      padding-bottom: 140px;
    }
  }
`,v=()=>{const n=r(D),t=p();d.useEffect(()=>{t(m())},[t]);const a=i=>{t(c(i))};return s.jsx(h,{children:s.jsxs(k,{className:"myDrinks",children:[s.jsx(x,{name:"MyDrinks"}),n.length>0?s.jsx(l,{data:n,onRemoveDrinks:a}):s.jsx(g,{})]})})};export{v as default};
