import React, {useState, useMemo} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {height} from 'react-native-dimension';
import AppStartingStyle from './styles';
import {useNavigation} from '@react-navigation/native';

const AppStarting = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/yyy.jpeg')}
      style={AppStartingStyle.ImageContainer}>
      <SafeAreaView style={AppStartingStyle.SafeAreaView}>
        <View style={AppStartingStyle.ContentContainer}>
          <View style={AppStartingStyle.HeaderContentView}>
            <Image
              resizeMode="contain"
              source={require('../../assets/Ropstam_Logo.png')}
              style={AppStartingStyle.LogoStyle}
            />
          </View>
          <View style={AppStartingStyle.FooterContentView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={[AppStartingStyle.SignUpButtonStyle]}>
              <Text style={[AppStartingStyle.SignUpText]}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
              style={[AppStartingStyle.SignInButtonStyle]}>
              <Text style={[AppStartingStyle.SignInText]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default AppStarting;
