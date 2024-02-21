export const selectFavoritesData = (state) => state.drinkFavorite.favorites;
export const selectFavoritesIsLoading = (state) =>
  state.drinkFavorite.isLoading;
export const selectFavoritesError = (state) => state.drinkFavorite.error;
