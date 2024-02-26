import{s as a,d as n,h as e,u as p,r as m,D as d,j as s,E as x}from"./index-7cd3407e.js";import{S as c}from"./Section-052ae763.js";import{P as D}from"./PageTitle-6c7708f4.js";import{D as k,P as h}from"./Placeholder-874f9132.js";import{e as g}from"./selectors-a7001df1.js";import"./usePagination-45c95e18.js";import"./hero-desc@1x-c9bd24ae.js";const l=a.div`
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
`,E=()=>{const o=e(g),t=p();m.useEffect(()=>{t(d())},[t]);const i=r=>{t(x(r))};return s.jsx(l,{children:s.jsxs(c,{className:"myDrinks",children:[s.jsx(D,{name:"MyDrinks"}),o.length>0?s.jsx(k,{data:o,onRemoveDrinks:i}):s.jsx(h,{})]})})};export{E as default};
