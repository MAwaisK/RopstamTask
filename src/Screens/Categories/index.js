import React, { useState, useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Platform } from 'react-native';
import Styles from './styles';
import Imports from '../../Constants/Imports';
import AddCarSheet from '../../Constants/AddCarSheet';

const Categories = () => {

  const navigation = Imports.Navigations.useNavigation();
  const dispatch = Imports.Redux.useDispatch();
  const isFocused = Imports.Navigations.useIsFocused();
  const selectedCategory = Imports.Redux.useSelector(
    state => state?.app?.selectedCategory,
  );
  const carData = Imports.Redux.useSelector(state => state?.app?.carData);
  const makeList = Imports.Redux.useSelector(state => state?.app?.makeList);
  const [check, setCheck] = useState(false);

  const AddCarSheetRef = useRef();
  const AddCarPassRef = () => AddCarSheetRef;


  const RenderCardView = (item, index) => {
    return (
      <>
        {selectedCategory === item?.make_Name ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              dispatch({
                type: Imports.Types.CAR_DETAILS,
                carDetails: item,
              });
              navigation.navigate('Details');
            }}
            style={[
              Styles.CardContainer,
              Platform.OS === 'ios' ? Styles.Card : Styles.Card2,
            ]}>
            <View style={Styles.CardRowContainer}>
              <View style={Styles.CardLabelView}>
                <Text style={[Styles.CardLabelBlackText]}>
                  {item?.car_Name}
                </Text>
                <Text style={[Styles.CardLabelGrayText]}>
                  Reg No: {item?.registration_No}
                </Text>
              </View>

              <View style={Styles.CardLogoView}>
                {item?.make_Name === 'BMW' ? (
                  <Imports.BMWLogo
                    width={Imports.ScreenDimensions.height(8)}
                    height={Imports.ScreenDimensions.height(8)}
                  />
                ) : item?.make_Name === 'Honda' ? (
                  <Imports.HondaLogo
                    width={Imports.ScreenDimensions.height(8)}
                    height={Imports.ScreenDimensions.height(8)}
                  />
                ) : item?.make_Name === 'Hyundai' ? (
                  <Imports.HyundaiLogo
                    width={Imports.ScreenDimensions.height(8)}
                    height={Imports.ScreenDimensions.height(8)}
                  />
                ) : item?.make_Name === 'Mazda' ? (
                  <Imports.MazdaLogo
                    width={Imports.ScreenDimensions.height(8)}
                    height={Imports.ScreenDimensions.height(8)}
                  />
                ) : item?.make_Name === 'Mercedes' ? (
                  <Imports.MercedesLogo
                    width={Imports.ScreenDimensions.height(8)}
                    height={Imports.ScreenDimensions.height(8)}
                  />
                ) : item?.make_Name === 'Suzukie' ? (
                  <Imports.SuzukiLogo
                    width={Imports.ScreenDimensions.height(8)}
                    height={Imports.ScreenDimensions.height(8)}
                  />
                ) : item?.make_Name === 'Tesla' ? (
                  <Imports.TeslaLogo
                    width={Imports.ScreenDimensions.height(8)}
                    height={Imports.ScreenDimensions.height(8)}
                  />
                ) : (
                  item?.make_Name === 'Toyota' && (
                    <Imports.ToyotaLogo
                      width={Imports.ScreenDimensions.height(8)}
                      height={Imports.ScreenDimensions.height(8)}
                    />
                  )
                )}
              </View>
              <View
                style={{
                  flex: 0.2,
                  paddingRight: Imports.ScreenDimensions.height(2),
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                {/* {EditView()} */}
                {DeleteView(item)}
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </>
    );
  };

  const DeleteView = item => {
    return (
      <TouchableOpacity
        hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
        onPress={() => DeleteCar(item)}
        style={Styles.DaleteContainer}>
        <Imports.DeleteIcon
          width={Imports.ScreenDimensions.height(3)}
          height={Imports.ScreenDimensions.height(3)}
        />
      </TouchableOpacity>
    );
  };

  const AddCarButtonView = () => {
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

  const DeleteCar = item => {
    var tempArr = [];
    for (var a = 0; a < carData?.length; a++) {
      if (carData[a].registration_No !== item?.registration_No) {
        tempArr.push(carData[a]);
      }
    }
    dispatch({
      type: Imports.Types.CAR_DATA,
      carData: tempArr,
    });
  };

  const renderDropDown = () => {
    return (
      <Imports.SelectDropdown
        renderDropdownIcon={() => (
          <Imports.ArrowDown
            height={Imports.ScreenDimensions.height(2)}
            width={Imports.ScreenDimensions.height(2)} />
        )}
        dropdownStyle={{ width: '90%' }}
        rowTextStyle={{ fontSize: 12 }}
        defaultButtonText={selectedCategory ? selectedCategory : `Select Category`}
        buttonTextStyle={Styles.DropDownButtonTextStyle}
        buttonStyle={Styles.DropDownButtonStyle}
        data={makeList}
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
    dispatch({ type: Imports.Types.LOGIN_KEY, loginKey: '' });
  };

  useEffect(() => {
    dispatch({ type: Imports.Types.CAR_DATA, carData: carData });
  }, [check, selectedCategory])

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
              <View style={Styles.DropDownContainer}>{renderDropDown()}</View>
              <View style={Styles.HeaderTextView}>
                <Text style={Styles.HeaderTextStyle}>{`${selectedCategory}`}</Text>
              </View>
            </>
          </View>

          <View style={Styles.ScrollViewContainer}>
            <FlatList
              data={carData}
              renderItem={({ item, index }) => RenderCardView(item, index)}
              style={{ flex: 1 }}
              keyExtractor={(item, index) => index} />
          </View>{AddCarButtonView()}</View>
        <AddCarSheet AddCarPassRef={AddCarPassRef} setCheck={setCheck} check={check} />
      </SafeAreaView>
    </>
  );
};

export default Categories;
