import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabBar from './TabBar';
import AuthScreen from '../pages/AuthScreen';

import useAuth from '../hooks/useAuth';

const Stack = createStackNavigator();

const MainStack = (): JSX.Element => {
  const { userStored, isGettingUser } = useAuth();

  useEffect(() => {
    if (!isGettingUser) {
      SplashScreen.hide();
    }
  }, [isGettingUser]);

  if (isGettingUser) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {userStored ? (
          <Stack.Screen name="TabBar" component={TabBar} />
        ) : (
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
