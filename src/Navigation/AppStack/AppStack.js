import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../../Screens/Dashboard/index';
import CarDetails from '../../Screens/CarDetails';
import MainDashboard from '../../Screens/MainDashboard';
const Stack = createNativeStackNavigator();

const AppStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="MainDashboard"
      headerMode="none"
      screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainDashboard" component={MainDashboard} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
    </Stack.Navigator>
  );
};

export default AppStack;