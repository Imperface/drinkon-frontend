import{s as n,d as t,j as e,r as l,u as m,h as c,k as b,J as u,E as j,K as k,M as w,v as $}from"./index-ca9322a2.js";import{P as v}from"./PageTitle-b428e542.js";import{S as I}from"./Section-a01d3f9b.js";import{g as z,b as D,d as y}from"./selectors-a7001df1.js";const T=n.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  color: rgba(243, 243, 243, 0.5);

  margin-bottom: 42px;

  @media screen and ${t.tablet} {
    margin-bottom: 24px;
  }
`,F=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  margin-bottom: 80px;

  @media screen and ${t.tablet} {
    justify-content: flex-start;
    column-gap: 22px;
  }
  @media screen and ${t.desktop} {
    justify-content: space-between;
    margin-bottom: 100px;
  }
`,E=n.li`
  width: 157px;
  @media screen and ${t.tablet} {
    width: 220px;
  }
`,P=n.img`
  background-color: #161f37;
  border-radius: 8px;
  padding: 25px;
  width: 100%;
  margin-bottom: 8px;

  @media screen and ${t.tablet} {
    padding: 22px;
  }
`,R=n.div`
  display: flex;
  justify-content: space-between;
`,S=n.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  margin: 0;

  @media screen and ${t.tablet} {
    font-size: 18px;
    line-height: 1.33;
  }
`,L=n.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  @media screen and ${t.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`,B="/drinkon-frontend/assets/coctailPlaceholder-46d16baa.png",C=({data:o})=>e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"Ingredients"}),e.jsx(F,{children:o.map(i=>{var s;return e.jsxs(E,{children:[e.jsx(P,{src:((s=i.ingredientId)==null?void 0:s.ingredientThumb)||B,alt:i.title}),e.jsxs(R,{children:[e.jsx(S,{children:i.title}),e.jsx(L,{children:i.measure})]})]},i._id)})})]}),h=n.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: #161f37;

  padding: 14px 40px;
  margin-bottom: 80px;
  border-radius: 42px;
  text-align: center;
  border-color: transparent;
  background-color: #f3f3f3;

  &:focus,
  &:hover {
    background-color: #161f37;
    color: #f3f3f3;
    outline: 1px solid #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.1;

    padding: 18px 44px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 198px;
  }
`,_=({id:o,favoritesDrink:i})=>{const[s,r]=l.useState(null),a=m(),{_id:d}=c(b);l.useEffect(()=>{i&&i.length&&i.find(f=>{if(f._id===d)return r(!0)})},[i,d]);const p=()=>{a(u(o)),r(!0)},x=()=>{a(j(o)),r(!1)};return e.jsx(e.Fragment,{children:s?e.jsx(h,{type:"button",onClick:()=>x(),children:"Remove from favorite drinks"}):e.jsx(h,{type:"button",onClick:()=>p(),children:"Add to favorite drinks"})})},N=n.div`
  padding-bottom: 18px;
  @media ${t.tablet} {
    padding-bottom: 80px;
  }
  @media ${t.desktop} {
    padding-bottom: 100px;

    display: flex;
    justify-content: space-between;
  }
`,A=n.div`
  @media ${t.tablet} {
    max-width: 593px;
  }
`,M=n.p`
  font-size: 12px;
  line-height: 1.17;
  color: rgba(243, 243, 243, 0.5);

  margin-bottom: 20px;

  @media ${t.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`,H=n.p`
  font-size: 14px;
  line-height: 1.3;

  margin-bottom: 40px;

  @media ${t.tablet} {
    font-size: 16px;
    line-height: 1.35;
  }
`,J=n.img`
  width: 335px;
  height: 400px;

  border-radius: 8px;

  object-fit: cover;

  @media ${t.tablet} {
    width: 704px;
    height: 400px;
  }

  @media ${t.desktop} {
    width: 400px;
    height: 400px;
  }
`,K=({data:o})=>{const{_id:i,drink:s,alcoholic:r,glass:a,drinkThumb:d,shortDescription:p,favorites:x}=o;return e.jsxs(N,{children:[e.jsxs("div",{className:"info-inner",children:[e.jsx(v,{name:s}),e.jsxs(A,{children:[e.jsxs(M,{children:[a," / ",r]}),e.jsx(H,{children:p}),e.jsx(_,{id:i,favoritesDrink:x})]})]}),e.jsx(J,{src:d,alt:s,title:s})]})},O=n.div`
  @media screen and ${t.desktop} {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`,U=n.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;

  margin-bottom: 40px;

  @media screen and ${t.tablet} {
    line-height: 1.1;

    font-size: 40px;
  }

  @media screen and ${t.desktop} {
    margin-bottom: 60px;
  }
`,W=n.p`
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 40px;

  @media screen and ${t.tablet} {
    font-size: 16px;
    line-height: 1.4;
  }

  @media screen and ${t.desktop} {
    width: 549px;
  }
`,q=n.img`
  width: 335px;
  height: 430px;

  border-radius: 8px;
  object-fit: cover;

  @media screen and ${t.tablet} {
    width: 704px;
    height: 430px;
  }

  @media screen and ${t.desktop} {
    width: 631px;
    height: 480px;
  }
`,G="/drinkon-frontend/assets/drink-mob@1x-303d46ea.jpg",Q="/drinkon-frontend/assets/drink-tab@1x-cbbb464f.jpg",g="/drinkon-frontend/assets/drink-desc@1x-c40c8a65.jpg",V=({instructions:o})=>e.jsxs(e.Fragment,{children:[e.jsx(U,{children:"Recipe Preparation"}),e.jsxs(O,{children:[e.jsx(W,{children:o}),e.jsx(q,{srcSet:`${G} 375w, ${Q} 768w, ${g} 1024w`,sizes:"(max-width: 768px) 375px, (max-width: 1024px) 768px, 1024px",src:g,alt:"Drink"})]})]}),X=n.div`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  & h1 {
    margin-bottom: 8px;
  }

  @media ${t.tablet} {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media ${t.desktop} {
    padding-top: 158px;
    padding-bottom: 140px;
  }
`,ne=()=>{const o=m(),{drinkId:i}=k();l.useEffect(()=>{o(w(i))},[o,i]);const s=c(z),r=c(D),a=c(y);return e.jsx(X,{children:e.jsxs(I,{className:"drinkSection",children:[r&&e.jsx($,{}),a&&e.jsx("h1",{children:a}),Object.keys(s).length>0&&e.jsxs(e.Fragment,{children:[e.jsx(K,{data:s}),e.jsx(C,{data:s.ingredients}),e.jsx(V,{instructions:s.instructions})]})]})})};export{ne as default};