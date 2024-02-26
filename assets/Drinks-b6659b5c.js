import{s as C,d as c,m as w,g as A,r as g,u as F,o as q,h as P,j as i,p as B,q as M,t as H,L as G}from"./index-6e5269cd.js";import{S as Q}from"./Section-8e41c986.js";import{P as U}from"./PageTitle-f1361c49.js";import{S as V,s as X,a as Y}from"./react-select.esm-387da3be.js";import{a as J}from"./selectors-a7001df1.js";import{u as K,P as Z,a as ee}from"./Placeholder-c9e959e3.js";import"./floating-ui.dom-9d61e2db.js";import"./hero-desc@1x-c9bd24ae.js";const te=C.div`
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
`,ne=C.div`
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
`,re=C.input`
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
`,L={...z,control:e=>({...e,padding:"8px 16px 8px 24px",width:"335px",fontFamily:"Manrope, sans-serif",fontWeight:400,fontSize:"14px",lineHeight:"1.28571",color:"#f3f3f3",border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"200px",backgroundColor:"#161f37",[`@media ${c.tablet}`]:{width:"199px",fontSize:"17px",lineHeight:"1.56"}}),singleValue:e=>({...e,backgroundColor:"#161f37",color:"#f3f3f3"}),placeholder:e=>({...e,width:"107px",backgroundColor:"#161f37"}),menu:e=>({...e,border:"1px solid rgba(243, 243, 243, 0.2)",borderRadius:"20px",backgroundColor:"#161f37",width:"100%"}),indicatorSeparator:e=>({...e,display:"none"})};var O="Expected a function",R=0/0,ie="[object Symbol]",ae=/^\s+|\s+$/g,oe=/^[-+]0x[0-9a-f]+$/i,se=/^0b[01]+$/i,de=/^0o[0-7]+$/i,le=parseInt,ce=typeof w=="object"&&w&&w.Object===Object&&w,fe=typeof self=="object"&&self&&self.Object===Object&&self,pe=ce||fe||Function("return this")(),ge=Object.prototype,ue=ge.toString,me=Math.max,he=Math.min,N=function(){return pe.Date.now()};function xe(e,n,t){var d,a,m,f,l,p,o=0,x=!1,u=!1,b=!0;if(typeof e!="function")throw new TypeError(O);n=W(n)||0,v(t)&&(x=!!t.leading,u="maxWait"in t,m=u?me(W(t.maxWait)||0,n):m,b="trailing"in t?!!t.trailing:b);function y(s){var h=d,k=a;return d=a=void 0,o=s,f=e.apply(k,h),f}function I(s){return o=s,l=setTimeout(r,n),x?y(s):f}function $(s){var h=s-p,k=s-o,D=n-h;return u?he(D,m-k):D}function j(s){var h=s-p,k=s-o;return p===void 0||h>=n||h<0||u&&k>=m}function r(){var s=N();if(j(s))return S(s);l=setTimeout(r,$(s))}function S(s){return l=void 0,b&&d?y(s):(d=a=void 0,f)}function T(){l!==void 0&&clearTimeout(l),o=0,d=p=a=l=void 0}function _(){return l===void 0?f:S(N())}function E(){var s=N(),h=j(s);if(d=arguments,a=this,p=s,h){if(l===void 0)return I(p);if(u)return l=setTimeout(r,n),y(p)}return l===void 0&&(l=setTimeout(r,n)),f}return E.cancel=T,E.flush=_,E}function be(e,n,t){var d=!0,a=!0;if(typeof e!="function")throw new TypeError(O);return v(t)&&(d="leading"in t?!!t.leading:d,a="trailing"in t?!!t.trailing:a),xe(e,n,{leading:d,maxWait:n,trailing:a})}function v(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function ye(e){return!!e&&typeof e=="object"}function ke(e){return typeof e=="symbol"||ye(e)&&ue.call(e)==ie}function W(e){if(typeof e=="number")return e;if(ke(e))return R;if(v(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=v(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(ae,"");var t=se.test(e);return t||de.test(e)?le(e.slice(2),t?2:8):oe.test(e)?R:+e}var je=be;const Se=A(je),we=({categories:e,onSearch:n})=>{const[t,d]=g.useState(""),[a,m]=g.useState(""),[f,l]=g.useState(""),p=F();g.useEffect(()=>{p(q())},[p]);const o=P(X),x=()=>o.map(r=>({value:r._id,label:r.title})),u=r=>{d(r.target.value)},b=r=>{m((r==null?void 0:r.value)||"")},y=r=>{l((r==null?void 0:r.value)||"")},I=r=>{r.preventDefault(),n(`${t}`,`${a}`,f),d("")},$=g.useRef(Se((r,S,T)=>{n(r,S,T)},2e3));g.useEffect(()=>{$.current(t,a,f)},[t,a,f]);const j=e.map(r=>({value:r,label:r}));return i.jsx(ne,{children:i.jsxs("form",{className:"form",onSubmit:I,children:[i.jsxs("div",{className:"inputContainer",children:[i.jsx(re,{type:"text",value:t,onChange:u,placeholder:"Enter the text"}),i.jsx("button",{className:"buttonSvg",type:"submit",children:i.jsx(B,{color:"#f3f3f3",size:24})})]}),i.jsx(z,{placeholder:"All categories",isClearable:!0,cacheOptions:!0,onChange:b,options:j,styles:L}),i.jsx(z,{placeholder:"Ingredients",isClearable:!0,cacheOptions:!0,onChange:y,options:x(),styles:L})]})})},ze=()=>{const[e,n]=g.useState(9),t=P(J),d=P(Y),a=F();g.useEffect(()=>{a(M({}))},[a]),g.useEffect(()=>{a(H())},[a]);const m=(o,x,u)=>{a(M({query:o??"",category:x??"",ingredientId:u??"",page:"",limit:e}))};g.useEffect(()=>{const o=()=>{window.innerWidth<=1440?n(10):n(9)};return window.addEventListener("resize",o),o(),()=>{window.removeEventListener("resize",o)}},[]);const{currentPage:f,currentData:l,handlePageChange:p}=K(t.drinks||[],e);return i.jsx(te,{children:i.jsxs(Q,{className:"drinks",children:[i.jsx(U,{name:"Drinks"}),i.jsx(we,{ingredients:t,categories:d,onSearch:m}),t.drinks&&i.jsx("ul",{className:"list",children:l.map(o=>i.jsxs("li",{className:"item",children:[i.jsx("img",{className:"drinkImg",src:o.drinkThumb,alt:o.drink}),i.jsxs("div",{className:"drinkContainer",children:[i.jsx("h2",{className:"title",children:o.drink}),i.jsx(G,{to:`/drinks/${o._id}`,className:"button",children:"See more"})]})]},o._id))}),t.drinks&&t.drinks.length===0&&i.jsx(Z,{text:"Nothing was found for your request"}),t.drinks&&t.drinks.length>e&&i.jsx(ee,{currentPage:f,itemsPerPage:e,totalItems:t.drinks,onPageChange:p})]})})};export{ze as default};
