import React from 'react';
import { WithAuth } from './WithAuth';

interface Props {
  onLogout: () => void;
}
export const Private = WithAuth(({ onLogout }: Props) => {
  return (
    <div className="home private">
      <span>You are logged in</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
});
