import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as ROUTES from 'constants/routes.js';

import { AppWrapper } from 'src/App.styled';
import { Loader } from 'components/Loader/Loader';
import { Layout } from 'components/Layout/Layout';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/users/operations';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

const Welcome = lazy(() => import('pages/Welcome/Welcome'));
const Signin = lazy(() => import('pages/Signin/Signin'));
const Signup = lazy(() => import('pages/Signup/Signup'));

const Home = lazy(() => import('pages/Home/Home'));
const Drinks = lazy(() => import('pages/Drinks/Drinks'));
const AddDrink = lazy(() => import('pages/AddDrink/AddDrink'));
const MyDrinks = lazy(() => import('pages/MyDrinks/MyDrinks'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Drink = lazy(() => import('pages/Drink/Drink'));
const Privacy = lazy(() => import('pages/Privacy/Privacy'));
const TermsOfService = lazy(() =>
  import('pages/TermsOfService/TermsOfService')
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const appRoutes = [
    {
      path: ROUTES.WELCOME_ROUTE,
      element: (
        <RestrictedRoute>
          <Suspense fallback={<Loader />}>
            <Welcome />
          </Suspense>
        </RestrictedRoute>
      ),
    },
    {
      path: ROUTES.SIGNIN_ROUTE,
      element: (
        <RestrictedRoute>
          <Suspense fallback={<Loader />}>
            <Signin />
          </Suspense>
        </RestrictedRoute>
      ),
    },
    {
      path: ROUTES.SIGNUP_ROUTE,
      element: (
        <RestrictedRoute>
          <Suspense fallback={<Loader />}>
            <Signup />
          </Suspense>
        </RestrictedRoute>
      ),
    },
    {
      path: ROUTES.HOME_ROUTE,
      element: (
        <Layout>
          <PrivateRoute>
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          </PrivateRoute>
        </Layout>
      ),
    },
    {
      path: ROUTES.DRINKS_ROUTE,
      element: (
        <Layout>
          <PrivateRoute>
            <Suspense fallback={<Loader />}>
              <Drinks />
            </Suspense>
          </PrivateRoute>
        </Layout>
      ),
    },
    {
      path: `${ROUTES.GET_DRINK_BY_ID}:drinkId`,
      element: (
        <Layout>
          <PrivateRoute>
            <Suspense fallback={<Loader />}>
              <Drink />
            </Suspense>
          </PrivateRoute>
        </Layout>
      ),
    },
    {
      path: ROUTES.ADD_DRINK_ROUTE,
      element: (
        <Layout>
          <PrivateRoute>
            <Suspense fallback={<Loader />}>
              <AddDrink />
            </Suspense>
          </PrivateRoute>
        </Layout>
      ),
    },
    {
      path: ROUTES.MY_DRINKS_ROUTE,
      element: (
        <Layout>
          <PrivateRoute>
            <Suspense fallback={<Loader color="white" />}>
              <MyDrinks />
            </Suspense>
          </PrivateRoute>
        </Layout>
      ),
    },
    {
      path: ROUTES.FAVORITES_ROUTE,
      element: (
        <Layout>
          <PrivateRoute>
            <Suspense fallback={<Loader />}>
              <Favorites />
            </Suspense>
          </PrivateRoute>
        </Layout>
      ),
    },
    {
      path: ROUTES.PRIVACY_ROUTE,
      element: (
        <Layout>
          <PrivateRoute>
            <Suspense fallback={<Loader />}>
              <Privacy />
            </Suspense>
          </PrivateRoute>
        </Layout>
      ),
    },
    {
      path: ROUTES.SERVICE_ROUTE,
      element: (
        <Layout>
          <PrivateRoute>
            <Suspense fallback={<Loader />}>
              <TermsOfService />
            </Suspense>
          </PrivateRoute>
        </Layout>
      ),
    },
  ];

  return (
    <AppWrapper>
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        <Route
          path="*"
          element={
            <Layout>
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            </Layout>
          }
        />
      </Routes>
    </AppWrapper>
  );
};
