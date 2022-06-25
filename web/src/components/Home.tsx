import React from 'react';
import { WithUnAuth } from './WithUnauth';

export const Home = WithUnAuth(({ onLogin }: any) => {
  return (
    <div className="home">
      <button type="button" onClick={onLogin}>
        Login
      </button>
    </div>
  );
});
