import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Platform } from 'react-native';
import { height, totalSize } from 'react-native-dimension';
import SelectDropdown from 'react-native-select-dropdown';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DashboardStyles from './styles';
import AddCarSheet from '../../Constants/Sheets/AddCarSheet/AddCarSheet';
import types from '../../Redux/types';
import colors from '../../Constants/Colors';
import ArrowBack from '../../assets/ArrowBack.svg';
import BMWLogo from '../../assets/bmw.svg';
import FerrariLogo from '../../assets/ferrari.svg';
import HondaLogo from '../../assets/honda.svg';
import HyundaiLogo from '../../assets/hyundai.svg';
import KiaLogo from '../../assets/kia.svg';
import MercedesLogo from '../../assets/mercedes.svg';
import SuzukiLogo from '../../assets/suzuki.svg';
import ToyotaLogo from '../../assets/toyota.svg';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigation=useNavigation();

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


  const categoryList = ["Car", "Jeep", "Bike", "Mini Car"];

  const RenderCardView = (item, index) => {
    return (
      <TouchableOpacity 
      activeOpacity={0.8}
      onPress={()=>{navigation.navigate('CarDetails')}}
      style={[DashboardStyles.CardContainer, Platform.OS === 'ios' ? DashboardStyles.Card : DashboardStyles.Card2]}>
        <View style={{ flexDirection: 'row', marginTop: height(1.5), marginHorizontal: height(1.2) }}>
          <View style={{ width: '50%', justifyContent: 'center' }}>
            <Text style={[{ fontSize: totalSize(2.3), color: colors.black, fontWeight: 'bold' }]}>{item?.modal_Number}</Text>
            <Text style={[{ fontSize: totalSize(2), color: colors.grey, fontWeight: 'bold', marginTop: height(1) }]}>Reg No: {item?.registration_No}</Text>
          </View>
          <View style={{ width: '50%', justifyContent: 'center', alignItems: 'flex-end', }}>
            {item?.make_Name === 'Toyota' ? <ToyotaLogo width={height(12)} height={height(12)} /> : <HondaLogo width={height(10)} height={height(10)} />}
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const AddCar = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          AddCarPassRef().current.open()
        }}
        style={[DashboardStyles.SignInButtonStyle]}>
        <Text style={[DashboardStyles.SignInText]}>Register a new car</Text>
      </TouchableOpacity>
    )
  }

  const renderDropDown = () => {
    return (
      <SelectDropdown
        // renderDropdownIcon={() => <DownArrow />}
        dropdownStyle={
          {
            //   borderWidth: 2,
            // borderColor: '#F65836',
            //width: '67.5%'
            width: '90%'
          }
        }
        rowTextStyle={{
          fontSize: 12,
        }}
        defaultButtonText={`Select Category`}
        buttonTextStyle={{
          textAlign: 'left',
          color: '#B1A9A9',
          fontSize: totalSize(1.4),
        }}
        buttonStyle={{
          //borderWidth: 0,
          //   borderColor: '#F65836',
          width: '100%',
          height: height(3.4),
          flexDirection: 'row-reverse',
          backgroundColor: '#FFF',
          paddingRight: 0,
        }}
        data={categoryList}
        onSelect={(item, index) => {
          setSelectedCategory(item)
        }}
      />
    );
  };



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
            <View style={{flexDirection:'row',justifyContent: 'space-between',  marginHorizontal: height(2),marginTop:height(3)}}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <ArrowBack/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Signout()}>
                <Text style={{ fontSize: totalSize(1.8), color: colors.white, textDecorationLine: 'underline', fontWeight: '700' }}>Sign out</Text>
              </TouchableOpacity>
            </View>
              
              <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: height(3.5) }}>
                {/* <Text style={{ color: colors.white, fontSize: totalSize(2), fontWeight: 'bold', }}>{'Category'} </Text> */}
                {renderDropDown()}
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height(2.2) }}>
                <Text style={{ color: colors.white, fontSize: totalSize(2.7), fontWeight: 'bold' }}>{`${selectedCategory}`} </Text>
              </View>
            </>
          </View>


          <View style={{
            flex: 1,
            marginTop: -height(5)
          }}>
            <FlatList
              data={DATA}
              renderItem={({ item, index }) => RenderCardView(item, index)}
              style={{ flex: 1 }}
              // ListFooterComponent={()=>AddCar()}
              keyExtractor={(item, index) => item + index}
            />
          </View>
          {AddCar()}
        </View>
        <AddCarSheet
          AddCarPassRef={AddCarPassRef}
        />
      </SafeAreaView>
    </>
  )
}

export default Dashboard