import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStarting from '../../Screens/AppStarting/index';
import SignIn from '../../Screens/SignIn/index';
import SignUp from '../../Screens/SignUp/index';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AppStarting"
      headerMode="none"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppStarting" component={AppStarting} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
