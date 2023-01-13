import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, SafeAreaView, TextInput, Keyboard } from 'react-native';
import Styles from './SheetStyles';
import EditCarSheetWrapper from 'react-native-raw-bottom-sheet';
import Imports from './Imports';

const EditCar = props => {
  const navigation = Imports.Navigations.useNavigation();
  const dispatch = Imports.Redux.useDispatch();
  const scrollViewRef = useRef(null);
  const makeList = Imports.Redux.useSelector(state => state?.app?.makeList);
  const colorList = Imports.Redux.useSelector(state => state?.app?.colorList);
  const carData = Imports.Redux.useSelector(state => state?.app?.carData);
  const carDetails = Imports.Redux.useSelector(state => state?.app?.carDetails);

  const [registrationNo, setRegistrationNo] = useState(carDetails?.registration_No);
  const [modalNumber, setModalNumber] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [color, setColor] = useState('');
  const [makeName, setMakeName] = useState('');
  const [carName, setCarName] = useState('');

  const [isFocusModalNumber, setIsFocusModalNumber] = useState('');
  const [isFocusOwnerName, setIsFocusOwnerName] = useState('');
  const [isFocusColor, setIsFocusColor] = useState('');
  const [isFocusMakeName, setIsFocusMakeName] = useState('');
  const [isFocusCarName, setIsFocusCarName] = useState('');
  const [isMissingValue, setIsMissingValue] = useState('');


  const RestAllValues = () => {
    setRegistrationNo(Number(carDetails?.registration_No));
    setModalNumber(carDetails?.modal_Number);
    setOwnerName(carDetails?.owner_Name);
    setColor(carDetails?.color);
    setMakeName(carDetails?.make_Name);
    setCarName(carDetails?.car_Name);
  };

  const ResetAllFocus = () => {
    setIsFocusModalNumber(false);
    setIsFocusOwnerName(false);
    setIsFocusColor(false);
    setIsFocusMakeName(false);
    setIsFocusCarName(false);
  };

  const EditCar = () => {
    if (modalNumber === '') {
      setIsMissingValue('modalNumber');
      scrollViewRef.current?.scrollTo({ x: 1, animated: true });
    } else if (ownerName === '') {
      setIsMissingValue('ownerName');
      scrollViewRef.current?.scrollTo({ x: 1, animated: true });
    } else if (makeName === '') {
      setIsMissingValue('makeName');
    } else if (color === '') {
      setIsMissingValue('color');
    } else if (carName === '') {
      setIsMissingValue('carName');
    } else {
      const newCarData = [{
        registration_No: Number(registrationNo),
        car_Name: carName,
        make_Name: makeName,
        modal_Number: modalNumber,
        owner_Name: ownerName,
        color: color,
      }];

      dispatch({
        type: Imports.Types.CAR_DETAILS,
        carDetails: newCarData[0],
      });

      let carDataArr = [];

      for (var a = 0; a < carData.length; a++) {
        if (carData[a].registration_No === Number(registrationNo)) {
          carDataArr.push(newCarData[0])
        }
        else {
          carDataArr.push(carData[a])
        }
      }

      dispatch({
        type: Imports.Types.CAR_DATA,
        carData: carDataArr,
      });

      props.EditCarPassRef().current.close();
    }
  };

  const renderDropDownMake = () => {
    return (
      <Imports.SelectDropdown
        renderDropdownIcon={() => (
          <Imports.ArrowDown
            height={Imports.ScreenDimensions.height(2)}
            width={Imports.ScreenDimensions.height(2)} />
        )}
        dropdownStyle={Styles.Dropdown}
        rowTextStyle={Styles.DropdownText}
        defaultButtonText={makeName ? makeName : `Select Category`}
        buttonTextStyle={Styles.DropDownButtonText}
        buttonStyle={Styles.DropDownButton}
        data={makeList}
        onSelect={(item, index) => { setMakeName(item) }} />
    );
  };

  const renderDropDownColor = () => {
    return (
      <Imports.SelectDropdown
        renderDropdownIcon={() => (
          <Imports.ArrowDown
            height={Imports.ScreenDimensions.height(2)}
            width={Imports.ScreenDimensions.height(2)} />
        )}
        dropdownStyle={Styles.Dropdown}
        rowTextStyle={Styles.DropdownText}
        defaultButtonText={color ? color : `Select color`}
        buttonTextStyle={Styles.DropDownButtonText}
        buttonStyle={Styles.DropDownButton}
        data={colorList}
        onSelect={(item, index) => { setColor(item) }} />
    );
  };

  return (
    <EditCarSheetWrapper
      ref={props.EditCarPassRef()}
      closeOnDragDown={false}
      closeOnPressMask={true}
      onOpen={() => RestAllValues()}
      animationType="slide"
      customStyles={{
        wrapper: { backgroundColor: 'rgba(0,0,0,0.45)' },
        container: Styles.SheetCustomContainer,
        draggableIcon: { backgroundColor: '#E4E5E5' }
      }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[Styles.mainContainer]}>
          <View
            style={Styles.SheetContainer}
          />
          <View style={[Styles.SetRowsiseProfileTextandCloseIcon]}>
            <Text style={[Styles.ProfileText]}>Update Car details</Text>
            <TouchableOpacity
              hitSlop={{ bottom: 15, top: 15, left: 15, right: 15 }}
              onPress={() => {
                props.EditCarPassRef().current.close();
              }}
              style={[Styles.CrossIconOuteraview]}>
            </TouchableOpacity>
          </View>
          <ScrollView
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            style={Styles.ScrollViewContainer}
            contentContainerStyle={Styles.ScrollViewContentContainer}>
            <Text style={[Styles.LabelText]}>Registration number</Text>
            <View style={[Styles.RegNoView]}>
              <Text style={Styles.FieldValueText}>{carDetails?.registration_No}</Text>
            </View>

            <Text style={[Styles.LabelText]}>Modal number *</Text>
            <TextInput
              placeholder="Enter modal number"
              placeholderTextColor={Imports.Colors.grey}
              value={modalNumber}
              onFocus={() => {
                setIsFocusModalNumber(true);
                setIsMissingValue('');
              }}
              onBlur={() => ResetAllFocus()}
              onChangeText={text => {
                setModalNumber(text);
              }}
              style={[
                Styles.TextInputStyle,
                {
                  borderColor:
                    isMissingValue === 'modalNumber'
                      ? Imports.Colors.red
                      : isFocusModalNumber
                        ? Imports.Colors.darkBlue
                        : Imports.Colors.grey,
                },
              ]}
            />

            <Text style={[Styles.LabelText]}>Owner name *</Text>
            <TextInput
              placeholder="Enter owner name"
              placeholderTextColor={Imports.Colors.grey}
              value={ownerName}
              onFocus={() => {
                setIsFocusOwnerName(true);
                setIsMissingValue('');
              }}
              onBlur={() => ResetAllFocus()}
              onChangeText={text => {
                setOwnerName(text);
              }}
              style={[
                Styles.TextInputStyle,
                {
                  borderColor:
                    isMissingValue === 'ownerName'
                      ? Imports.Colors.red
                      : isFocusOwnerName
                        ? Imports.Colors.darkBlue
                        : Imports.Colors.grey,
                },
              ]}
            />
            <Text style={[Styles.LabelText]}>Make name *</Text>
            {renderDropDownMake()}
            <Text style={[Styles.LabelText]}>Select color</Text>
            {renderDropDownColor()}
            <Text style={[Styles.LabelText]}>Car name</Text>
            <TextInput
              placeholder="Enter car name"
              placeholderTextColor={Imports.Colors.grey}
              value={carName}
              onFocus={() => setIsFocusCarName(true)}
              onBlur={() => ResetAllFocus()}
              onChangeText={text => {
                setCarName(text);
              }}
              style={[
                Styles.TextInputStyle,
                {
                  borderColor:
                    isMissingValue === 'carName'
                      ? Imports.Colors.red
                      : isFocusCarName
                        ? Imports.Colors.darkBlue
                        : Imports.Colors.grey,
                },
              ]}
            />

            <TouchableOpacity onPress={() => { Keyboard.dismiss() }}>
              <TouchableOpacity onPress={() => { EditCar() }}
                style={[Styles.ButtonViewStyle]}>
                <Text style={[Styles.ButtonText]}>Update</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </EditCarSheetWrapper>
  );
};

export default EditCar;
