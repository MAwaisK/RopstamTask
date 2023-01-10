import {StyleSheet} from 'react-native';
import {totalSize, width, height} from 'react-native-dimension';
import colors from '../../Constants/Colors';

const DashboardStyles = StyleSheet.create({
  SafeArea: {
    flex: 0,
    backgroundColor: colors.darkBlue,
  },
  Container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  Header: {
    width: '100%',
    height: '25%',
    backgroundColor: colors.darkBlue,
  },
  HeaderContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: height(2),
    marginTop: height(3),
  },
  SignoutText: {
    fontSize: totalSize(1.8),
    color: colors.white,
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
  DropDownContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: height(3.5),
  },
  HeaderTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height(2.2),
  },
  HeaderTextStyle: {
    color: colors.white,
    fontSize: totalSize(2.7),
    fontWeight: 'bold',
  },
  ScrollViewContainer: {
    flex: 1,
    marginTop: -height(5),
  },
  CardContainer: {
    flex: 1,
    width: '90%',
    paddingVertical: height(1.3),
    backgroundColor: colors.white,
    marginVertical: height(2),
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
    backgroundColor: colors.white,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  CardRowContainer: {
    flexDirection: 'row',
    marginTop: height(1.5),
    marginHorizontal: height(1.2),
  },
  CardLabelView: {
    width: '50%',
    justifyContent: 'center',
  },
  CardLabelBlackText: {
    fontSize: totalSize(2.3),
    color: colors.black,
    fontWeight: 'bold',
  },
  CardLogoView: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  CardLabelGrayText: {
    fontSize: totalSize(2),
    color: colors.grey,
    fontWeight: 'bold',
    marginTop: height(1),
  },
  DropDownButtonStyle: {
    width: '100%',
    height: height(4),
    flexDirection: 'row-reverse',
    backgroundColor: '#FFF',
    borderRadius: 7,
  },
  DropDownButtonTextStyle: {
    textAlign: 'left',
    color: '#B1A9A9',
    fontSize: totalSize(1.4),
  },
  SignInButtonStyle: {
    borderRadius: 40,
    marginHorizontal: height(4),
    height: height(5.5),
    backgroundColor: 'rgba(4,34,70,1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height(2),
  },
  SignInText: {
    fontSize: totalSize(1.8),
    color: 'rgba(255,255,255,1)',
    fontWeight: '500',
    //fontFamily: 'Roboto-Regular',
  },
});

export default DashboardStyles;
