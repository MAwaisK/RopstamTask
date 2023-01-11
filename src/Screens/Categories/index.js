import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Platform } from 'react-native';
import Styles from './styles';
import Imports from '../../Constants/Imports';

const Categories = () => {
  const navigation = Imports.Navigations.useNavigation();
  const dispatch = Imports.Redux.useDispatch();
  const selectedCategory = Imports.Redux.useSelector(state => state?.app?.selectedCategory);

  const [selectedType, setSelectedType] = useState('');

  console.log('selectedCategory', selectedCategory);

  const AddCarSheetRef = useRef();
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
      car_Name: 'Mazda',
      make_Name: 'BMW',
      registration_Date: 'Dec 12,2022',
      modal_Number: 'Civic 2019',
      owner_Name: 'Awais',
      color: 'white',
    },
    {
      registration_No: '1',
      car_Name: 'Mercedes',
      make_Name: 'Toyota',
      registration_Date: 'Dec 12,2022',
      modal_Number: 'Gli 2019',
      owner_Name: 'Awais',
      color: 'white',
    },

    {
      registration_No: '1',
      car_Name: 'Civic X',
      make_Name: 'Tesla',
      registration_Date: 'Dec 12,2022',
      modal_Number: 'Civic 2019',
      owner_Name: 'Awais',
      color: 'white',
    },
  ];

  const categoryList = [
    'BMW',
    'Honda',
    'Hyundai',
    'Mazda',
    'Mercedes',
    'Suzukie',
    'Tesla',
    'Toyota',
  ];

  const RenderCardView = (item, index) => {
    return (
      <>
        {selectedCategory === item?.make_Name ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Details');
            }}
            style={[
              Styles.CardContainer,
              Platform.OS === 'ios'
                ? Styles.Card
                : Styles.Card2,
            ]}>
            <View style={Styles.CardRowContainer}>
              <View style={Styles.CardLabelView}>
                <Text style={[Styles.CardLabelBlackText]}>
                  {item?.modal_Number}
                </Text>
                <Text style={[Styles.CardLabelGrayText]}>
                  Reg No: {item?.registration_No}
                </Text>
              </View>
              <View style={Styles.CardLogoView}>
                {item?.make_Name === 'Toyota' ? (
                  <Imports.ToyotaLogo width={Imports.ScreenDimensions.height(12)} height={Imports.ScreenDimensions.height(12)} />
                ) : (
                  <Imports.HondaLogo width={Imports.ScreenDimensions.height(10)} height={Imports.ScreenDimensions.height(10)} />
                )}
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </>
    );
  };

  const AddCar = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          AddCarPassRef().current.open();
        }}
        style={[Styles.SignInButtonStyle]}>
        <Text style={[Styles.SignInText]}>Register a new car</Text>
      </TouchableOpacity>
    );
  };

  const renderDropDown = () => {
    return (
      <Imports.SelectDropdown
        // renderDropdownIcon={() => <DownArrow />}
        dropdownStyle={{
          width: '90%',
        }}
        rowTextStyle={{
          fontSize: 12,
        }}
        defaultButtonText={
          selectedCategory ? selectedCategory : `Select Category`
        }
        buttonTextStyle={Styles.DropDownButtonTextStyle}
        buttonStyle={Styles.DropDownButtonStyle}
        data={categoryList}
        onSelect={(item, index) => {
          dispatch({
            type: Imports.Types.SELECTED_CATEGORY,
            selectedCategory: item,
          });
        }}
      />
    );
  };

  const Signout = () => {
    dispatch({ type: Imports.Types.LOGIN_KEY, loginKey: '' })
  };

  return (
    <>
      <SafeAreaView style={Styles.SafeArea} />
      <SafeAreaView style={{ flex: 1, backgroundColor: Imports.Colors.white }}>
        <View style={[Styles.Container]}>
          <View style={[Styles.Header]}>
            <>
              <View style={Styles.HeaderContentContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Imports.ArrowBack />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Signout()}>
                  <Text style={Styles.SignoutText}>Sign out</Text>
                </TouchableOpacity>
              </View>

              <View style={Styles.DropDownContainer}>
                {renderDropDown()}
              </View>
              <View style={Styles.HeaderTextView}>
                <Text
                  style={
                    Styles.HeaderTextStyle
                  }>{`${selectedCategory}`}</Text>
              </View>
            </>
          </View>

          <View style={Styles.ScrollViewContainer}>
            <FlatList
              data={DATA}
              renderItem={({ item, index }) => RenderCardView(item, index)}
              style={{ flex: 1 }}
              keyExtractor={(item, index) => item + index}
            />
          </View>
          {AddCar()}
        </View>
        <Imports.AddCarSheet AddCarPassRef={AddCarPassRef} />
      </SafeAreaView>
    </>
  );
};

export default Categories;
