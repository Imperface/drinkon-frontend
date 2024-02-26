import{s as h,d as i,u as l,h as n,k as p,r as x,l as c,j as t,L as m,N as s}from"./index-57700730.js";import{s as g}from"./selectors-a7001df1.js";import{v as a}from"./v4-4a60fe23.js";import{p as f}from"./hero-desc@1x-c9bd24ae.js";const w=h.div`
  width: 100%;
  height: 100%;
  font-family: 'Manrope', sans-serif;

  & .heroContainer {
    margin: 80px auto 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 335px;
    height: 100%;
    justify-content: center;
  }

  & .title {
    color: ${e=>e.theme.whiteColor};
    max-width: 335px;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.19;
  }

  & .titleAbout {
    color: ${e=>e.theme.whiteColor};
    padding: 16px 0 32px;
    font-size: 14px;
    font-weight: 400;
    width: 335px;
    line-height: 1.43;
  }

  & .addDrink {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 42px;
    width: 151px;
    height: 46px;
    font-weight: 600;
    font-size: 14px;
    border: 1px solid transparent;
    background-color: ${e=>e.theme.whiteColor};
    color: ${e=>e.theme.darkBlueColor};

    &:hover {
      transition: all 0.3s;
      background-color: transparent;
      color: ${e=>e.theme.whiteColor};
      border: 1px solid ${e=>e.theme.whiteTwentyColor};
    }
  }

  & .heroImg {
    padding-top: 47px;
    display: flex;
    justify-content: center;
  }

  & .img {
    width: 252px;
    height: 313px;
  }

  & .otherDrinks {
    display: flex;
    margin: 0 auto 80px;
    align-items: center;
    justify-content: center;
    border-radius: 42px;
    width: 163px;
    height: 46px;
    font-weight: 600;
    font-size: 14px;
    border: 1px solid transparent;
    background-color: ${e=>e.theme.whiteColor};
    color: ${e=>e.theme.darkBlueColor};

    &:hover {
      transition: all 0.3s;
      background-color: transparent;
      color: ${e=>e.theme.whiteColor};
      border: 1px solid ${e=>e.theme.whiteTwentyColor};
    }
  }

  @media ${i.tablet} {
    & .heroContainer {
      margin: 120px auto 0;
      width: 641px;
    }

    & .title {
      max-width: 641px;
      font-size: 56px;
      line-height: 1.071;
    }

    & .titleAbout {
      padding: 28px 0 48px;
      font-size: 18px;
      width: 619px;
      line-height: 1.33;
    }

    & .addDrink {
      width: 169px;
      height: 54px;
      font-size: 16px;
    }

    & .heroImg {
      padding-top: 54px;
    }

    & .img {
      width: 359px;
      height: 445px;
    }

    & .otherDrinks {
      margin: 0 auto 140px;
      width: 183px;
      height: 54px;
      font-size: 16px;
    }
  }

  @media ${i.desktop} {
    & .heroContainer {
      margin: 128px auto 0;
      gap: 130px;
      width: 1204px;
      height: 100%;
    }

    & .hero {
      width: 715px;
      padding: 57.5px 0;
      margin-block-end: 0;
    }

    & .title {
      max-width: 715px;
      font-size: 64px;
      line-height: 1.063;
    }

    & .titleAbout {
      padding: 28px 0 40px;
      width: 500px;
    }

    & .addDrink {
      width: 160px;
      height: 54px;
    }

    & .heroImg {
      padding-top: 0;
    }
  }
`,k=h.div`
  display: flex;
  justify-content: center;
  margin: 112px auto 60px;
  font-family: 'Manrope', sans-serif;

  & .categoryList {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;
  }

  & .categoryTitleItem {
    font-size: 28px;
    font-weight: 600;
    line-height: 1.14;
    color: ${e=>e.theme.whiteColor};
    font-family: 'Manrope', sans-serif;
    padding-bottom: 24px;
  }

  & .drinkList {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }

  & .categoryItem {
    width: 335px;
  }

  & .drinkItem:nth-child(2),
  & .drinkItem:nth-child(3) {
    display: none;
  }

  & .drinkItem:hover {
    transform: scale(1.05);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & .imgItem {
    border-radius: 8px;
    width: 335px;
    height: 360px;
  }

  & .drinkAbout {
    padding-top: 14px;
    display: flex;
    justify-content: space-between;
  }
  & .drinkTitleItem {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.13;
    color: ${e=>e.theme.whiteColor};
  }
  & .linkId {
    font-size: 14px;
    font-weight: 500;
    color: ${e=>e.theme.whiteFiftyColor};
    cursor: pointer;

    &:hover {
      color: ${e=>e.theme.whiteColor};
    }
  }

  @media ${i.tablet} {
    margin: 123px auto 80px;

    & .categoryList {
      gap: 80px;
    }

    & .categoryTitleItem {
      font-size: 40px;
      line-height: 1.1;
      padding-bottom: 40px;
    }

    & .categoryItem {
      width: 704px;
    }

    & .drinkItem:nth-child(2) {
      display: block;
    }

    & .imgItem {
      width: 342px;
      height: 360px;
    }

    & .drinkTitleItem {
      font-size: 18px;
      line-height: 1.33;
    }

    & .linkId {
      font-size: 16px;
    }
  }
  @media ${i.desktop} {
    margin: 218px auto 80px;

    & .drinkItem:nth-child(3) {
      display: block;
    }

    & .categoryList {
      justify-content: center;
    }

    & .categoryItem {
      width: 1240px;
      height: 522px;
    }

    & .imgItem {
      width: 400px;
      height: 400px;
    }
  }
`,u=()=>{const e=l();n(p);const d=n(g);return x.useEffect(()=>{e(c())},[e]),t.jsx(k,{children:t.jsx("ul",{className:"categoryList",children:d.map(o=>t.jsxs("li",{className:"categoryItem",children:[t.jsx("h2",{className:"categoryTitleItem",children:o._id}),t.jsx("ul",{className:"drinkList",children:o.drinks.map(r=>t.jsxs("li",{className:"drinkItem",children:[t.jsx("img",{src:r.drinkThumb,alt:"hero",className:"imgItem",width:"100%",height:"100%"}),t.jsxs("div",{className:"drinkAbout",children:[t.jsx("h3",{className:"drinkTitleItem",children:r.drink}),t.jsx(m,{className:"linkId",to:`/drinks/${r._id}`,children:"See more"})]})]},a()))})]},a()))})})},C=()=>t.jsxs(w,{children:[t.jsxs("div",{className:"heroContainer",children:[t.jsxs("div",{className:"hero",children:[t.jsx("h1",{className:"title",children:"Craft Your Perfect Drink with Drink Master"}),t.jsx("p",{className:"titleAbout",children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."}),t.jsx(s,{className:"addDrink",to:"/add-drink",children:"Add drink"})]}),t.jsx("div",{className:"heroImg",children:t.jsx("img",{className:"img",src:f,alt:"hero",width:"100%",height:"100%"})})]}),t.jsx(u,{}),t.jsx(s,{className:"otherDrinks",to:"/drinks",children:"Other drinks"})]});export{C as default};
