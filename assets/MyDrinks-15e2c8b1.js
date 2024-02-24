import{s as r,d as n,h as e,u as p,r as m,k as d,j as s,l as x}from"./index-ecbef84a.js";import{S as c}from"./Section-7d8c9e92.js";import{P as k}from"./PageTitle-15348ffa.js";import{D,P as h}from"./Placeholder-69cceb86.js";import{s as g}from"./selectors-3bd61cc3.js";const l=r.div`
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
