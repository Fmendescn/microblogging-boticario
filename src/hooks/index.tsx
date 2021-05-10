import React, { ReactNode } from 'react';

import { AuthProvider } from './context/Auth';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
