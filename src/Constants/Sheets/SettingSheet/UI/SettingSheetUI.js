import React, {
    useState,
    useEffect,
} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    FlatList,
} from 'react-native';

import SettingSheet from 'react-native-raw-bottom-sheet';
import { height, totalSize, width } from 'react-native-dimension';
import SettingSheetStyles from '../styles/SettingSheetStyles';
import Saved2 from '../../../../assets/Saved2.svg'
import Edit from '../../../../assets/Edit.svg'
import { useSelector, useDispatch } from 'react-redux';
import types from '../../../../Redux/types';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../Colors/Colors';
const SettingSheetUI = props => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [filterData, setFilterData] = useState([]);

 
  

    return (
        <SettingSheet
            ref={props.SettingRBSheetPassRef()}
            closeOnDragDown={false}
            closeOnPressMask={true}
            animationType="slide"
            closeDuration={0}
            openDuration={0}
            customStyles={{
                wrapper: {
                    backgroundColor: 'rgba(0,0,0,0.45)',
                    //marginBottom: height(9),
                },
                draggableIcon: {
                    backgroundColor: '#C4C4C4',
                },
                container: {
                    flex: 0.25,
                    paddingTop: null,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: '#FFFFFF',
                },
            }}>
            <View style={[SettingSheetStyles.setAlinment]}>
                <View style={{ marginTop: height(2) }}>
                    <TouchableOpacity activeOpacity={0.7}
                        onPress={() => {
                            navigation.navigate('SavedList')
                            props.SettingRBSheetPassRef().current.close()
                        }
                        } style={{ flexDirection: 'row', marginTop: height(3), alignItems: 'center' }}>
                        <Saved2 />
                        <Text style={{ color: colors.black, fontSize: totalSize(1.7), fontFamily: 'Roboto-Medium', marginLeft: height(2), alignSelf: 'flex-end' }}>View saved records</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}
                        onPress={() => {
                            navigation.navigate('Edit')
                            props.SettingRBSheetPassRef().current.close()
                        }
                        } style={{ flexDirection: 'row', marginTop: height(3), alignItems: 'center', }}>
                        <Edit width={25} height={25} />
                        <Text style={{ color: colors.black, fontSize: totalSize(1.7), fontFamily: 'Roboto-Medium', marginLeft: height(2), alignSelf: 'flex-end' }}>Edit grades</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SettingSheet>
    );
};
export default SettingSheetUI;