import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {height, totalSize} from 'react-native-dimension';
import SelectDropdown from 'react-native-select-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
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
  const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState('');

  const selectedCategory = useSelector(state => state?.app?.selectedCategory);

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
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('CarDetails');
        }}
        style={[
          DashboardStyles.CardContainer,
          Platform.OS === 'ios' ? DashboardStyles.Card : DashboardStyles.Card2,
        ]}>
        <View style={DashboardStyles.CardRowContainer}>
          <View style={DashboardStyles.CardLabelView}>
            <Text style={[DashboardStyles.CardLabelBlackText]}>
              {item?.modal_Number}
            </Text>
            <Text style={[DashboardStyles.CardLabelGrayText]}>
              Reg No: {item?.registration_No}
            </Text>
          </View>
          <View style={DashboardStyles.CardLogoView}>
            {item?.make_Name === 'Toyota' ? (
              <ToyotaLogo width={height(12)} height={height(12)} />
            ) : (
              <HondaLogo width={height(10)} height={height(10)} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const AddCar = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          AddCarPassRef().current.open();
        }}
        style={[DashboardStyles.SignInButtonStyle]}>
        <Text style={[DashboardStyles.SignInText]}>Register a new car</Text>
      </TouchableOpacity>
    );
  };

  const renderDropDown = () => {
    return (
      <SelectDropdown
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
        buttonTextStyle={DashboardStyles.DropDownButtonTextStyle}
        buttonStyle={DashboardStyles.DropDownButtonStyle}
        data={categoryList}
        onSelect={(item, index) => {
          dispatch({
            type: types.SELECTED_CATEGORY,
            selectedCategory: item,
          });
        }}
      />
    );
  };

  const Signout = () => {
    dispatch({
      type: types.LOGIN_KEY,
      loginKey: '',
    });
  };

  return (
    <>
      <SafeAreaView style={DashboardStyles.SafeArea} />
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <View style={[DashboardStyles.Container]}>
          <View style={[DashboardStyles.Header]}>
            <>
              <View style={DashboardStyles.HeaderContentContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <ArrowBack />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Signout()}>
                  <Text style={DashboardStyles.SignoutText}>Sign out</Text>
                </TouchableOpacity>
              </View>

              <View style={DashboardStyles.DropDownContainer}>
                {renderDropDown()}
              </View>
              <View style={DashboardStyles.HeaderTextView}>
                <Text
                  style={
                    DashboardStyles.HeaderTextStyle
                  }>{`${selectedCategory}`}</Text>
              </View>
            </>
          </View>

          <View style={DashboardStyles.ScrollViewContainer}>
            <FlatList
              data={DATA}
              renderItem={({item, index}) => RenderCardView(item, index)}
              style={{flex: 1}}
              keyExtractor={(item, index) => item + index}
            />
          </View>
          {AddCar()}
        </View>
        <AddCarSheet AddCarPassRef={AddCarPassRef} />
      </SafeAreaView>
    </>
  );
};

export default Dashboard;
