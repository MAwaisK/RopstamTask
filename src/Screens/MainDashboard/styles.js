import { StyleSheet } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import colors from '../../Constants/Colors'

const MainDashboardStyles = StyleSheet.create({
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
    CardContainer: {
        flex:1,
        width: '90%',
        paddingVertical:height(1.3),
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

export default MainDashboardStyles;