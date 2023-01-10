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
    TouchableNativeFeedback,
    ActivityIndicator,
} from 'react-native';

import SemesterSheet from 'react-native-raw-bottom-sheet';
import { height, totalSize, width } from 'react-native-dimension';
import SemesterSheetStyles from '../styles/SemesterSheetStyles';
import RadioButtonChecked from '../../../../CustomHooks/RadioButtonChecked/RadioButtonChecked'
import RadioButtonUnChecked from '../../../../CustomHooks/RadioButtonUnChecked/RadioButtonUnChecked'

import { useSelector, useDispatch } from 'react-redux';
import types from '../../../../Redux/types';
import colors from '../../../Colors/Colors';
const SemesterSheetUI = props => {
    const dispatch = useDispatch();

    const selectedSemester = useSelector(state => state?.app?.selectedSemester)

    const listData = useSelector(state => state?.app?.listData)



    const [filterData, setFilterData] = useState([]);

    const SemesterList = [
        { Label: 'Semester 1', Value: 1 },
        { Label: 'Semester 2', Value: 2 },
        { Label: 'Semester 3', Value: 3 },
        { Label: 'Semester 4', Value: 4 },
        { Label: 'Semester 5', Value: 5 },
        { Label: 'Semester 6', Value: 6 },
        { Label: 'Semester 7', Value: 7 },
        { Label: 'Semester 8', Value: 8 },
    ]



    const HandleGroupCheckBoxes = (item) => {
        filterData[0] && filterData[0].Label == item?.Value
            ? null
            : setFilterData(
                SemesterList.filter((item2, index) => {
                    return item2.Value == item.Value;
                }),
            );


        ;
    };


    const ApplyFilter = () => {


        dispatch({
            type: types.SELECTED_SEMESTER,
            selectedSemester: filterData[0] && filterData[0].Value,
        });

        props.SemesterRBSheetPassRef().current.close();

    }


    const onOpenSheet = () => {
        //setFilterData([]);
        let temp={ Label: `Semester ${selectedSemester?selectedSemester:1}`, Value: selectedSemester?selectedSemester:1 }
        setFilterData([temp])
    }

    return (
        <SemesterSheet
            ref={props.SemesterRBSheetPassRef()}
            closeOnDragDown={false}
            closeOnPressMask={true}
            onOpen={() => onOpenSheet()}
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
                    flex: 1,
                    paddingTop: null,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: '#FFFFFF',
                },
            }}>
            <View style={[SemesterSheetStyles.setAlinment]}>
                <View
                    style={{
                        width: '100%',

                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            height: height(0.7),
                            width: width(10),
                            backgroundColor: '#D9D9D9',
                            borderRadius: 100,
                            marginVertical: height(1),
                        }}
                    />
                </View>
                <View style={[SemesterSheetStyles.headerView]}>
                    <View style={[SemesterSheetStyles.setRowWise]}>
                        <Text style={[SemesterSheetStyles.SlectDateText]}>Select Semester</Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            width: '43%',
                            alignItems: 'flex-end',

                            paddingRight: 10,
                        }}
                        onPress={() => {
                            props.SemesterRBSheetPassRef().current.close();
                        }}>
                        <Text style={{ color: '#1F1B2D', fontSize: totalSize(1.7) }}>
                            Close
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: height(0.01),
                        width: '100%',
                        borderTopColor: '#DBDBDB',
                        borderTopWidth: 0.5,
                    }}
                />
                <FlatList
                    data={SemesterList}
                    showsVerticalScrollIndicator={true}
                    shouldIndicatorHide={false}
                    flexibleIndicator={false}
                    scrollIndicatorContainerStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    }}
                    style={[SemesterSheetStyles.ScrollStyle, { marginTop: height(1.6) }]}
                    contentContainerStyle={[SemesterSheetStyles.ScrollContainerStyle]}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={[SemesterSheetStyles.FlatListMainView, {}]}>
                                {filterData && filterData[0]?.Label == item.Label ? (
                                    <TouchableOpacity
                                        // activeOpacity={1}
                                        style={[SemesterSheetStyles.CheckBoxOuterView, {}]}
                                        onPress={() => {
                                            HandleGroupCheckBoxes(item);
                                        }}>
                                        <View style={{}}>
                                            <Text style={[SemesterSheetStyles.checkBoxlabelText, {}]}>
                                                {item.Label}
                                            </Text>

                                        </View>
                                        <View style={{marginRight:height(1.3)}}>
                                        {RadioButtonChecked()}
                                        </View>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => {
                                            HandleGroupCheckBoxes(item);
                                        }}
                                        style={[SemesterSheetStyles.CheckBoxOuterView, {}]}
                                    >
                                        <View>
                                            <Text style={[SemesterSheetStyles.checkBoxlabelText, {}]}>
                                                {item.Label}
                                            </Text>
                                        </View>
                                        <View style={{marginRight:height(1.3)}}>
                                        {RadioButtonUnChecked()}
                                        </View>
                                    </TouchableOpacity>
                                )}
                            </View>
                        );
                    }}
                />
                <View
                    style={{
                        alignItems: 'flex-end',
                        width: '100%',
                        justifyContent: 'flex-end',
                        borderTopColor: '#DBDBDB',
                        borderTopWidth: 0.5,
                    }}>
                    <TouchableOpacity
                        onPress={() => ApplyFilter()}
                        style={[
                            SemesterSheetStyles.AppFilterButtonView,
                            { backgroundColor: colors.green },
                        ]}>
                        <Text style={[SemesterSheetStyles.ButtonTextText]}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SemesterSheet>
    );
};
export default SemesterSheetUI;
