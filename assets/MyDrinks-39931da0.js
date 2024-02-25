import{s as r,d as n,f as e,u as p,r as m,t as d,j as s,v as x}from"./index-441b2351.js";import{S as c}from"./Section-863878da.js";import{P as k}from"./PageTitle-975d379b.js";import{D,P as g}from"./Placeholder-57b09570.js";import{a as h}from"./selectors-b8f3a452.js";import"./hero-desc@1x-c9bd24ae.js";const l=r.div`
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
`,y=()=>{const o=e(h),t=p();m.useEffect(()=>{t(d())},[t]);const a=i=>{t(x(i))};return s.jsx(l,{children:s.jsxs(c,{className:"myDrinks",children:[s.jsx(k,{name:"MyDrinks"}),o.length>0?s.jsx(D,{data:o,onRemoveDrinks:a}):s.jsx(g,{})]})})};export{y as default};
