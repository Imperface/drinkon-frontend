import{s as c,R as h,u as y,d as j,j as i,e as b,r as u,g as $,f as z}from"./index-099e343c.js";import{d,S as E}from"./Section-ac6aeacf.js";import{P as S}from"./PageTitle-ef03f79c.js";const M=c.div`
  width: 100%;

  & .favorites {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media ${d.tablet} {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media ${d.desktop} {
    padding-top: 158px;
    padding-bottom: 140px;
  }
`,C=e=>e.pagination.currentPage;var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=h.createContext&&h.createContext(O),H=["attr","size","title"];function V(e,t){if(e==null)return{};var n=I(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function I(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(r){B(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function B(e,t,n){return t=F(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){var t=L(e,"string");return typeof t=="symbol"?t:String(t)}function L(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k(e){return e&&e.map((t,n)=>h.createElement(t.tag,g({key:n},t.attr),k(t.child)))}function x(e){return t=>h.createElement(N,f({attr:g({},e.attr)},t),k(e.child))}function N(e){var t=n=>{var{attr:r,size:o,title:a}=e,p=V(e,H),s=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),h.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,p,{className:l,style:g(g({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&h.createElement("title",null,a),e.children)};return w!==void 0?h.createElement(w.Consumer,null,n=>t(n)):t(O)}function T(e){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"},child:[]}]})(e)}function R(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"},child:[]}]})(e)}function Z(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"},child:[]}]})(e)}const _=c.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`,m=c.li`
  display: flex;
  justify-content: center;
  align-items: center;
`,v=c.button`
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

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: ${e=>e.theme.colors.whiteColor};
    pointer-events: none;
  }
`,W=c(T)`
  fill: ${({active:e,theme:t})=>e==="true"?t.colors.blueFiftyColor:"none"};
  width: 27px;
  height: 27px;
  :hover,
  :focus {
    fill: ${e=>e.theme.colors.blueFiftyColor};
  }
`,G=c(R)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,K=c(Z)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,A=({itemsPerPage:e,totalItems:t})=>{const n=y(),r=j(C),o=Math.ceil(t/e),a=s=>{n(b(s))},p=()=>{const s=[];s.push(i.jsx(m,{children:i.jsx(v,{onClick:()=>a(r-1),disabled:r===1,children:i.jsx(G,{})})},"prev"));for(let l=1;l<=o;l++)s.push(i.jsx(m,{children:i.jsxs(v,{onClick:()=>a(l),children:[i.jsx(W,{active:r===l?"true":"false"}),i.jsx("span",{children:l})]})},l));return s.push(i.jsx(m,{children:i.jsx(v,{onClick:()=>a(r+1),disabled:r===o,children:i.jsx(K,{})})},"next")),s};return i.jsx("nav",{"aria-label":"Page navigation",children:i.jsx(_,{children:p()})})};function q(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"},child:[]}]})(e)}const J=c.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 335px;

  @media ${d.tablet} {
    width: 342px;
    gap: 24px;
  }

  @media ${d.desktop} {
    width: 400px;
  }
`,Q=c.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media ${d.tablet} {
    gap: 24px;
  }
`,U=c.h2`
  margin-bottom: 4px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: ${e=>e.theme.whiteColor};

  @media ${d.tablet} {
    font-size: 24px;
  }
`,X=c.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.whiteFiftyColor};

  @media ${d.tablet} {
    font-size: 16px;
    line-height: 1.125;
  }
`,Y=c.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.whiteColor};

  @media ${d.tablet} {
    font-size: 16px;
    line-height: 1.375;
  }
`,ee=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,te=c.button`
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  background: ${e=>e.theme.darkBlueColor};
  border-radius: 42px;
  padding: 14px 40px;
  height: 46px;

  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.whiteColor};

  @media ${d.tablet} {
    height: 54px;
    font-size: 16px;
    line-height: 1.125;
  }
`,ne=c.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;

  border-radius: 40px;
  padding: 11px;
  width: 46px;
  height: 46px;
  background: ${e=>e.theme.darkBlueColor};
  fill: ${e=>e.theme.whiteColor};

  @media ${d.tablet} {
    padding: 15px;
    width: 56px;
    height: 54px;
  }
`,re=({_id:e,drinkThumb:t,drink:n,alcoholic:r,description:o,onRemoveDrinks:a})=>(console.log(e),i.jsxs(J,{children:[i.jsx("img",{src:t,alt:n,loading:"lazy"}),i.jsxs(Q,{children:[i.jsxs("div",{children:[i.jsx(U,{children:n}),i.jsx(X,{children:r})]}),i.jsx(Y,{children:o}),i.jsxs(ee,{children:[i.jsx(te,{type:"button",children:"See more"}),i.jsx(ne,{type:"button",onClick:()=>a(e),children:i.jsx(q,{})})]})]})]},e));function ie(e,t){const n=y(),r=j(C);u.useEffect(()=>{const l=(r-1)*t,D=r*t;e.slice(l,D).length===0&&r>1&&n(b(r-1))},[r,e,n,t]);const o=(r-1)*t,a=r*t,p=e.slice(o,a);return{currentPage:r,currentData:p,handlePageChange:l=>{n(b(l))}}}const oe=c.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 54px;

  @media ${d.tablet} {
    margin-bottom: 94px;

    row-gap: 80px;
    column-gap: 20px;
  }
`;function ae({data:e,onRemoveDrinks:t}){const[n,r]=u.useState(9);u.useEffect(()=>{const s=()=>{window.innerWidth<=768?r(8):r(9)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[]);const{currentPage:o,currentData:a,handlePageChange:p}=ie(e,n);return i.jsxs(i.Fragment,{children:[i.jsx(oe,{children:a.map(s=>i.jsx(re,{...s,onRemoveDrinks:t},s._id))}),e.length>n&&i.jsx(A,{currentPage:o,itemsPerPage:n,totalItems:e.length,onPageChange:p})]})}const se=e=>e.drinks.favorites,he=()=>{const e=j(se),t=y();u.useEffect(()=>{t($())},[t]);const n=r=>{console.log(r),t(z(r))};return i.jsx(M,{children:i.jsxs(E,{className:"favorites",children:[i.jsx(S,{name:"Favorites"}),i.jsx(ae,{data:e,onRemoveDrinks:n})]})})};export{he as default};
