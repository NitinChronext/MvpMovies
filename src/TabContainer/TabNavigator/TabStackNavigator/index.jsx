import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Movies from '../../../components/Movies';
import MovieDetails from '../../../components/Movies/MovieDetails';

const TabStack = createStackNavigator();

const TabStackNavigator = () => {
  return (
    <TabStack.Navigator initialRouteName='Home'>
      <TabStack.Screen name='Movies' component={Movies} />
      <TabStack.Screen name='MovieDetails' component={MovieDetails} />
    </TabStack.Navigator>
  );
};

export default TabStackNavigator;
