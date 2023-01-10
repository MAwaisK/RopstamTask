import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../../Screens/Dashboard/index';
const Stack = createNativeStackNavigator();

const AppStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      headerMode="none"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppStack;