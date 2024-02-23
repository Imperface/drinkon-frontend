import{s,j as i}from"./index-6787b180.js";const n={mobile:"(max-width: 375.9px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1440px)"},a=s.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 375px;

  @media ${n.tablet} {
    padding: 0 32px;
    width: 768px;
  }

  @media ${n.desktop} {
    padding: 0 100px;
    width: 1440px;
  }
`,o=({children:t})=>i.jsx(a,{children:t}),x=s.section``,c=({title:t,titleClassName:d,children:e,className:p})=>i.jsx(x,{className:p,children:i.jsxs(o,{children:[t&&i.jsx("h2",{className:d,children:t}),e]})});export{c as S,n as d};
