import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as ROUTES from 'constants/routes.js';

import { AppWrapper } from 'src/App.styled';
import { Loader } from 'components/Loader/Loader';
import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Drinks = lazy(() => import('pages/Drinks/Drinks'));
const AddDrink = lazy(() => import('pages/AddDrink/AddDrink'));
const MyDrinks = lazy(() => import('pages/MyDrinks/MyDrinks'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const Welcome = lazy(() => import('pages/Welcome/Welcome'));

const appRoutes = [
  {
    path: ROUTES.WELCOME_ROUTE,
    element: <Welcome />,
  },
  {
    path: ROUTES.HOME_ROUTE,
    element: <Home />,
  },
  {
    path: ROUTES.DRINKS_ROUTE,
    element: <Drinks />,
  },
  {
    path: ROUTES.ADD_DRINK_ROUTE,
    element: <AddDrink />,
  },
  {
    path: ROUTES.MY_DRINKS_ROUTE,
    element: <MyDrinks />,
  },
  {
    path: ROUTES.FAVORITES_ROUTE,
    element: <Favorites />,
  },
];

export const App = () => {
  return (
    <AppWrapper>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </AppWrapper>
  );
};
