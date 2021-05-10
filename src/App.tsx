import React from 'react';
import { StatusBar } from 'react-native';

import AppProvider from './hooks';
import MainStack from './routes/MainStack';

const App = (): JSX.Element => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <AppProvider>
      <MainStack />
    </AppProvider>
  </>
);

export default App;
