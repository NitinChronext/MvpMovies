import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Settings from '../../../components/Settings';

const TabStack = createStackNavigator();

const TabStackNavigator = () => {
  return (
    <TabStack.Navigator initialRouteName='Home'>
      <TabStack.Screen name='Movies' component={Settings} />
      <TabStack.Screen name='MovieDetails' component={Settings} />
    </TabStack.Navigator>
  );
};

export default TabStackNavigator;
