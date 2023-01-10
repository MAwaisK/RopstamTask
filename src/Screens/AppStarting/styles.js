import React from 'react';
import { StyleSheet } from 'react-native';
import { height, totalSize } from 'react-native-dimension';
import colors from '../../Constants/Colors';

const AppStartingStyle = StyleSheet.create({
  LoginMainConatiner: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',


  },
  setAlignment: {
    width: '85%',
    //  height: height(50),
    //  marginTop:height(20),
    //  height:'50%',
    flex: 1,
    alignSelf: 'center',
    // flexGrow:1,
    justifyContent: 'center'
  },
  ScrollStyle: {
    // flex: 1,
    // backgroundColor:'red'
    // marginTop: height(3.5),
  },
  ScrollContentConatinewrStyle: {
    // flexGrow:1,
    paddingBottom: 30
    // justifyContent:'center'
  },
  LogoOuterView: {
    alignSelf: 'center',
    //  marginTop:height(20),
    marginBottom: height(10)

  },
  HiThereText: {
    fontSize: totalSize(2.5),
    //fontFamily: 'Roboto-Regular',
    color: '#231F20',
    marginTop: height(5)
  },
  TextInputOuterView: {
    height: height(7),
    borderWidth: 0.6,
    borderColor: 'rgba(7, 85, 149, 0.4)',
    borderRadius: 8,
    marginTop: height(1.8),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    // overflow: 'hidden',
  },
  TextInputStyle: {
    flexGrow: 1,
    padding: 0,
    marginLeft: 12,
    fontSize: totalSize(1.5),
    color: '#000000',
    borderWidth: 0

  },
  FocusedTextInputOuterView: {
    borderColor: '#075595',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: height(1.6),
    height: height(5),
    flexDirection: 'row'
  },
  setTextInputTextAbsolute: {
    position: 'absolute',
    top: -10,
    left: 20,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 5,
  },
  FocusedLabelStyle: {
    color: '#075595',
    fontSize: totalSize(1.6),
    fontWeight: '500',
  },
  FocsedTextInputStyle: {
    fontSize: totalSize(1.6),
    paddingLeft: 15,
    padding: 0,
  },
  ForgetText: {
    color: '#075595',
    fontSize: totalSize(1.4),
    fontWeight: '400',
  },
  ForgetTextOuterView: {
    alignSelf: 'flex-end',
    marginTop: height(2),
    // borderBottomWidth:0.9,
    borderBottomColor: '#075595',
  },
  SignInButtonStyle: {
    borderRadius: 40,
    marginHorizontal: height(4),
    height: height(5.5),
    marginTop: height(5),
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
});
export default AppStartingStyle;
