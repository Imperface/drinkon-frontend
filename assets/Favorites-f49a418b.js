import{s as r,d as o,l as p,u as n,r as d,v as m,j as t,w as x}from"./index-a561bd39.js";import{S as c}from"./Section-ad6088ef.js";import{P as v}from"./PageTitle-9cc99f5b.js";import{D as g,P as h}from"./Placeholder-c0e6908b.js";import{a as l}from"./selectors-3bd61cc3.js";const f=r.div`
  width: 100%;

  & .favorites {
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
`,F=()=>{const a=p(l),s=n();d.useEffect(()=>{s(m())},[s]);const e=i=>{s(x(i))};return t.jsx(f,{children:t.jsxs(c,{className:"favorites",children:[t.jsx(v,{name:"Favorites"}),a.length>0?t.jsx(g,{data:a,onRemoveDrinks:e}):t.jsx(h,{})]})})};export{F as default};
