import {StyleSheet} from 'react-native';
import Imports from '../../Constants/Imports';

const Styles = StyleSheet.create({
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
    marginTop:Imports.ScreenDimensions.height(5),
  },
  FooterContentView: {
    flex: 0.3,
  },
  SignInButtonStyle: {
    borderRadius: 40,
    marginHorizontal: Imports.ScreenDimensions.height(4),
    height: Imports.ScreenDimensions.height(5.5),
    marginTop: Imports.ScreenDimensions.height(5),
    backgroundColor: Imports.Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignInText: {
    fontSize: Imports.ScreenDimensions.totalSize(1.8),
    color: 'rgba(4,34,70,1)',
    fontWeight: '500',
  },
  SignUpButtonStyle: {
    borderRadius: 40,
    marginHorizontal: Imports.ScreenDimensions.height(4),
    height: Imports.ScreenDimensions.height(5.5),
    marginTop: Imports.ScreenDimensions.height(5),
    backgroundColor: 'rgba(4,34,70,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignUpText: {
    fontSize: Imports.ScreenDimensions.totalSize(1.8),
    color: 'rgba(255,255,255,1)',
    fontWeight: '500',
  },
});

export default Styles;
