import{s as c,d,R as h,u as y,b as j,j as i,c as v,r as u,g as D,S as z}from"./index-f55c45ce.js";import{P as E}from"./PageTitle-e1e1f8fe.js";const S=c.div`
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
`,C=e=>e.pagination.currentPage;var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=h.createContext&&h.createContext(O),M=["attr","size","title"];function H(e,t){if(e==null)return{};var n=I(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function I(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(r){V(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function V(e,t,n){return t=B(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){var t=F(e,"string");return typeof t=="symbol"?t:String(t)}function F(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k(e){return e&&e.map((t,n)=>h.createElement(t.tag,g({key:n},t.attr),k(t.child)))}function x(e){return t=>h.createElement(L,f({attr:g({},e.attr)},t),k(e.child))}function L(e){var t=n=>{var{attr:r,size:o,title:a}=e,p=H(e,M),s=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),h.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,p,{className:l,style:g(g({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&h.createElement("title",null,a),e.children)};return w!==void 0?h.createElement(w.Consumer,null,n=>t(n)):t(O)}function N(e){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"},child:[]}]})(e)}function T(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"},child:[]}]})(e)}function _(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"},child:[]}]})(e)}const R=c.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`,m=c.li`
  display: flex;
  justify-content: center;
  align-items: center;
`,b=c.button`
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
`,Z=c(N)`
  fill: ${({active:e,theme:t})=>e==="true"?t.colors.blueFiftyColor:"none"};
  width: 27px;
  height: 27px;
  :hover,
  :focus {
    fill: ${e=>e.theme.colors.blueFiftyColor};
  }
`,W=c(T)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,G=c(_)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,K=({itemsPerPage:e,totalItems:t})=>{const n=y(),r=j(C),o=Math.ceil(t/e),a=s=>{n(v(s))},p=()=>{const s=[];s.push(i.jsx(m,{children:i.jsx(b,{onClick:()=>a(r-1),disabled:r===1,children:i.jsx(W,{})})},"prev"));for(let l=1;l<=o;l++)s.push(i.jsx(m,{children:i.jsxs(b,{onClick:()=>a(l),children:[i.jsx(Z,{active:r===l?"true":"false"}),i.jsx("span",{children:l})]})},l));return s.push(i.jsx(m,{children:i.jsx(b,{onClick:()=>a(r+1),disabled:r===o,children:i.jsx(G,{})})},"next")),s};return i.jsx("nav",{"aria-label":"Page navigation",children:i.jsx(R,{children:p()})})};function A(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"},child:[]}]})(e)}const q=c.li`
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
`,J=c.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media ${d.tablet} {
    gap: 24px;
  }
`,Q=c.h2`
  margin-bottom: 4px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: ${e=>e.theme.whiteColor};

  @media ${d.tablet} {
    font-size: 24px;
  }
`,U=c.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.whiteFiftyColor};

  @media ${d.tablet} {
    font-size: 16px;
    line-height: 1.125;
  }
`,X=c.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.whiteColor};

  @media ${d.tablet} {
    font-size: 16px;
    line-height: 1.375;
  }
`,Y=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ee=c.button`
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
`,te=c.button`
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
`,ne=({id:e,drinkThumb:t,drink:n,alcoholic:r,description:o,onRemoveDrinks:a})=>i.jsxs(q,{children:[i.jsx("img",{src:t,alt:n,loading:"lazy"}),i.jsxs(J,{children:[i.jsxs("div",{children:[i.jsx(Q,{children:n}),i.jsx(U,{children:r})]}),i.jsx(X,{children:o}),i.jsxs(Y,{children:[i.jsx(ee,{type:"button",children:"See more"}),i.jsx(te,{type:"button",onClick:()=>a(e),children:i.jsx(A,{})})]})]})]},e);function re(e,t){const n=y(),r=j(C);u.useEffect(()=>{const l=(r-1)*t,$=r*t;e.slice(l,$).length===0&&r>1&&n(v(r-1))},[r,e,n,t]);const o=(r-1)*t,a=r*t,p=e.slice(o,a);return{currentPage:r,currentData:p,handlePageChange:l=>{n(v(l))}}}const ie=c.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 54px;

  @media ${d.tablet} {
    margin-bottom: 94px;

    row-gap: 80px;
    column-gap: 20px;
  }
`;function oe({data:e,onRemoveDrinks:t}){const[n,r]=u.useState(9);u.useEffect(()=>{const s=()=>{window.innerWidth<=768?r(8):r(9)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[]);const{currentPage:o,currentData:a,handlePageChange:p}=re(e,n);return i.jsxs(i.Fragment,{children:[i.jsx(ie,{children:a.map(s=>i.jsx(ne,{...s,onRemoveDrinks:t},s._id))}),e.length>n&&i.jsx(K,{currentPage:o,itemsPerPage:n,totalItems:e.length,onPageChange:p})]})}const ae=e=>e.drinks.favorites,de=()=>{const e=j(ae),t=y();u.useEffect(()=>{t(D())},[t]);const n=r=>{t(deleteFavorite(r))};return i.jsx(S,{children:i.jsxs(z,{className:"favorites",children:[i.jsx(E,{name:"Favorites"}),i.jsx(oe,{data:e,onRemoveDrinks:n})]})})};export{de as default};
