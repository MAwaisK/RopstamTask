import React from 'react';
import {StyleSheet} from 'react-native';
import {height, totalSize} from 'react-native-dimension';
import colors from '../../Constants/Colors';

const SignUpStyles = StyleSheet.create({
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
  HeaderText: {
    fontSize: totalSize(2.6),
    color: '#231F20',
    fontWeight: 'bold',
  },
  ImageView: {
    width: '100%',
    height: '38%',
  },
  BottomLabelText: {
    color: '#075595',
    fontSize: totalSize(1.4),
    fontWeight: '400',
    textDecorationLine: 'underline',
    marginLeft: 8,
  },
  TextInputView: {
    height: height(5),
    marginTop: height(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  TextInputStyle: {
    height: height(5),
    fontSize: totalSize(1.7),
    color: colors.black,
  },
  ForgetTextOuterView: {
    alignSelf: 'flex-end',
    marginTop: height(1.2),
    borderBottomColor: '#075595',
  },
  SignInButtonStyle: {
    borderRadius: 40,
    height: height(4.5),
    marginTop: height(5),
    backgroundColor: '#075595',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignInText: {
    fontSize: totalSize(1.6),
    color: '#FFFFFF',
    // fontFamily: 'Roboto-Regular',
  },
  Card: {
    shadowColor: '#bfafb2',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 1.5,
    backgroundColor: '#FFFEFE',
  },
  ErrorText: {
    fontSize: 10,
    color: 'red',
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
    //fontFamily: 'Roboto-Regular',
  },
  setRowWiseLastText: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height(2),
  },
  donthaveAccnt: {
    color: 'rgba(87, 94, 98, 1)',
    fontSize: totalSize(1.7),
  },
});
export default SignUpStyles;
