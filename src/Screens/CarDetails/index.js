import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { height, totalSize } from 'react-native-dimension';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import colors from '../../Constants/Colors';
import types from '../../Redux/types';
import DashboardStyles from './styles';
import ToyotaLogo from '../../assets/toyota.svg';
import HondaLogo from '../../assets/honda.svg';
import AddCarSheet from '../../Constants/Sheets/AddCarSheet/AddCarSheet';
import ArrowBack from '../../assets/ArrowBack.svg';

const CarDetails = () => {
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
      <SafeAreaView style={DashboardStyles.SafeArea} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={[DashboardStyles.Container]}>

          <View style={[DashboardStyles.Header]}>
            <>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ width: '90%', alignSelf: 'center', alignItems: 'flex-start', marginTop: height(2) }}>
                <ArrowBack />
              </TouchableOpacity>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height(0) }}>
                <Text style={{ color: colors.white, fontSize: totalSize(2.7), fontWeight: 'bold' }}>{`${selectedCategory}`}Toyota </Text>
              </View>
            </>
          </View>


          <View style={{
            flex: 1,
            marginTop: -height(11)
          }}>
            <View
              style={[DashboardStyles.CardContainer, Platform.OS === 'ios' ? DashboardStyles.Card : DashboardStyles.Card2]}>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: height(2) }}>
                <ToyotaLogo width={height(12)} height={height(12)} />
              </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{ flexDirection: 'row', marginHorizontal: height(2), marginTop: height(3) }}>
                    <View style={{ width: '40%', justifyContent: 'flex-start' }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.grey, fontWeight: 'bold', }]}>Reg No:</Text>
                    </View>
                    <View style={{ width: '60%', justifyContent: 'center', alignItems: 'flex-start', }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.black, fontWeight: 'bold' }]}>Awais</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: height(2), marginTop: height(3) }}>
                    <View style={{ width: '40%', justifyContent: 'flex-start' }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.grey, fontWeight: 'bold', }]}>Modal Name: </Text>
                    </View>
                    <View style={{ width: '60%', justifyContent: 'center', alignItems: 'flex-start', }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.black, fontWeight: 'bold' }]}>Awais</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: height(2), marginTop: height(3) }}>
                    <View style={{ width: '40%', justifyContent: 'flex-start' }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.grey, fontWeight: 'bold', }]}>Car Name: </Text>
                    </View>
                    <View style={{ width: '60%', justifyContent: 'center', alignItems: 'flex-start', }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.black, fontWeight: 'bold' }]}>Awais</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: height(2), marginTop: height(3) }}>
                    <View style={{ width: '40%', justifyContent: 'flex-start' }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.grey, fontWeight: 'bold', }]}>Reg Date: </Text>
                    </View>
                    <View style={{ width: '60%', justifyContent: 'center', alignItems: 'flex-start', }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.black, fontWeight: 'bold' }]}>Awais </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: height(2), marginTop: height(3) }}>
                    <View style={{ width: '40%', justifyContent: 'flex-start' }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.grey, fontWeight: 'bold', }]}>Owner Name: </Text>
                    </View>
                    <View style={{ width: '60%', justifyContent: 'center', alignItems: 'flex-start', }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.black, fontWeight: 'bold' }]}>Awais</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', marginHorizontal: height(2), marginTop: height(3) }}>
                    <View style={{ width: '40%', justifyContent: 'flex-start' }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.grey, fontWeight: 'bold', }]}>Color: </Text>
                    </View>
                    <View style={{ width: '60%', justifyContent: 'center', alignItems: 'flex-start', }}>
                      <Text style={[{ fontSize: totalSize(2), color: colors.black, fontWeight: 'bold' }]}>Blue   </Text>
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

export default CarDetails