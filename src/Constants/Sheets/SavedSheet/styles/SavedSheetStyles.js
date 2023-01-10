import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import colors from '../../../Colors/Colors';


const SavedSheetStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width(80),
        alignSelf: 'center',
        marginTop: height(2.5),
        borderRadius: 5,
        backgroundColor: colors.blue,
    },
    ButtonText: {
        fontFamily: 'Roboto-Bold',
        fontSize: totalSize(1.5),
        marginTop: height(1.5),
        marginBottom: height(1.5),
    },
})
export default SavedSheetStyles;