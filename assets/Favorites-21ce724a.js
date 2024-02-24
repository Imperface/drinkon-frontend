import{s as r,d as o,h as p,u as n,r as m,m as d,j as t,o as x}from"./index-4a11e626.js";import{S as c}from"./Section-2d7e4d12.js";import{P as h}from"./PageTitle-22fead5e.js";import{D as v,P as g}from"./Placeholder-285070f5.js";import{a as l}from"./selectors-3bd61cc3.js";const f=r.div`
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
`,F=()=>{const a=p(l),s=n();m.useEffect(()=>{s(d())},[s]);const e=i=>{s(x(i))};return t.jsx(f,{children:t.jsxs(c,{className:"favorites",children:[t.jsx(h,{name:"Favorites"}),a.length>0?t.jsx(v,{data:a,onRemoveDrinks:e}):t.jsx(g,{})]})})};export{F as default};
