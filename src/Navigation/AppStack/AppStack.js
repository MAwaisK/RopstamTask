import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../../Screens/Categories';
import Details from '../../Screens/Details';
import Dashboard from '../../Screens/Dashboard';

const Stack = createNativeStackNavigator();

const AppStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      headerMode="none"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default AppStack;