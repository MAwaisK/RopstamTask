import React from 'react';
import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import colors from './Colors';
const NewRequestRevisionSheetStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 16
    },
    SetRowsiseProfileTextandCloseIcon: {
        flexDirection: 'row',
        marginBottom: height(2.5),
        justifyContent: 'space-between',
        marginTop:height(2)
    },
    ProfileText: {
        color: "#0F0F0F",
        fontSize: totalSize(2.0),
        fontFamily: 'Roboto-Medium',
    },
    CardWithPenOuterView: {
        alignSelf: 'center',
    },
    SubTitleContainer: {
        marginTop: height(1),
        marginBottom: height(3)
    },
    PleaseFillText: {
        color: "#333333",
        fontSize: totalSize(1.6),
        fontFamily: 'Roboto-Regular',
        textAlign: 'auto',
    },
    TextInputOuterView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height(1),
        borderWidth: 1,
        borderColor: 'rgba(218, 220, 224, 1)',
        height: height(4.5),
        alignItems: 'center',
        paddingHorizontal: 12,
        marginBottom: height(1),
        borderRadius: 5,
    },
    placeholderText: {
        fontFamily: 'Roboto-Regular',
        color: '#5F6368',
        fontSize: totalSize(1.5),
    },
    issueDetailTextInput: {
        height: height(5),
        textAlignVertical: 'top',
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 7,
    },
    LabelText: {
        fontFamily: 'Roboto-Medium',
        color: '#9BA0A4',
        fontSize: totalSize(1.5),
        marginVertical: height(1),
    },
    setRowWise: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(218, 220, 224, 1)',
        padding: height(2),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
    },
    setRowiseDocPicandText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    FileNameText: {
        fontFamily: 'Roboto-Medium',
        color: '#000000',
        fontSize: totalSize(1.4),
        marginLeft: 7,
    },
    FileSizeText: {
        fontFamily: 'Roboto-Regular',
        color: '#BABABA',
        fontSize: totalSize(1.2),
        marginLeft: 6,
        marginTop: 2,
    },
    ConfirmButtonContainer: {
        flexDirection: 'row',
        backgroundColor: '#1967D7',
        marginVertical: height(3),
        padding: 10,
        justifyContent: 'space-between',
        borderRadius: 5,
        alignItems: 'center',

    },
    ConfirmButtonText: {
        color: '#FFFFFF',
        fontSize: totalSize(1.8),
        marginLeft: 5,
        fontFamily: 'Roboto-Medium',
    },
    setRowWisedocpicandbigplus: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(218, 220, 224, 1)',
        padding:height(2),
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5,
    },
    setRowiseDocPicandText:{
     flexDirection:'row',
     alignItems:'center',
    },
    FileNameText:{
        fontFamily: 'Roboto-Medium',
        color: '#000000',
        fontSize: totalSize(1.4),
        marginLeft:7,
    },
    FileNameText:{
        fontFamily: 'Roboto-Medium',
        color: '#000000',
        fontSize: totalSize(1.4),
        marginLeft:7,
    },
    FileSizeText:{
        fontFamily: 'Roboto-Regular',
        color: '#BABABA',
        fontSize: totalSize(1.2),
        marginLeft:6, 
        marginTop: 2,
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
})
export default NewRequestRevisionSheetStyles;