import {StyleSheet} from 'react-native';
import Imports from '../../Constants/Imports';

const Styles = StyleSheet.create({
  SafeAreaStatus: {
    flex: 0,
    backgroundColor: Imports.Colors.darkBlue,
  },
  SafeAreaContainer: {
    flex: 1,
    backgroundColor: Imports.Colors.white,
  },
  Container: {
    flex: 1,
    backgroundColor: Imports.Colors.white,
  },
  SignoutContainer: {
    marginTop: Imports.ScreenDimensions.height(3),
    alignSelf: 'flex-end',
    marginRight: Imports.ScreenDimensions.height(3),
  },
  SignoutText: {
    color: Imports.Colors.white,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: Imports.ScreenDimensions.totalSize(1.6),
  },
  Header: {
    width: '100%',
    height: '25%',
    backgroundColor: Imports.Colors.darkBlue,
  },
  HeaderContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Imports.ScreenDimensions.height(1),
  },
  HeaderContentText: {
    color: Imports.Colors.white,
    fontSize: Imports.ScreenDimensions.totalSize(2.7),
    fontWeight: 'bold',
  },
  Body: {
    flex: 1,
    marginTop: -Imports.ScreenDimensions.height(11),
  },
  CardContainer: {
    flex: 1,
    width: '90%',
    paddingVertical: Imports.ScreenDimensions.height(1.3),
    backgroundColor: Imports.Colors.white,
    marginVertical: Imports.ScreenDimensions.height(2),
    alignSelf: 'center',
    borderRadius: 6,
  },
  Card: {
    shadowColor: '#646464',
    shadowOpacity: 0.3,
    elevation: 1.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  Card2: {
    shadowColor: '#646464',
    shadowOpacity: 15,
    elevation: 5,
    backgroundColor: Imports.Colors.white,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  InnerCardContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: Imports.ScreenDimensions.height(2),
    flexWrap: 'wrap',
    // backgroundColor: 'red',
    marginLeft: Imports.ScreenDimensions.height(1.2),
  },
  InnerCardLeftStyle: {
    height: Imports.ScreenDimensions.height(14),
    marginVertical: Imports.ScreenDimensions.height(1),
    width: '45%',
    marginRight: Imports.ScreenDimensions.height(2),
    borderRadius: 5,
    backgroundColor: Imports.Colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InnerCardRightStyle: {
    height: Imports.ScreenDimensions.height(14),
    marginVertical: Imports.ScreenDimensions.height(1),
    width: '45%',
    borderRadius: 5,
    backgroundColor: Imports.Colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoContainer: {
    marginTop: Imports.ScreenDimensions.height(1.2),
  },
  CardLabelText: {
    color: Imports.Colors.white,
    fontSize: Imports.ScreenDimensions.totalSize(1.7),
    marginVertical: Imports.ScreenDimensions.height(1.2),
    alignSelf: 'center',
  },
  SignInButtonStyle: {
    borderRadius: 40,
    marginHorizontal: Imports.ScreenDimensions.height(4),
    height: Imports.ScreenDimensions.height(5.5),
    backgroundColor: 'rgba(4,34,70,1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Imports.ScreenDimensions.height(2),
  },
  SignInText: {
    fontSize: Imports.ScreenDimensions.totalSize(1.8),
    color: 'rgba(255,255,255,1)',
    fontWeight: '500',
    //fontFamily: 'Roboto-Regular',
  },

  Card3: {
    shadowColor: '#646464',
    shadowOpacity: 1,
    elevation: 1.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  Card4: {
    shadowColor: '#646464',
    shadowOpacity: 15,
    elevation: 5,
    backgroundColor: Imports.Colors.white,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

export default Styles;
