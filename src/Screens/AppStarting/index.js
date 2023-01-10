import React, { useState, useMemo } from 'react';
import { ImageBackground, TouchableOpacity, Text, View, Image, StatusBar, SafeAreaView } from 'react-native';
import { height } from 'react-native-dimension';
import AppStartingStyle from './styles';
import { useNavigation } from '@react-navigation/native';

const AppStarting = () => {
  const navigation=useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/yyy.jpeg')}
      style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.7, }}>
            <Image
              resizeMode='contain'
              source={require('../../assets/Ropstam_Logo.png')}
              style={{ width: '100%', height: '20%', marginTop: height(5) }}
            />
          </View>
          <View style={{ flex: 0.3 }}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('SignUp')}
            style={[AppStartingStyle.SignInButtonStyle]}>
              <Text style={[AppStartingStyle.SignInText]}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>navigation.navigate('SignIn')}
            style={[AppStartingStyle.SignInButtonStyle, { backgroundColor: 'rgba(255,255,255,1)', }]}>
              <Text style={[AppStartingStyle.SignInText, {
                color: 'rgba(4,34,70,1)',
              }]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default AppStarting;
