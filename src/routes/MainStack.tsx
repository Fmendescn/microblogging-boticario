import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabBar from './TabBar';
import Login from '../pages/Login';

import { useAuth } from '../hooks/context/Auth';

const Stack = createStackNavigator();

const MainStack = (): JSX.Element => {
  const { userStored, isGettingUser } = useAuth();

  if (isGettingUser) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {userStored ? (
          <Stack.Screen name="TabBar" component={TabBar} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
