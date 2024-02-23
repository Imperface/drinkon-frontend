import{s as r,h as n,u as p,r as d,m,j as t,n as x}from"./index-d70df441.js";import{d as o,S as c}from"./Section-51e883ab.js";import{P as h}from"./PageTitle-370a9485.js";import{a as v,D as g,P as l}from"./Placeholder-5ff9d65f.js";const f=r.div`
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
`,j=()=>{const a=n(v),s=p();d.useEffect(()=>{s(m())},[s]);const e=i=>{s(x(i))};return t.jsx(f,{children:t.jsxs(c,{className:"favorites",children:[t.jsx(h,{name:"Favorites"}),a.length>0?t.jsx(g,{data:a,onRemoveDrinks:e}):t.jsx(l,{})]})})};export{j as default};
