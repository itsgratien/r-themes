import React from 'react';
import { AuthContext } from 'src/contexts/ThemeContext';

export const useAuth = () => {
  return React.useContext(AuthContext);
};
