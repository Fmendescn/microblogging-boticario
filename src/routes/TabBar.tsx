import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../pages/Feed';
import Blog from '../pages/Blog';
import CreatePost from '../pages/CreatePost';

import CreatePostIcon from './components/CreatePostIcon';

import colors from '../shared/colors';
import { bookIcon, homeIcon } from '../shared/images';

const Tab = createBottomTabNavigator();

const TabBar = (): JSX.Element => {
  const tabIcon = (color: string, icon: ImageSourcePropType) => (
    <Image
      style={{ tintColor: color, height: 28, width: 28, resizeMode: 'contain' }}
      source={icon}
    />
  );

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.mainColor,
        style: { height: 55 },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return tabIcon(color, homeIcon);
          },
        }}
        name="Feed"
        component={Feed}
      />
      <Tab.Screen
        options={{
          title: undefined,
          tabBarIcon: () => <CreatePostIcon />,
        }}
        name="Postar"
        component={CreatePost}
      />
      <Tab.Screen
        options={{
          title: undefined,
          tabBarIcon: ({ color }) => {
            return tabIcon(color, bookIcon);
          },
        }}
        name="Blog"
        component={Blog}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
