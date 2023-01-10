import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { height, totalSize } from 'react-native-dimension';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import colors from '../../Constants/Colors';
import types from '../../Redux/types';
import CarDetailsStyles from './styles';
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


  return (
    <>
      <SafeAreaView style={CarDetailsStyles.SafeArea} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={[CarDetailsStyles.Container]}>

          <View style={[CarDetailsStyles.Header]}>
            <>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={CarDetailsStyles.ArrowBackContainer}>
                <ArrowBack />
              </TouchableOpacity>
              <View style={CarDetailsStyles.HeaderContentContainer}>
                <Text style={CarDetailsStyles.HeaderContentText}>{`${selectedCategory}`}Toyota </Text>
              </View>
            </>
          </View>
          <View style={CarDetailsStyles.Body}>
            <View
              style={[CarDetailsStyles.CardContainer, Platform.OS === 'ios' ? CarDetailsStyles.Card : CarDetailsStyles.Card2]}>
              <View style={CarDetailsStyles.LogoConatiner}>
                <ToyotaLogo width={height(17)} height={height(17)} />
              </View>
                <ScrollView 
                style={CarDetailsStyles.ScrollViewContainer} 
                showsVerticalScrollIndicator={false}>
                  <View style={CarDetailsStyles.ContentContainer}>
                  <View style={CarDetailsStyles.RowContainer}>
                    <View style={CarDetailsStyles.LabelView}>
                      <Text style={[CarDetailsStyles.LabelText]}>Reg No:</Text>
                    </View>
                    <View style={CarDetailsStyles.ValueView}>
                      <Text style={[CarDetailsStyles.ValueText]}>Awais</Text>
                    </View>
                  </View>
                  <View style={CarDetailsStyles.RowContainer}>
                    <View style={CarDetailsStyles.LabelView}>
                      <Text style={[CarDetailsStyles.LabelText]}>Modal Name:</Text>
                    </View>
                    <View style={CarDetailsStyles.ValueView}>
                      <Text style={[CarDetailsStyles.ValueText]}>Awais</Text>
                    </View>
                  </View>
                  <View style={CarDetailsStyles.RowContainer}>
                    <View style={CarDetailsStyles.LabelView}>
                      <Text style={[CarDetailsStyles.LabelText]}>Car Name:</Text>
                    </View>
                    <View style={CarDetailsStyles.ValueView}>
                      <Text style={[CarDetailsStyles.ValueText]}>Awais</Text>
                    </View>
                  </View>
                  <View style={CarDetailsStyles.RowContainer}>
                    <View style={CarDetailsStyles.LabelView}>
                      <Text style={[CarDetailsStyles.LabelText]}>Reg Date:</Text>
                    </View>
                    <View style={CarDetailsStyles.ValueView}>
                      <Text style={[CarDetailsStyles.ValueText]}>Awais</Text>
                    </View>
                  </View>
                  <View style={CarDetailsStyles.RowContainer}>
                    <View style={CarDetailsStyles.LabelView}>
                      <Text style={[CarDetailsStyles.LabelText]}>Owner Name:</Text>
                    </View>
                    <View style={CarDetailsStyles.ValueView}>
                      <Text style={[CarDetailsStyles.ValueText]}>Awais</Text>
                    </View>
                  </View>
                  <View style={CarDetailsStyles.RowContainer}>
                    <View style={CarDetailsStyles.LabelView}>
                      <Text style={[CarDetailsStyles.LabelText]}>Color:</Text>
                    </View>
                    <View style={CarDetailsStyles.ValueView}>
                      <Text style={[CarDetailsStyles.ValueText]}>Awais</Text>
                    </View>
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