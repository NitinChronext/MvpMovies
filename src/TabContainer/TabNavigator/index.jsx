import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Settings from '../../components/Settings';
import TabStackNavigator from './TabStackNavigator';
import TabIcon from '../TabIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Movie'
        component={TabStackNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return <TabIcon active={focused} name={'movie'}></TabIcon>;
          },
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return <TabIcon active={focused} name={'setting'}></TabIcon>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
