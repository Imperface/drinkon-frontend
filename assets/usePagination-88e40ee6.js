import{s as c,G as g,u as x,h as f,j as n,I as b,J as u,r as j}from"./index-9731e5d8.js";const m=t=>t.pagination.currentPage,y=c.nav`
 padding: 14px 0;
`,C=c.ul`
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
    color: ${t=>t.theme.whiteThirtyColor};
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
      fill: ${t=>t.theme.blueFiftyColor};
    }
  }
  .active {
    fill: ${t=>t.theme.blueFiftyColor};
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
  color: ${t=>t.theme.whiteColor};

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: ${t=>t.theme.whiteColor};
    pointer-events: none;
  }
`;function N(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"},child:[]}]})(t)}function P(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"},child:[]}]})(t)}const E=({itemsPerPage:t,totalItems:s})=>{const i=x(),e=f(m),l=Math.ceil(s.length/t),r=o=>{i(u(o))},h=()=>{const o=[];o.push(n.jsx(d,{children:n.jsx(p,{type:"button",onClick:()=>r(e-1),disabled:e===1,className:e===1?"disabled":"",children:n.jsx(N,{className:"chevron"})})},"prev"));for(let a=1;a<=l;a++)o.push(n.jsx(d,{children:n.jsxs(p,{type:"button",onClick:()=>r(a),children:[n.jsx(b,{className:e===a?"ioEllipse active":"ioEllipse"}),n.jsx("span",{children:a})]})},a));return o.push(n.jsx(d,{children:n.jsx(p,{type:"button",onClick:()=>r(e+1),disabled:e===l,className:e===l?"disabled":"",children:n.jsx(P,{className:"chevron"})})},"next")),o};return n.jsx(y,{"aria-label":"Page navigation",className:"navigation",children:n.jsx(C,{children:h()})})};function $(t,s){const i=x(),e=f(m);j.useEffect(()=>{const a=(e-1)*s,v=e*s;t.slice(a,v).length===0&&e>1&&i(u(e-1))},[e,t,i,s]);const l=(e-1)*s,r=e*s,h=t.slice(l,r);return{currentPage:e,currentData:h,handlePageChange:a=>{i(u(a))}}}export{E as P,$ as u};
