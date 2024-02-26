import{s as c,G as u,u as f,h as m,j as n,J as j,K as g,r as y,d as x}from"./index-c1feab16.js";import{p as w}from"./hero-desc@1x-c9bd24ae.js";const b=e=>e.pagination.currentPage,C=c.nav`
 padding: 14px 0;
`,P=c.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 27px;
`,d=c.li`
  display: flex;
  justify-content: center;
  align-items: center;
 

  .chevron {
    color: ${e=>e.theme.whiteThirtyColor};
    width: 2em;
    height: 2em;
  }
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  .ioEllipse {
    fill: none;
    width: 27px;
    height: 27px;
    :hover,
    :focus {
      fill: ${e=>e.theme.blueFiftyColor};
    }
  }
  .active {
    fill: ${e=>e.theme.blueFiftyColor};
  }
`,p=c.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: ${e=>e.theme.whiteColor};

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: ${e=>e.theme.whiteColor};
    pointer-events: none;
  }
`;function I(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"},child:[]}]})(e)}function $(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"},child:[]}]})(e)}const L=({itemsPerPage:e,totalItems:o})=>{const i=f(),t=m(b),l=Math.ceil(o.length/e),r=s=>{i(g(s))},h=()=>{const s=[];s.push(n.jsx(d,{children:n.jsx(p,{type:"button",onClick:()=>r(t-1),disabled:t===1,className:t===1?"disabled":"",children:n.jsx(I,{className:"chevron"})})},"prev"));for(let a=1;a<=l;a++)s.push(n.jsx(d,{children:n.jsxs(p,{type:"button",onClick:()=>r(a),children:[n.jsx(j,{className:t===a?"ioEllipse active":"ioEllipse"}),n.jsx("span",{children:a})]})},a));return s.push(n.jsx(d,{children:n.jsx(p,{type:"button",onClick:()=>r(t+1),disabled:t===l,className:t===l?"disabled":"",children:n.jsx($,{className:"chevron"})})},"next")),s};return n.jsx(C,{"aria-label":"Page navigation",className:"navigation",children:n.jsx(P,{children:h()})})};function B(e,o){const i=f(),t=m(b);y.useEffect(()=>{const a=(t-1)*o,v=t*o;e.slice(a,v).length===0&&t>1&&i(g(t-1))},[t,e,i,o]);const l=(t-1)*o,r=t*o,h=e.slice(l,r);return{currentPage:t,currentData:h,handlePageChange:a=>{i(g(a))}}}const k=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    margin-bottom: 32px;
    width: 198px;
    height: 247px;

    @media ${x.tablet} {
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

    @media ${x.desktop} {
      width: 236px;
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,N="/drinkon-frontend/assets/hero-mob@2x-1445b2a8.png",E="/drinkon-frontend/assets/hero-tab@2x-ab1de86f.png",D="/drinkon-frontend/assets/hero-desc@2x-bc84bac2.png",F=({text:e="You haven`t added any favorite cocktails yet"})=>n.jsxs(k,{children:[n.jsx("img",{src:w,srcSet:`${N} 420w, ${E} 768w, ${D} 1440w`,alt:"Placeholder"}),n.jsx("p",{children:e})]});export{F as P,L as a,B as u};
