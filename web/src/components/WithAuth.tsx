import React from 'react';
import { AuthContext } from 'src/contexts/ThemeContext';
import { Navigate } from 'react-router-dom';
import { Layout } from './Layout';

export const WithAuth = (Component: any) => {
  const AnotherComponent = () => {
    return (
      <Layout>
        <AuthContext.Consumer>
          {({ isAuth, setIsAuth }) => {
            if (!isAuth) {
              return <Navigate to="/" />;
            }
            return <Component onLogout={setIsAuth} />;
          }}
        </AuthContext.Consumer>
      </Layout>
    );
  };

  return AnotherComponent;
};
