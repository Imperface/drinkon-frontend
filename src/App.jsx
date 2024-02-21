import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as ROUTES from 'constants/routes.js';

import { AppWrapper } from 'src/App.styled';
import { Loader } from 'components/Loader/Loader';
import { Layout } from 'components/Layout/Layout';

import Welcome from 'pages/Welcome/Welcome';
import Signin from 'pages/Signin/Signin';

export const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path={ROUTES.WELCOME_ROUTE} element={<Welcome />} />
        <Route path={ROUTES.SIGNIN_ROUTE} element={<Signin />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </AppWrapper>
  );
};
