import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import MainStack from './routes/MainStack';

import store from './store';

const App = (): JSX.Element => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Provider store={store}>
      <MainStack />
    </Provider>
  </>
);

export default App;
