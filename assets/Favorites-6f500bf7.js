import{s as r,d as a,h as p,u as n,r as m,E as d,j as t,H as x}from"./index-9731e5d8.js";import{S as c}from"./Section-67796978.js";import{P as h}from"./PageTitle-456bd1f8.js";import{D as v,P as g}from"./Placeholder-e8125f7b.js";import{f}from"./selectors-a7001df1.js";import"./usePagination-88e40ee6.js";import"./hero-desc@1x-c9bd24ae.js";const l=r.div`
  width: 100%;

  & .favorites {
    padding-top: 80px;
    padding-bottom: 80px;
    & h1 {
      margin-bottom: 40px;
    }

    @media ${a.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${a.desktop} {
      padding-top: 158px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 62px;
      }
    }
  }
`,P=()=>{const o=p(f),s=n();m.useEffect(()=>{s(d())},[s]);const e=i=>{s(x(i))};return t.jsx(l,{children:t.jsxs(c,{className:"favorites",children:[t.jsx(h,{name:"Favorites"}),o.length>0?t.jsx(v,{data:o,onRemoveDrinks:e}):t.jsx(g,{})]})})};export{P as default};
