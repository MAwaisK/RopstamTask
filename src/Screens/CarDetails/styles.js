import { StyleSheet } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import colors from '../../Constants/Colors'

const CarDetailsStyles = StyleSheet.create({
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
    ArrowBackContainer:{
        width: '90%', 
        alignSelf: 'center', 
        alignItems: 'flex-start', 
        marginTop: height(2)
    },
    HeaderContentContainer:{
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: height(0)
    },
    HeaderContentText:{
        color: colors.white, 
        fontSize: totalSize(2.7), 
        fontWeight: 'bold'
    },
    Body:{
        flex: 1,
        marginTop: -height(11),
    },
    CardContainer: {
        flex:1,
        width: '90%',
        paddingVertical:height(1.3),
        backgroundColor: colors.white,
        marginVertical: height(2),
        alignSelf: 'center',
        borderRadius: 10,

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
    LogoConatiner:{
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginVertical: height(2) 
    },
    ScrollViewContainer:{
        flex:1
    },
    ContentContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    RowContainer:{
        flexDirection: 'row', 
        marginHorizontal: height(2), 
        marginTop: height(3)
    },
    LabelView:{
        flex:1, 
        alignItems: 'center',
    },
    LabelText:{
        fontSize: totalSize(2), 
        color: colors.grey, 
        fontWeight: 'bold',
    },
    ValueView:{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'flex-start',
    },
    ValueText:{
        fontSize: totalSize(2), 
        color: colors.black, 
        fontWeight: 'bold'
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

export default CarDetailsStyles;