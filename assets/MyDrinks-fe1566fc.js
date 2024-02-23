import{s as e,h as r,u as p,r as m,k as d,j as s,l as x}from"./index-d70df441.js";import{d as o,S as c}from"./Section-51e883ab.js";import{P as k}from"./PageTitle-370a9485.js";import{s as D,D as h,P as g}from"./Placeholder-5ff9d65f.js";const l=e.div`
  width: 100%;

  & .myDrinks {
    padding-top: 80px;
    padding-bottom: 80px;
    & h1 {
      margin-bottom: 40px;
    }

    @media ${o.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${o.desktop} {
      padding-top: 158px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 62px;
      }
    }
  }
`,w=()=>{const n=r(D),t=p();m.useEffect(()=>{t(d())},[t]);const a=i=>{t(x(i))};return s.jsx(l,{children:s.jsxs(c,{className:"myDrinks",children:[s.jsx(k,{name:"MyDrinks"}),n.length>0?s.jsx(h,{data:n,onRemoveDrinks:a}):s.jsx(g,{})]})})};export{w as default};
