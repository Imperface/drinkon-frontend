import{s as a,d as n,h as e,u as p,r as m,C as d,j as s,D as x}from"./index-9731e5d8.js";import{S as c}from"./Section-67796978.js";import{P as D}from"./PageTitle-456bd1f8.js";import{D as k,P as h}from"./Placeholder-e8125f7b.js";import{e as g}from"./selectors-a7001df1.js";import"./usePagination-88e40ee6.js";import"./hero-desc@1x-c9bd24ae.js";const l=a.div`
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
`,O=()=>{const o=e(g),t=p();m.useEffect(()=>{t(d())},[t]);const i=r=>{t(x(r))};return s.jsx(l,{children:s.jsxs(c,{className:"myDrinks",children:[s.jsx(D,{name:"MyDrinks"}),o.length>0?s.jsx(k,{data:o,onRemoveDrinks:i}):s.jsx(h,{})]})})};export{O as default};
