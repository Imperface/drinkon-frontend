import{s as r,h as n,u as p,r as m,m as d,j as t,n as x}from"./index-1c9be079.js";import{d as o,S as c}from"./Section-9d213090.js";import{P as h}from"./PageTitle-6c096d23.js";import{D as v,P as g}from"./Placeholder-66c2175e.js";import{a as l}from"./selectors-3bd61cc3.js";const f=r.div`
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
`,F=()=>{const a=n(l),s=p();m.useEffect(()=>{s(d())},[s]);const e=i=>{s(x(i))};return t.jsx(f,{children:t.jsxs(c,{className:"favorites",children:[t.jsx(h,{name:"Favorites"}),a.length>0?t.jsx(v,{data:a,onRemoveDrinks:e}):t.jsx(g,{})]})})};export{F as default};
