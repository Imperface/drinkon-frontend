import{s as r,h as e,u as p,r as m,k as d,j as s,l as x}from"./index-6787b180.js";import{d as n,S as c}from"./Section-1b7a67fd.js";import{P as k}from"./PageTitle-a06be259.js";import{D,P as h}from"./Placeholder-a647d880.js";import{s as g}from"./selectors-3bd61cc3.js";const l=r.div`
  width: 100%;

  & .myDrinks {
    padding-top: 80px;
    padding-bottom: 80px;
    & h1 {
      margin-bottom: 40px;
    }

    @media ${n.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${n.desktop} {
      padding-top: 158px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 62px;
      }
    }
  }
`,v=()=>{const o=e(g),t=p();m.useEffect(()=>{t(d())},[t]);const a=i=>{t(x(i))};return s.jsx(l,{children:s.jsxs(c,{className:"myDrinks",children:[s.jsx(k,{name:"MyDrinks"}),o.length>0?s.jsx(D,{data:o,onRemoveDrinks:a}):s.jsx(h,{})]})})};export{v as default};
