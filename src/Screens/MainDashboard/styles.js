import { StyleSheet } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import colors from '../../Constants/Colors'

const MainDashboardStyles = StyleSheet.create({
    SafeAreaStatus: {
        flex: 0,
        backgroundColor: colors.darkBlue,
    },
    SafeAreaContainer: {
        flex: 1, 
        backgroundColor: colors.white 
    },
    Container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    SignoutContainer:{
        marginTop: height(3), 
        alignItems: 'flex-end', 
        width: '95%',
    },
    SignoutText:{
        color: colors.white, 
        textDecorationLine: 'underline', 
        fontWeight: 'bold', 
        fontSize: totalSize(1.6)
    },
    Header: {
        width: '100%',
        height: '25%',
        backgroundColor: colors.darkBlue,
    },
    HeaderContent:{
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: height(2)
    },
    HeaderContentText:{
        color: colors.white, 
        fontSize: totalSize(2.7), 
        fontWeight: 'bold'
    },
    Body:{
        flex: 1,
        marginTop: -height(11)
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
    InnerCardContainer:{
        flexDirection: "row", 
        alignSelf: 'center', 
        marginTop: height(2)
    },
    InnerCardLeftStyle:{
        height: height(14), 
        marginVertical: height(1), 
        width: '45%', 
        marginRight: height(2), 
        borderRadius: 5, 
        backgroundColor: colors.lightBlue, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    InnerCardRightStyle:{
        height: height(14), 
        marginVertical: height(1), 
        width: '45%', 
        borderRadius: 5, 
        backgroundColor: colors.lightBlue, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    LogoContainer:{
        marginTop:height(1.2),
    },
    CardLabelText:{
        color: colors.white, 
        fontSize: totalSize(1.7), 
        marginVertical: height(1.2)
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

      Card3: {
        shadowColor: '#646464',
        shadowOpacity:1,
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
        backgroundColor: colors.white,
        shadowOffset: {
            width: 2,
            height: 2,
        },
    },
      

});

export default MainDashboardStyles;