import{s as n,d as o,j as t}from"./index-dfe5369e.js";import{p as a}from"./hero-desc@1x-c9bd24ae.js";const i=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    margin-bottom: 32px;
    width: 198px;
    height: 247px;

    @media ${o.tablet} {
      width: 261px;
      height: 326px;
    }
  }
  & p {
    width: 205px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    text-align: center;
    color: ${e=>e.theme.whiteColor};

    @media ${o.desktop} {
      width: 236px;
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,s="/drinkon-frontend/assets/hero-mob@2x-1445b2a8.png",r="/drinkon-frontend/assets/hero-tab@2x-ab1de86f.png",d="/drinkon-frontend/assets/hero-desc@2x-bc84bac2.png",h=({text:e="You haven`t added any favorite cocktails yet"})=>t.jsxs(i,{children:[t.jsx("img",{src:a,srcSet:`${s} 420w, ${r} 768w, ${d} 1440w`,alt:"Placeholder"}),t.jsx("p",{children:e})]});export{h as P};
