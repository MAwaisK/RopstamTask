import {StyleSheet} from 'react-native';
import Imports from '../../Constants/Imports';

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
    fontSize: Imports.ScreenDimensions.totalSize(2.6),
    color: '#231F20',
    fontWeight: 'bold',
  },
  ImageView: {
    width: '100%',
    height: '38%',
  },
  BottomLabelText: {
    color: '#075595',
    fontSize: Imports.ScreenDimensions.totalSize(1.4),
    fontWeight: '400',
    textDecorationLine: 'underline',
    marginLeft: 8,
  },
  TextInputView: {
    height: Imports.ScreenDimensions.height(5),
    marginTop: Imports.ScreenDimensions.height(2),
    borderBottomWidth: 1,
    borderBottomColor: Imports.Colors.grey,
  },
  TextInputStyle: {
    height: Imports.ScreenDimensions.height(5),
    fontSize: Imports.ScreenDimensions.totalSize(1.7),
    color: Imports.Colors.black,
  },
  ForgetTextOuterView: {
    alignSelf: 'flex-end',
    marginTop: Imports.ScreenDimensions.height(1.2),
    borderBottomColor: '#075595',
  },
  SignInButtonStyle: {
    borderRadius: 40,
    height: Imports.ScreenDimensions.height(4.5),
    marginTop: Imports.ScreenDimensions.height(5),
    backgroundColor: '#075595',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignInText: {
    fontSize: Imports.ScreenDimensions.totalSize(1.6),
    color: '#FFFFFF',
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
    marginHorizontal: Imports.ScreenDimensions.height(4),
    height: Imports.ScreenDimensions.height(5.5),
    marginTop: Imports.ScreenDimensions.height(8),
    backgroundColor: 'rgba(4,34,70,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignInText: {
    fontSize: Imports.ScreenDimensions.totalSize(1.8),
    color: 'rgba(255,255,255,1)',
    fontWeight: '500',
  },
  setRowWiseLastText: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: Imports.ScreenDimensions.height(2),
  },
  donthaveAccnt: {
    color: 'rgba(87, 94, 98, 1)',
    fontSize: Imports.ScreenDimensions.totalSize(1.7),
  },
});
export default SignUpStyles;
