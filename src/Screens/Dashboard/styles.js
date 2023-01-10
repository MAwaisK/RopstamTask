import { StyleSheet } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import colors from '../../Constants/Colors'

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
        height: '20%',
        backgroundColor: colors.darkBlue,
    },
    CardContainer: {
        width: '90%',
        height: height(13),
        backgroundColor: 'green',
        marginVertical: height(2),
        alignSelf: 'center',
        borderRadius: 5,

    },

});

export default DashboardStyles;