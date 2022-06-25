import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'src/contexts/ThemeContext';
import { Layout } from './Layout';

export const WithUnAuth = (Component: any) => {
  const AnotherComponent = () => {
    return (
      <Layout>
        <AuthContext.Consumer>
          {({ isAuth, setIsAuth }) => {
            if (isAuth) {
              return <Navigate to="/private" />;
            } else {
              return <Component onLogin={setIsAuth} />;
            }
          }}
        </AuthContext.Consumer>
      </Layout>
    );
  };

  return AnotherComponent;
};
