import React from 'react';
import {StyleSheet} from 'react-native';
import {height, totalSize} from 'react-native-dimension';
import colors from '../../Constants/Colors';

const AppStartingStyle = StyleSheet.create({
  ImageContainer: {
    flex: 1,
  },
  SafeAreaView: {
    flex: 1,
  },
  ContentContainer: {
    flex: 1,
  },
  HeaderContentView: {
    flex: 0.7,
  },
  LogoStyle: {
    width: '100%',
    height: '20%',
    marginTop: height(5),
  },
  FooterContentView: {
    flex: 0.3,
  },
  SignInButtonStyle: {
    borderRadius: 40,
    marginHorizontal: height(4),
    height: height(5.5),
    marginTop: height(5),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignInText: {
    fontSize: totalSize(1.8),
    color: 'rgba(4,34,70,1)',
    fontWeight: '500',
    //fontFamily: 'Roboto-Regular',
  },
  SignUpButtonStyle: {
    borderRadius: 40,
    marginHorizontal: height(4),
    height: height(5.5),
    marginTop: height(5),
    backgroundColor: 'rgba(4,34,70,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignUpText: {
    fontSize: totalSize(1.8),
    color: 'rgba(255,255,255,1)',
    fontWeight: '500',
    //fontFamily: 'Roboto-Regular',
  },
});
export default AppStartingStyle;
