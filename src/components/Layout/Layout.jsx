import * as ROUTES from 'constants/routes.js';

import { Suspense, lazy } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { LayoutWrapper } from './LayoutWrapper';
import { Loader } from 'components/Loader/Loader';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home/Home'));
const Drinks = lazy(() => import('pages/Drinks/Drinks'));
const AddDrink = lazy(() => import('pages/AddDrink/AddDrink'));
const MyDrinks = lazy(() => import('pages/MyDrinks/MyDrinks'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const appRoutes = [
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

export const Layout = () => (
  <LayoutWrapper>
    <Header />
    <main>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </LayoutWrapper>
);
