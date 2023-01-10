import React from 'react';
import {StyleSheet} from 'react-native';
import {height, totalSize} from 'react-native-dimension';
import colors from '../../Constants/Colors';

const SignInStyles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  setAlignment: {
    width: '85%',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ScrollContentConatinewrStyle: {
    paddingBottom: 30,
  },
  ImageView: {
    width: '100%',
    height: '38%',
  },
  HeaderText: {
    fontSize: totalSize(2.6),
    color: '#231F20',
    fontWeight: 'bold',
  },
  TextInputView: {
    height: height(5),
    marginTop: height(2),
    borderBottomWidth: 1,
    borderColor: colors.grey,
  },
  TextInputStyle: {
    height: height(5),
    fontSize: totalSize(1.7),
    color: colors.black,
  },
  BottomText: {
    color: '#075595',
    fontSize: totalSize(1.4),
    fontWeight: '400',
    textDecorationLine: 'underline',
    marginLeft: 8,
  },
  SignInButtonStyle: {
    borderRadius: 40,
    marginHorizontal: height(4),
    height: height(5.5),
    marginTop: height(8),
    backgroundColor: 'rgba(4,34,70,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignInText: {
    fontSize: totalSize(1.8),
    color: 'rgba(255,255,255,1)',
    fontWeight: '500',
  },
  setRowWiseLastText: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height(3),
  },
  donthaveAccnt: {
    color: 'rgba(87, 94, 98, 1)',
    fontSize: totalSize(1.7),
  },
});
export default SignInStyles;
