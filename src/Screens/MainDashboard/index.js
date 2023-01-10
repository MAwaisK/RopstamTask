import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { height, totalSize } from 'react-native-dimension';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import colors from '../../Constants/Colors';
import types from '../../Redux/types';
import MainDashboardStyles from './styles';
import ToyotaLogo from '../../assets/toyota.svg';
import HondaLogo from '../../assets/honda.svg';
import AddCarSheet from '../../Constants/Sheets/AddCarSheet/AddCarSheet';
import ArrowBack from '../../assets/ArrowBack.svg';

const MainDashboard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const AddCarSheetRef = useRef()
    const AddCarPassRef = () => AddCarSheetRef;

    const DATA = [
        {
            registration_No: '1',
            car_Name: 'Gli',
            make_Name: 'Toyota',
            registration_Date: 'Dec 12,2022',
            modal_Number: 'Gli 2019',
            owner_Name: 'Awais',
            color: 'white',
        },

        {
            registration_No: '1',
            car_Name: 'Civic X',
            make_Name: 'Honda',
            registration_Date: 'Dec 12,2022',
            modal_Number: 'Civic 2019',
            owner_Name: 'Awais',
            color: 'white',
        },
        {
            registration_No: '1',
            car_Name: 'Gli',
            make_Name: 'Toyota',
            registration_Date: 'Dec 12,2022',
            modal_Number: 'Gli 2019',
            owner_Name: 'Awais',
            color: 'white',
        },

        {
            registration_No: '1',
            car_Name: 'Civic X',
            make_Name: 'Honda',
            registration_Date: 'Dec 12,2022',
            modal_Number: 'Civic 2019',
            owner_Name: 'Awais',
            color: 'white',
        },

    ];








    const Signout = () => {
        dispatch({
            type: types.LOGIN_KEY,
            loginKey: '',
        });

    }

    return (
        <>
            <SafeAreaView style={MainDashboardStyles.SafeArea} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={[MainDashboardStyles.Container]}>

                    <View style={[MainDashboardStyles.Header]}>
                        <>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height(2) }}>
                                <Text style={{ color: colors.white, fontSize: totalSize(2.7), fontWeight: 'bold' }}>Dashboard </Text>
                            </View>
                        </>
                    </View>


                    <View style={{
                        flex: 1,
                        marginTop: -height(11)
                    }}>
                        <View
                            style={[MainDashboardStyles.CardContainer, Platform.OS === 'ios' ? MainDashboardStyles.Card : MainDashboardStyles.Card2]}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ flexDirection: "row",alignSelf:'center' }}>
                                    <View style={[Platform.OS === 'ios' ? MainDashboardStyles.Card : MainDashboardStyles.Card2, { height: height(10), borderWidth: 1, width: '45%',marginRight:height(2) }]}>
                                        <ToyotaLogo width={height(8)} height={height(8)} />
                                    </View>
                                    <View style={[Platform.OS === 'ios' ? MainDashboardStyles.Card : MainDashboardStyles.Card2, { height: height(10), borderWidth: 1, width: '45%', }]}>
                                        <HondaLogo width={height(8)} height={height(8)} />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <AddCarSheet
                    AddCarPassRef={AddCarPassRef}
                />
            </SafeAreaView>
        </>
    )
}

export default MainDashboard