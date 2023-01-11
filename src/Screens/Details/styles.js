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
    ArrowBackContainer:{
        width: '90%', 
        alignSelf: 'center', 
        alignItems: 'flex-start', 
        marginTop:Imports.ScreenDimensions.height(2)
    },
    HeaderContentContainer:{
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: Imports.ScreenDimensions.height(0)
    },
    HeaderContentText:{
        color: Imports.Colors.white, 
        fontSize: Imports.ScreenDimensions.totalSize(2.7), 
        fontWeight: 'bold'
    },
    Body:{
        flex: 1,
        marginTop: -Imports.ScreenDimensions.height(11),
    },
    CardContainer: {
        flex:1,
        width: '90%',
        paddingVertical:Imports.ScreenDimensions.height(1.3),
        backgroundColor: Imports.Colors.white,
        marginVertical:Imports.ScreenDimensions.height(2),
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
        backgroundColor: Imports.Colors.white,
        shadowOffset: {
            width: 2,
            height: 2,
        },
    },
    LogoConatiner:{
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginVertical: Imports.ScreenDimensions.height(2) 
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
        marginHorizontal: Imports.ScreenDimensions.height(2), 
        marginTop: Imports.ScreenDimensions.height(3)
    },
    LabelView:{
        flex:1, 
        alignItems: 'center',
    },
    LabelText:{
        fontSize: Imports.ScreenDimensions.totalSize(2), 
        color: Imports.Colors.grey, 
        fontWeight: 'bold',
    },
    ValueView:{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'flex-start',
    },
    ValueText:{
        fontSize: Imports.ScreenDimensions.totalSize(2), 
        color: Imports.Colors.black, 
        fontWeight: 'bold'
    },
    SignInButtonStyle: {
        borderRadius: 40,
        marginHorizontal: Imports.ScreenDimensions.height(4),
        height: Imports.ScreenDimensions.height(5.5),
        backgroundColor: 'rgba(4,34,70,1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:Imports.ScreenDimensions.height(2),
      },
      SignInText: {
        fontSize: Imports.ScreenDimensions.totalSize(1.8),
        color: 'rgba(255,255,255,1)',
        fontWeight: '500',
        //fontFamily: 'Roboto-Regular',
      },

});

export default Styles;