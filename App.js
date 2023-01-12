import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/Redux/store';
import MainNavigation from './src/Navigation/index';
import colors from './src/Constants/Colors';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

  }, []);


  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={colors.black}
          />
          <NavigationContainer>
          <MainNavigation />
          </NavigationContainer>
        </PersistGate>
    </Provider>
  );
};


export default App;