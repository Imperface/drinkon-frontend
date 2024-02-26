import{s,u,h as f,j as n,J as d,r as w,d as p}from"./index-6e5269cd.js";import{p as y}from"./hero-desc@1x-c9bd24ae.js";const m=e=>e.pagination.currentPage,v=s.nav`
  padding: 14px 0;
`,C=s.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 27px;
`,g=s.li`
  display: flex;
  justify-content: center;
  align-items: center;

  .chevron {
    color: ${e=>e.theme.whiteThirtyColor};
    width: 2em;
    height: 2em;
  }
  .disabled {
    /* opacity: 0.5; */
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
`,x=s.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 55px;
  cursor: pointer;
  padding: 0;
  border: 1px solid ${e=>e.theme.whiteColor};
  background-color: inherit;
  transition: all 0.3s;
  border-radius: 50px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.whiteColor};

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.whiteColor};
    color: ${e=>e.theme.blackColor};
  }

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: ${e=>e.theme.whiteColor};
    pointer-events: none;
  }
`,z=({itemsPerPage:e,totalItems:o})=>{const a=u(),t=f(m),r=Math.ceil(o.length/e),l=i=>{a(d(i))},c=()=>{const i=[];return i.push(n.jsx(g,{children:n.jsx(x,{type:"button",onClick:()=>l(t-1),disabled:t===1,className:t===1?"disabled":"",children:"prev"})},"prev")),i.push(n.jsx(g,{children:n.jsx(x,{type:"button",onClick:()=>l(t+1),disabled:t===r,className:t===r?"disabled":"",children:"next"})},"next")),i};return n.jsx(v,{"aria-label":"Page navigation",className:"navigation",children:n.jsx(C,{children:c()})})};function E(e,o){const a=u(),t=f(m);w.useEffect(()=>{const h=(t-1)*o,b=t*o;e.slice(h,b).length===0&&t>1&&a(d(t-1))},[t,e,a,o]);const r=(t-1)*o,l=t*o,c=e.slice(r,l);return{currentPage:t,currentData:c,handlePageChange:h=>{a(d(h))}}}const j=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    margin-bottom: 32px;
    width: 198px;
    height: 247px;

    @media ${p.tablet} {
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

    @media ${p.desktop} {
      width: 236px;
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,$="/drinkon-frontend/assets/hero-mob@2x-1445b2a8.png",P="/drinkon-frontend/assets/hero-tab@2x-ab1de86f.png",k="/drinkon-frontend/assets/hero-desc@2x-bc84bac2.png",M=({text:e="You haven`t added any favorite cocktails yet"})=>n.jsxs(j,{children:[n.jsx("img",{src:y,srcSet:`${$} 420w, ${P} 768w, ${k} 1440w`,alt:"Placeholder"}),n.jsx("p",{children:e})]});export{M as P,z as a,E as u};
