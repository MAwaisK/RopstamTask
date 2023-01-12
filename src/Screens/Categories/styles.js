import {StyleSheet} from 'react-native';
import Imports from '../../Constants/Imports';

const Styles = StyleSheet.create({
  SafeArea: {
    flex: 0,
    backgroundColor: Imports.Colors.darkBlue,
  },
  Container: {
    flex: 1,
    backgroundColor: Imports.Colors.white,
  },
  Header: {
    width: '100%',
    height: '25%',
    backgroundColor: Imports.Colors.darkBlue,
  },
  HeaderContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Imports.ScreenDimensions.height(2),
    marginTop: Imports.ScreenDimensions.height(3),
  },
  SignoutText: {
    fontSize: Imports.ScreenDimensions.totalSize(1.8),
    color: Imports.Colors.white,
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
  DropDownContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: Imports.ScreenDimensions.height(3.5),
  },
  HeaderTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Imports.ScreenDimensions.height(1.4),
  },
  HeaderTextStyle: {
    color: Imports.Colors.white,
    fontSize: Imports.ScreenDimensions.totalSize(2.7),
    fontWeight: 'bold',
  },
  ScrollViewContainer: {
    flex: 1,
    marginTop: -Imports.ScreenDimensions.height(4),
  },
  CardContainer: {
    flex: 1,
    width: '90%',
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
  CardRowContainer: {
    flexDirection: 'row',
    flex: 1,
    //marginTop: Imports.ScreenDimensions.height(1.5),
    marginHorizontal: Imports.ScreenDimensions.height(1.2),
    marginVertical: Imports.ScreenDimensions.height(1.2),
  },
  CardLabelView: {
    // width: '50%',
    flex: 0.4,
    justifyContent: 'center',
  },
  CardLabelBlackText: {
    fontSize: Imports.ScreenDimensions.totalSize(2.2),
    color: Imports.Colors.black,
    fontWeight: 'bold',
  },
  CardLogoView: {
    //width: '35%',
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  CardLabelGrayText: {
    fontSize: Imports.ScreenDimensions.totalSize(2),
    color: Imports.Colors.grey,
    fontWeight: 'bold',
    marginTop: Imports.ScreenDimensions.height(1),
  },
  DropDownButtonStyle: {
    width: '100%',
    height: Imports.ScreenDimensions.height(4),
    flexDirection: 'row-reverse',
    backgroundColor: '#FFF',
    borderRadius: 7,
  },
  DropDownButtonTextStyle: {
    textAlign: 'left',
    color: Imports.Colors.black,
    fontSize: Imports.ScreenDimensions.totalSize(1.4),
  },
  EditContainer: {
    color: Imports.Colors.white,
    height: '50%',
    justifyContent: 'flex-start',
  },
  DaleteContainer: {
    color: Imports.Colors.white,
    height: '50%',
    justifyContent: 'flex-end',
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
  },
});

export default Styles;
