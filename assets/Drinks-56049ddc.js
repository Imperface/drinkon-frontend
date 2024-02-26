import{s as C,d as p,m as w,g as q,u as W,r as x,o as _,h as N,j as r,p as z,q as V,L as A}from"./index-d9f7f162.js";import{S as H}from"./Section-678330b7.js";import{P as G}from"./PageTitle-5e6f8f77.js";import{S as Q,s as U,a as X}from"./react-select.esm-e967f998.js";import{a as Y}from"./selectors-a7001df1.js";import{u as J,P as K}from"./Placeholder-7321aa8a.js";import"./floating-ui.dom-9d61e2db.js";import"./hero-desc@1x-c9bd24ae.js";const Z=C.div`
  width: 100%;

  & .drinks {
    padding-top: 80px;
    padding-bottom: 80px;
    & h1 {
      margin-bottom: 40px;
    }
    & .list {
      display: flex;
      flex-direction: column;
      row-gap: 28px;
      margin-bottom: 40px;

      @media ${p.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 40px;
        margin-bottom: 80px;
      }

      @media ${p.desktop} {
        row-gap: 80px;
      }
    }
    & .item {
      width: 335px;

      @media ${p.tablet} {
        width: 342px;
      }
      @media ${p.desktop} {
        width: 400px;
      }
    }
    & .drinkImg {
      margin-bottom: 14px;
      width: 335px;
      height: 360px;
      border-radius: 8px;
      background-image: linear-gradient
        (180deg, rgba(10, 10, 17, 0.03) 2.37%, rgba(10, 10, 17, 0.96) 95.31%);

      @media ${p.tablet} {
        width: 342px;
        height: 360px;
      }

      @media ${p.desktop} {
        width: 400px;
        height: 400px;
      }
    }
    & .drinkContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & .title {
      font-family: 'Manrope', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.125;
      color: #f3f3f3;

      @media ${p.tablet} {
        font-size: 18px;
        line-height: 1.33333;
      }
    }
    & .button {
      align-self: flex-start;
      white-space: nowrap;
      padding: 0;
      background-color: transparent;
      border: none;

      font-family: 'Manrope', sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.28571;
      color: rgba(243, 243, 243, 0.5);
      cursor: pointer;

      @media ${p.tablet} {
        font-size: 16px;
        line-height: 1.125;
      }
    }

    @media ${p.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${p.desktop} {
      padding-top: 160px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 80px;
      }
    }
  }

  & .paginationBlock {
    display: flex;
    justify-content: center;
    column-gap: 40px;
  }
  & .button-pagination {
    padding: 20px 40px;
    border-radius: 30px;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    transition: all 0.3s;
    font-size: 18px;
    &:hover {
      background-color: white;
      color: #161f37;
      border: 1px solid transparent;
    }
    &:disabled {
      color: #161f37;
      border: 1px solid transparent;

      background-color: #ffffff50;
      cursor: not-allowed;
      &:hover {
        background-color: #ffffff50;
      }
    }
  }
`,ee=C.div`
  width: 335px;
  margin-bottom: 40px;

  @media ${p.tablet} {
  }

  @media ${p.desktop} {
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media ${p.tablet} {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }
  }

  .inputContainer {
    position: relative;
    display: inline-block;
  }

  .buttonSvg {
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    padding: 8px 12px;
    border: none;
    background-color: inherit;
    border-radius: 4px;
    cursor: pointer;
  }
`,te=C.input`
  padding: 18px 0 18px 24px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 200px;
  background-color: transparent;
  color: #f3f3f3;
  width: 335px;
  opacity: 0.8;
  ::placeholder {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.56;
    color: #f3f3f3;
  }

  @media ${p.tablet} {
    width: 264px;
  }
`,E=C(Q)`
  width: 335px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.56;
  color: #f3f3f3;
`,M={...E,control:e=>({...e,padding:"8px 16px 8px 24px",width:"335px",fontFamily:"Manrope, sans-serif",fontWeight:400,fontSize:"14px",lineHeight:"1.28571",color:"#f3f3f3",border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"200px",backgroundColor:"#161f37",[`@media ${p.tablet}`]:{width:"199px",fontSize:"17px",lineHeight:"1.56"}}),singleValue:e=>({...e,backgroundColor:"#161f37",color:"#f3f3f3"}),placeholder:e=>({...e,width:"107px",backgroundColor:"#161f37"}),menu:e=>({...e,border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"20px",backgroundColor:"#161f37",width:"100%"}),indicatorSeparator:e=>({...e,display:"none"})};var B="Expected a function",D=0/0,ne="[object Symbol]",ie=/^\s+|\s+$/g,re=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,ae=/^0o[0-7]+$/i,se=parseInt,le=typeof w=="object"&&w&&w.Object===Object&&w,de=typeof self=="object"&&self&&self.Object===Object&&self,ce=le||de||Function("return this")(),pe=Object.prototype,fe=pe.toString,ue=Math.max,ge=Math.min,$=function(){return ce.Date.now()};function me(e,t,n){var l,s,h,u,d,c,g=0,f=!1,b=!1,m=!0;if(typeof e!="function")throw new TypeError(B);t=L(t)||0,v(n)&&(f=!!n.leading,b="maxWait"in n,h=b?ue(L(n.maxWait)||0,t):h,m="trailing"in n?!!n.trailing:m);function o(a){var y=l,j=s;return l=s=void 0,g=a,u=e.apply(j,y),u}function S(a){return g=a,d=setTimeout(k,t),f?o(a):u}function I(a){var y=a-c,j=a-g,P=t-y;return b?ge(P,h-j):P}function i(a){var y=a-c,j=a-g;return c===void 0||y>=t||y<0||b&&j>=h}function k(){var a=$();if(i(a))return O(a);d=setTimeout(k,I(a))}function O(a){return d=void 0,m&&l?o(a):(l=s=void 0,u)}function F(){d!==void 0&&clearTimeout(d),g=0,l=c=s=d=void 0}function R(){return d===void 0?u:O($())}function T(){var a=$(),y=i(a);if(l=arguments,s=this,c=a,y){if(d===void 0)return S(c);if(b)return d=setTimeout(k,t),o(c)}return d===void 0&&(d=setTimeout(k,t)),u}return T.cancel=F,T.flush=R,T}function xe(e,t,n){var l=!0,s=!0;if(typeof e!="function")throw new TypeError(B);return v(n)&&(l="leading"in n?!!n.leading:l,s="trailing"in n?!!n.trailing:s),me(e,t,{leading:l,maxWait:t,trailing:s})}function v(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function he(e){return!!e&&typeof e=="object"}function be(e){return typeof e=="symbol"||he(e)&&fe.call(e)==ne}function L(e){if(typeof e=="number")return e;if(be(e))return D;if(v(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=v(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ie,"");var n=oe.test(e);return n||ae.test(e)?se(e.slice(2),n?2:8):re.test(e)?D:+e}var ke=xe;const ye=q(ke),je=({categories:e,setQueryValue:t,queryValue:n,setCategoryValue:l,setIngredientValue:s,setPage:h})=>{const u=W();x.useEffect(()=>{u(_())},[u]);const d=N(U),c=()=>d.map(o=>({value:o._id,label:o.title})),g=o=>{t(o.target.value),h(1)},f=o=>{if(o===null){l("");return}h(1),l(o)},b=o=>{if(o===null){s("");return}h(1),s(o)},m=e.map(o=>({value:o,label:o}));return r.jsx(ee,{children:r.jsxs("form",{className:"form",children:[r.jsx("div",{className:"inputContainer",children:r.jsx(te,{type:"text",value:n,onInput:ye(g,1e4),placeholder:"Enter the text"})}),r.jsx(E,{placeholder:"All categories",isClearable:!0,cacheOptions:!0,onChange:f,options:m,styles:M}),r.jsx(E,{placeholder:"Ingredients",isClearable:!0,cacheOptions:!0,onChange:b,options:c(),styles:M})]})})},Ee=()=>{const[e,t]=x.useState(9);x.useState(1);const[n,l]=x.useState(""),[s,h]=x.useState(""),[u,d]=x.useState(""),[c,g]=x.useState(1),f=N(Y),b=N(X),m=W();x.useEffect(()=>{m(z({}))},[m]),x.useEffect(()=>{m(V())},[m]),x.useEffect(()=>{const i={page:c,limit:e};n&&(i.query=n),s&&(i.category=s.value),u&&(i.ingredientId=u.value),m(z(i))},[n,s,u,c,e]),x.useEffect(()=>{const i=()=>{window.innerWidth<1440?t(10):t(9)};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]),J(f.drinks||[],e);const o=i=>{c!==1&&g(k=>k-1)},S=i=>{g(k=>k+1)},I=()=>{const i=Number(f.quantityTotal);return Math.ceil(i/e)};return r.jsx(Z,{children:r.jsxs(H,{className:"drinks",children:[r.jsx(G,{name:"Drinks"}),r.jsx(je,{setQueryValue:l,setCategoryValue:h,setIngredientValue:d,queryValue:n,categoryValue:s,ingredients:f,categories:b,setPage:g}),f.drinks&&r.jsx("ul",{className:"list",children:f.drinks.map(i=>r.jsxs("li",{className:"item",children:[r.jsx("img",{className:"drinkImg",src:i.drinkThumb,alt:i.drink}),r.jsxs("div",{className:"drinkContainer",children:[r.jsx("h2",{className:"title",children:i.drink}),r.jsx(A,{to:`/drinks/${i._id}`,className:"button",children:"See more"})]})]},i._id))}),f.drinks&&f.drinks.length===0&&r.jsx(K,{text:"Nothing was found for your request"}),f.drinks&&f.quantityTotal>e&&r.jsxs("div",{className:"paginationBlock",children:[r.jsx("button",{className:"button-pagination prev-button",onClick:o,disabled:c===1,children:"Prev"}),r.jsx("button",{className:"button-pagination next-button",onClick:S,disabled:I()===c,children:"Next"})]})]})})};export{Ee as default};
