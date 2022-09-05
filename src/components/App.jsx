import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AppView from 'views/AppView';
import HomeView from 'views/HomeView';
import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';
import ContactsView from 'views/ContactsView';

import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRouter } from 'components/PublicRouter/PublicRouter';

import { useCurrentUserQuery } from 'redux/authApi';
import { selectToken } from 'redux/authSlice';

import { CssBaseline } from '@mui/material';

export const App = () => {
  const token = useSelector(selectToken);
  const { isLoading } = useCurrentUserQuery(undefined, { skip: !token });


  return (
    !isLoading && (
      <>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<AppView />}>
            <Route
              index
              element={
                <PublicRouter>
                  <HomeView />
                </PublicRouter>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRouter restricted>
                  <LoginView />
                </PublicRouter>
              }
            />
            <Route
              path="register"
              element={
                <PublicRouter restricted>
                  <RegisterView />
                </PublicRouter>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    )
  );
};
