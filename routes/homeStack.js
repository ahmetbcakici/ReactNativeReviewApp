import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();
export default Navigator = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: ''}} />

        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// -----------
