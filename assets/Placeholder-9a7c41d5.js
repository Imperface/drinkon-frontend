import{s as o,u as g,h as f,r as x,I as r,d as l,j as a}from"./index-b6a0a68b.js";import{p as u}from"./hero-desc@1x-c9bd24ae.js";const m=e=>e.pagination.currentPage,k=o.nav`
  padding: 14px 0;
`,D=o.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 27px;
`,P=o.li`
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
`,z=o.button`
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
`;function E(e,n){const i=g(),t=f(m);x.useEffect(()=>{const s=(t-1)*n,p=t*n;e.slice(s,p).length===0&&t>1&&i(r(t-1))},[t,e,i,n]);const c=(t-1)*n,h=t*n,d=e.slice(c,h);return{currentPage:t,currentData:d,handlePageChange:s=>{i(r(s))}}}const b=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    margin-bottom: 32px;
    width: 198px;
    height: 247px;

    @media ${l.tablet} {
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

    @media ${l.desktop} {
      width: 236px;
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,w="/drinkon-frontend/assets/hero-mob@2x-1445b2a8.png",y="/drinkon-frontend/assets/hero-tab@2x-ab1de86f.png",$="/drinkon-frontend/assets/hero-desc@2x-bc84bac2.png",M=({text:e="You haven`t added any favorite cocktails yet"})=>a.jsxs(b,{children:[a.jsx("img",{src:u,srcSet:`${w} 420w, ${y} 768w, ${$} 1440w`,alt:"Placeholder"}),a.jsx("p",{children:e})]});export{k as N,M as P,D as a,P as b,z as c,m as s,E as u};
