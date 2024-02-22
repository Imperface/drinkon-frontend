import{R as p,s as c,u as j,d as P,j as i,i as b,r as y}from"./index-33d8d1ff.js";import{d}from"./Section-adb2d0b3.js";const C=e=>e.pagination.currentPage;var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v=p.createContext&&p.createContext(O),z=["attr","size","title"];function D(e,t){if(e==null)return{};var n=E(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function E(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(r){I(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function I(e,t,n){return t=M(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){var t=S(e,"string");return typeof t=="symbol"?t:String(t)}function S(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k(e){return e&&e.map((t,n)=>p.createElement(t.tag,g({key:n},t.attr),k(t.child)))}function u(e){return t=>p.createElement(H,f({attr:g({},e.attr)},t),k(e.child))}function H(e){var t=n=>{var{attr:r,size:o,title:a}=e,h=D(e,z),s=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),p.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,h,{className:l,style:g(g({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&p.createElement("title",null,a),e.children)};return v!==void 0?p.createElement(v.Consumer,null,n=>t(n)):t(O)}function V(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"},child:[]}]})(e)}function B(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"},child:[]}]})(e)}function L(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"},child:[]}]})(e)}const N=c.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`,x=c.li`
  display: flex;
  justify-content: center;
  align-items: center;
`,m=c.button`
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
`,T=c(V)`
  fill: ${({active:e,theme:t})=>e==="true"?t.colors.blueFiftyColor:"none"};
  width: 27px;
  height: 27px;
  :hover,
  :focus {
    fill: ${e=>e.theme.colors.blueFiftyColor};
  }
`,R=c(B)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,Z=c(L)`
  fill: ${e=>e.theme.colors.whiteThirtyColor};
`,_=({itemsPerPage:e,totalItems:t})=>{const n=j(),r=P(C),o=Math.ceil(t/e),a=s=>{n(b(s))},h=()=>{const s=[];s.push(i.jsx(x,{children:i.jsx(m,{onClick:()=>a(r-1),disabled:r===1,children:i.jsx(R,{})})},"prev"));for(let l=1;l<=o;l++)s.push(i.jsx(x,{children:i.jsxs(m,{onClick:()=>a(l),children:[i.jsx(T,{active:r===l?"true":"false"}),i.jsx("span",{children:l})]})},l));return s.push(i.jsx(x,{children:i.jsx(m,{onClick:()=>a(r+1),disabled:r===o,children:i.jsx(Z,{})})},"next")),s};return i.jsx("nav",{"aria-label":"Page navigation",children:i.jsx(N,{children:h()})})};function F(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"},child:[]}]})(e)}const W=c.li`
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
`,G=c.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media ${d.tablet} {
    gap: 24px;
  }
`,K=c.h2`
  margin-bottom: 4px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: ${e=>e.theme.whiteColor};

  @media ${d.tablet} {
    font-size: 24px;
  }
`,A=c.p`
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
`,q=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,J=c.button`
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
`,Q=c.button`
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
`,U=({_id:e,drinkThumb:t,drink:n,alcoholic:r,description:o,onRemoveDrinks:a})=>(console.log(e),i.jsxs(W,{children:[i.jsx("img",{src:t,alt:n,loading:"lazy"}),i.jsxs(G,{children:[i.jsxs("div",{children:[i.jsx(K,{children:n}),i.jsx(A,{children:r})]}),i.jsx(Y,{children:o}),i.jsxs(q,{children:[i.jsx(J,{type:"button",children:"See more"}),i.jsx(Q,{type:"button",onClick:()=>a(e),children:i.jsx(F,{color:"#f3f3f3",size:24})})]})]})]},e));function X(e,t){const n=j(),r=P(C);y.useEffect(()=>{const l=(r-1)*t,$=r*t;e.slice(l,$).length===0&&r>1&&n(b(r-1))},[r,e,n,t]);const o=(r-1)*t,a=r*t,h=e.slice(o,a);return{currentPage:r,currentData:h,handlePageChange:l=>{n(b(l))}}}const ee=c.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 54px;

  @media ${d.tablet} {
    margin-bottom: 94px;

    row-gap: 80px;
    column-gap: 20px;
  }
`;function ce({data:e,onRemoveDrinks:t}){const[n,r]=y.useState(9);y.useEffect(()=>{const s=()=>{window.innerWidth<=1440?r(8):r(9)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[]);const{currentPage:o,currentData:a,handlePageChange:h}=X(e,n);return i.jsxs(i.Fragment,{children:[i.jsx(ee,{children:a.map(s=>i.jsx(U,{...s,onRemoveDrinks:t},s._id))}),e.length>n&&i.jsx(_,{currentPage:o,itemsPerPage:n,totalItems:e.length,onPageChange:h})]})}const de=e=>e.drinks.favorites,he=e=>e.drinks.own,te=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    margin-bottom: 32px;
    width: 198px;
    height: 247px;

    @media ${d.tablet} {
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

    @media ${d.desktop} {
      width: 236px;
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,ne="/drinkon-frontend/assets/hero-desc@1x-3e74e15a.png",re="/drinkon-frontend/assets/hero-mob@2x-1445b2a8.png",ie="/drinkon-frontend/assets/hero-tab@2x-ab1de86f.png",oe="/drinkon-frontend/assets/hero-desc@2x-bc84bac2.png",pe=()=>i.jsxs(te,{children:[i.jsx("img",{src:ne,srcSet:`${re} 420w, ${ie} 768w, ${oe} 1440w`,alt:"Placeholder"}),i.jsxs("p",{children:["You haven","'","t added any favorite cocktails yet"]})]});export{ce as D,pe as P,de as a,he as s};
