import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { height, totalSize } from 'react-native-dimension';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import colors from '../../Constants/Colors';
import types from '../../Redux/types';
import MainDashboardStyles from './styles';
import AddCarSheet from '../../Constants/Sheets/AddCarSheet/AddCarSheet';
import ArrowBack from '../../assets/ArrowBack.svg';
import BMWLogo from '../../assets/bmw.svg';
import HondaLogo from '../../assets/honda.svg';
import HyundaiLogo from '../../assets/hyundai.svg';
import MazdaLogo from '../../assets/mazda.svg';
import MercedesLogo from '../../assets/mercedes.svg';
import SuzukiLogo from '../../assets/suzuki.svg';
import TeslaLogo from '../../assets/tesla.svg';
import ToyotaLogo from '../../assets/toyota.svg';

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
            <SafeAreaView style={MainDashboardStyles.SafeAreaStatus} />
            <SafeAreaView style={MainDashboardStyles.SafeAreaContainer}>
                <View style={[MainDashboardStyles.Container]}>

                    <View style={[MainDashboardStyles.Header]}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => Signout()}
                            style={MainDashboardStyles.SignoutContainer}>
                            <Text style={MainDashboardStyles.SignoutText}>Sign out</Text>
                        </TouchableOpacity>
                        <>
                            <View style={MainDashboardStyles.HeaderContent}>
                                <Text style={MainDashboardStyles.HeaderContentText}>Dashboard </Text>
                            </View>
                        </>
                    </View>


                    <View style={MainDashboardStyles.Body}>
                        <View
                            style={[MainDashboardStyles.CardContainer, Platform.OS === 'ios' ? MainDashboardStyles.Card : MainDashboardStyles.Card2]}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={MainDashboardStyles.InnerCardContainer}>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('Dashboard')}
                                        style={[Platform.OS === 'ios' ? MainDashboardStyles.Card3 : MainDashboardStyles.Card4, MainDashboardStyles.InnerCardLeftStyle]}>
                                        <View style={MainDashboardStyles.LogoContainer}>
                                        <BMWLogo width={height(8)} height={height(8)} />
                                        </View>
                                        <Text style={MainDashboardStyles.CardLabelText}>(12)</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('Dashboard')}
                                        style={[Platform.OS === 'ios' ? MainDashboardStyles.Card3 : MainDashboardStyles.Card4, MainDashboardStyles.InnerCardRightStyle]}>
                                        <View style={MainDashboardStyles.LogoContainer}>
                                        <HondaLogo width={height(8)} height={height(8)} />
                                        </View>
                                        <Text style={MainDashboardStyles.CardLabelText}>(12)</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={MainDashboardStyles.InnerCardContainer}>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('Dashboard')}
                                        style={[Platform.OS === 'ios' ? MainDashboardStyles.Card3 : MainDashboardStyles.Card4, MainDashboardStyles.InnerCardLeftStyle]}>
                                        <View style={MainDashboardStyles.LogoContainer}>
                                        <HyundaiLogo width={height(8)} height={height(8)} />
                                        </View>
                                        <Text style={MainDashboardStyles.CardLabelText}>(12)</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('Dashboard')}
                                        style={[Platform.OS === 'ios' ? MainDashboardStyles.Card3 : MainDashboardStyles.Card4, MainDashboardStyles.InnerCardRightStyle]}>
                                        <View style={MainDashboardStyles.LogoContainer}>
                                        <MazdaLogo width={height(8)} height={height(8)} />
                                        </View>
                                        <Text style={MainDashboardStyles.CardLabelText}>(12)</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={MainDashboardStyles.InnerCardContainer}>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('Dashboard')}
                                        style={[Platform.OS === 'ios' ? MainDashboardStyles.Card3 : MainDashboardStyles.Card4, MainDashboardStyles.InnerCardLeftStyle]}>
                                        <View style={MainDashboardStyles.LogoContainer}>
                                        <MercedesLogo width={height(8)} height={height(8)} />
                                        </View>
                                        <Text style={MainDashboardStyles.CardLabelText}>(12)</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('Dashboard')}
                                        style={[Platform.OS === 'ios' ? MainDashboardStyles.Card3 : MainDashboardStyles.Card4, MainDashboardStyles.InnerCardRightStyle]}>
                                        <View style={MainDashboardStyles.LogoContainer}>
                                        <SuzukiLogo width={height(8)} height={height(8)} />
                                        </View>
                                        <Text style={MainDashboardStyles.CardLabelText}>(12)</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={MainDashboardStyles.InnerCardContainer}>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('Dashboard')}
                                        style={[Platform.OS === 'ios' ? MainDashboardStyles.Card3 : MainDashboardStyles.Card4, MainDashboardStyles.InnerCardLeftStyle]}>
                                        <View style={MainDashboardStyles.LogoContainer}>
                                        <TeslaLogo width={height(8)} height={height(8)} />
                                        </View>
                                        <Text style={MainDashboardStyles.CardLabelText}>(12)</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('Dashboard')}
                                        style={[Platform.OS === 'ios' ? MainDashboardStyles.Card3 : MainDashboardStyles.Card4, MainDashboardStyles.InnerCardRightStyle]}>
                                        <View style={MainDashboardStyles.LogoContainer}>
                                        <ToyotaLogo width={height(8)} height={height(8)} />
                                        </View>
                                        <Text style={MainDashboardStyles.CardLabelText}>(12)</Text>
                                    </TouchableOpacity>
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