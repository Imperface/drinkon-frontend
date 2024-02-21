import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';
import { paginationReducer } from './pagination/paginationReducer';
import { userReducer } from './users/slice';
import { favoritesReducer } from './favorites/favoritesReducer';

const userConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const favoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    user: persistReducer(userConfig, userReducer),
    drinkFavorite: persistReducer(favoritesConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
