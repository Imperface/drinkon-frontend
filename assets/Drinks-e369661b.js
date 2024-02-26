import{s as C,d as c,m as v,g as A,r as g,u as F,o as B,h as P,j as s,p as H,q as M,t as q,L as G}from"./index-f534672c.js";import{S as Q}from"./Section-cc5e221d.js";import{P as U}from"./PageTitle-0acabb08.js";import{S as V,s as X,a as Y}from"./react-select.esm-05735734.js";import{a as J}from"./selectors-a7001df1.js";import{u as K,P as Z}from"./usePagination-b8d9a25a.js";import"./floating-ui.dom-9d61e2db.js";const ee=C.div`
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

      @media ${c.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 40px;
        margin-bottom: 80px;
      }

      @media ${c.desktop} {
        row-gap: 80px;
      }
    }
    & .item {
      width: 335px;

      @media ${c.tablet} {
        width: 342px;
      }
      @media ${c.desktop} {
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

      @media ${c.tablet} {
        width: 342px;
        height: 360px;
      }

      @media ${c.desktop} {
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

      @media ${c.tablet} {
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

      @media ${c.tablet} {
        font-size: 16px;
        line-height: 1.125;
      }
    }

    @media ${c.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${c.desktop} {
      padding-top: 160px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 80px;
      }
    }
  }
`,te=C.div`
  width: 335px;
  margin-bottom: 40px;

  @media ${c.tablet} {
  }

  @media ${c.desktop} {
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media ${c.tablet} {
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
`,ne=C.input`
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

  @media ${c.tablet} {
    width: 264px;
  }
`,z=C(V)`
  width: 335px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.56;
  color: #f3f3f3;
`,L={...z,control:e=>({...e,padding:"8px 16px 8px 24px",width:"335px",fontFamily:"Manrope, sans-serif",fontWeight:400,fontSize:"14px",lineHeight:"1.28571",color:"#f3f3f3",border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"200px",backgroundColor:"#161f37",[`@media ${c.tablet}`]:{width:"199px",fontSize:"17px",lineHeight:"1.56"}}),singleValue:e=>({...e,backgroundColor:"#161f37",color:"#f3f3f3"}),placeholder:e=>({...e,width:"107px",backgroundColor:"#161f37"}),menu:e=>({...e,border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"20px",backgroundColor:"#161f37",width:"100%"}),indicatorSeparator:e=>({...e,display:"none"})};var O="Expected a function",R=0/0,re="[object Symbol]",ie=/^\s+|\s+$/g,ae=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,se=/^0o[0-7]+$/i,de=parseInt,le=typeof v=="object"&&v&&v.Object===Object&&v,ce=typeof self=="object"&&self&&self.Object===Object&&self,fe=le||ce||Function("return this")(),pe=Object.prototype,ge=pe.toString,ue=Math.max,me=Math.min,N=function(){return fe.Date.now()};function he(e,n,t){var d,i,m,f,l,p,a=0,x=!1,u=!1,b=!0;if(typeof e!="function")throw new TypeError(O);n=W(n)||0,w(t)&&(x=!!t.leading,u="maxWait"in t,m=u?ue(W(t.maxWait)||0,n):m,b="trailing"in t?!!t.trailing:b);function y(o){var h=d,k=i;return d=i=void 0,a=o,f=e.apply(k,h),f}function I(o){return a=o,l=setTimeout(r,n),x?y(o):f}function $(o){var h=o-p,k=o-a,D=n-h;return u?me(D,m-k):D}function j(o){var h=o-p,k=o-a;return p===void 0||h>=n||h<0||u&&k>=m}function r(){var o=N();if(j(o))return S(o);l=setTimeout(r,$(o))}function S(o){return l=void 0,b&&d?y(o):(d=i=void 0,f)}function T(){l!==void 0&&clearTimeout(l),a=0,d=p=i=l=void 0}function _(){return l===void 0?f:S(N())}function E(){var o=N(),h=j(o);if(d=arguments,i=this,p=o,h){if(l===void 0)return I(p);if(u)return l=setTimeout(r,n),y(p)}return l===void 0&&(l=setTimeout(r,n)),f}return E.cancel=T,E.flush=_,E}function xe(e,n,t){var d=!0,i=!0;if(typeof e!="function")throw new TypeError(O);return w(t)&&(d="leading"in t?!!t.leading:d,i="trailing"in t?!!t.trailing:i),he(e,n,{leading:d,maxWait:n,trailing:i})}function w(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function be(e){return!!e&&typeof e=="object"}function ye(e){return typeof e=="symbol"||be(e)&&ge.call(e)==re}function W(e){if(typeof e=="number")return e;if(ye(e))return R;if(w(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=w(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(ie,"");var t=oe.test(e);return t||se.test(e)?de(e.slice(2),t?2:8):ae.test(e)?R:+e}var ke=xe;const je=A(ke),Se=({categories:e,onSearch:n})=>{const[t,d]=g.useState(""),[i,m]=g.useState(""),[f,l]=g.useState(""),p=F();g.useEffect(()=>{p(B())},[p]);const a=P(X),x=()=>a.map(r=>({value:r._id,label:r.title})),u=r=>{d(r.target.value)},b=r=>{m((r==null?void 0:r.value)||"")},y=r=>{l((r==null?void 0:r.value)||"")},I=r=>{r.preventDefault(),n(`${t}`,`${i}`,f),d("")},$=g.useRef(je((r,S,T)=>{n(r,S,T)},2e3));g.useEffect(()=>{$.current(t,i,f)},[t,i,f]);const j=e.map(r=>({value:r,label:r}));return s.jsx(te,{children:s.jsxs("form",{className:"form",onSubmit:I,children:[s.jsxs("div",{className:"inputContainer",children:[s.jsx(ne,{type:"text",value:t,onChange:u,placeholder:"Enter the text"}),s.jsx("button",{className:"buttonSvg",type:"submit",children:s.jsx(H,{color:"#f3f3f3",size:24})})]}),s.jsx(z,{placeholder:"All categories",isClearable:!0,cacheOptions:!0,onChange:b,options:j,styles:L}),s.jsx(z,{placeholder:"Ingredients",isClearable:!0,cacheOptions:!0,onChange:y,options:x(),styles:L})]})})},Ne=()=>{const[e,n]=g.useState(9),t=P(J),d=P(Y),i=F();g.useEffect(()=>{i(M({}))},[i]),g.useEffect(()=>{i(q())},[i]);const m=(a,x,u)=>{i(M({query:a??"",category:x??"",ingredientId:u??"",page:"",limit:e}))};g.useEffect(()=>{const a=()=>{window.innerWidth<=1440?n(10):n(9)};return window.addEventListener("resize",a),a(),()=>{window.removeEventListener("resize",a)}},[]);const{currentPage:f,currentData:l,handlePageChange:p}=K(t.drinks||[],e);return s.jsx(ee,{children:s.jsxs(Q,{className:"drinks",children:[s.jsx(U,{name:"Drinks"}),s.jsx(Se,{ingredients:t,categories:d,onSearch:m}),t.drinks&&s.jsx("ul",{className:"list",children:l.map(a=>s.jsxs("li",{className:"item",children:[s.jsx("img",{className:"drinkImg",src:a.drinkThumb,alt:a.drink}),s.jsxs("div",{className:"drinkContainer",children:[s.jsx("h2",{className:"title",children:a.drink}),s.jsx(G,{to:`/drinks/${a._id}`,className:"button",children:"See more"})]})]},a._id))}),t.drinks&&t.drinks.length>e&&s.jsx(Z,{currentPage:f,itemsPerPage:e,totalItems:t.drinks,onPageChange:p})]})})};export{Ne as default};
