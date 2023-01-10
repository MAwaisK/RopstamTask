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

import UnitInventorySheet from 'react-native-raw-bottom-sheet';
import { height, totalSize, width } from 'react-native-dimension';
import GradesSheetStyles from '../styles/GradesSheetStyles';
import RadioButtonChecked from '../../../../CustomHooks/RadioButtonChecked/RadioButtonChecked'
import RadioButtonUnChecked from '../../../../CustomHooks/RadioButtonUnChecked/RadioButtonUnChecked'

import { useSelector, useDispatch } from 'react-redux';
import types from '../../../../Redux/types';
import colors from '../../../Colors/Colors';
const SelectUnitInventorySheetUI = props => {
    const dispatch = useDispatch();

    const selectedGrade = useSelector(state => state?.app?.selectedGrade)
    const selectedGradeIndex = useSelector(state => state?.app?.selectedGradeIndex)

    const listData = useSelector(state => state?.app?.listData)

    

    const [filterData, setFilterData] = useState([]);
    const [tempData, setTempData] = useState([]);

    const GradesWithAPlus = [
        { Label: 'A+' },
        { Label: 'A' },
        { Label: 'A-' },
        { Label: 'B+' },
        { Label: 'B' },
        { Label: 'B-' },
        { Label: 'C+' },
        { Label: 'C' },
        { Label: 'C-' },
        { Label: 'D+' },
        { Label: 'D' },
        { Label: 'D-' },
        { Label: 'F' },
    ]

    const HandleGroupCheckBoxes = (item) => {
        filterData[0] && filterData[0].Label == item?.Label
            ? null
            : setFilterData(
                GradesWithAPlus.filter((item2, index) => {
                    return item2.Label == item.Label;
                }),
            );
        HandleGrades(item?.Label);
        
        ;
    };

    const HandleGrades = (val) => {
        console.log(val)
        var temp = [];
        for (var a in props?.dashboardListData) {
            if (Number(a) == selectedGradeIndex) {
               
                temp.push({ course: props?.dashboardListData[selectedGradeIndex].course, grade: val, credits: props?.dashboardListData[selectedGradeIndex].credits })
            }
            else {
                temp.push(props?.dashboardListData[a])
                
            }
        }
        setTempData(temp)
       // props?.setDashboardListData(temp)
    }

    const ApplyFilter = () => {
        props?.setDashboardListData(tempData)
        dispatch({
            type: types.SELECTED_GRADE,
            selectedGrade: filterData[0] ? filterData[0]?.Label : '',
        });

        props.GradesRBSheetPassRef().current.close();

    }


    const onOpenSheet = () => {
            setFilterData([])
    }

    return (
        <UnitInventorySheet
            ref={props.GradesRBSheetPassRef()}
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
            <View style={[GradesSheetStyles.setAlinment]}>
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
                <View style={[GradesSheetStyles.headerView]}>
                    <View style={[GradesSheetStyles.setRowWise]}>
                        <Text style={[GradesSheetStyles.SlectDateText]}>Grades</Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            width: '43%',
                            alignItems: 'flex-end',

                            paddingRight: 10,
                        }}
                        onPress={() => {
                            props.GradesRBSheetPassRef().current.close();
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
                    data={GradesWithAPlus}
                    showsVerticalScrollIndicator={true}
                    shouldIndicatorHide={false}
                    flexibleIndicator={false}
                    scrollIndicatorContainerStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    }}
                    style={[GradesSheetStyles.ScrollStyle, { marginTop: height(0.5),}]}
                    contentContainerStyle={[GradesSheetStyles.ScrollContainerStyle]}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={[GradesSheetStyles.FlatListMainView,]}>
                                {filterData && filterData[0]?.Label == item.Label ? (
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        hitSlop={{top:5,right:5,bottom:5,left:5}}
                                        style={[GradesSheetStyles.CheckBoxOuterView,{}]}
                                        onPress={() => {
                                            HandleGroupCheckBoxes(item);
                                        }}>
                                        <View style={{}}>
                                            <Text style={[GradesSheetStyles.checkBoxlabelText,{}]}>
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
                                        hitSlop={{top:5,right:5,bottom:5,left:5}}
                                        onPress={() => {
                                            HandleGroupCheckBoxes(item);
                                        }}
                                        style={[GradesSheetStyles.CheckBoxOuterView,{}]}
                                    >
                                        <View>
                                            <Text style={[GradesSheetStyles.checkBoxlabelText,{}]}>
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
                            GradesSheetStyles.AppFilterButtonView,
                            { backgroundColor: colors.green },
                        ]}>
                        <Text style={[GradesSheetStyles.ButtonTextText]}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </UnitInventorySheet>
    );
};
export default SelectUnitInventorySheetUI;
