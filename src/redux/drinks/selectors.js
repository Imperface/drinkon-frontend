export const selectFavoritesDrinks = (state) => state.drinks.favorites;
export const selectOwnDrinks = (state) => state.drinks.own;
export const selectDrinkById = (state) => state.drinks.byId;
export const selectMainPageDrinks = (state) => state.drinks.mainPage;
export const selectPopularDrinks = (state) => state.drinks.popular;
export const selectSearchDrinks = (state) => state.drinks.search;
export const selectDrinksError = (state) => state.drinks.error;
export const selectDrinksIsLoading = (state) => state.drinks.isLoading;

//   favorites: [],
//   own: [],
//   byId: {},
//   mainPage: [],
//   popular: [],
//   search: {},
//   error: '',
//   isLoading: false,
