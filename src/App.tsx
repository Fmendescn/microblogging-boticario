import React from 'react';
import { StatusBar } from 'react-native';

import MainStack from './routes/MainStack';

const App = (): JSX.Element => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <MainStack />
  </>
);

export default App;
