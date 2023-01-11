import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, SafeAreaView, TextInput, Keyboard, ActivityIndicator, Image } from 'react-native';
import AddCarSheetStyles from './AddCarSheetStyles';
import AddCarSheetWrapper from "react-native-raw-bottom-sheet";
// import CrossIcon from '../../../assets/images/CrossIcon.svg';
import { useNavigation } from '@react-navigation/native';
import { height, width, totalSize } from 'react-native-dimension';
import { useDispatch } from 'react-redux';
import colors from './Colors';
// import DownArrow from '../../../assets/images/DownArrow.svg';

const AddCar = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [registrationNo, setRegistrationNo] = useState('');
    const [modalNumber, setModalNumber] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [color, setColor] = useState('');
    const [makeName, setMakeName] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');
    const [carName, setCarName] = useState('');

    const [isFocusRegistrationNo, setIsFocusRegistrationNo] = useState('');
    const [isFocusModalNumber, setIsFocusModalNumber] = useState('');
    const [isFocusOwnerName, setIsFocusOwnerName] = useState('');
    const [isFocusColor, setIsFocusColor] = useState('');
    const [isFocusMakeName, setIsFocusMakeName] = useState('');
    const [isFocusRegistrationDate, setIsFocusRegistrationDate] = useState('');
    const [isFocusCarName, setIsFocusCarName] = useState('');
    const [isMissingValue, setIsMissingValue] = useState('');

    const [revisionNote, setRevisionNote] = useState('');
    const [isSelectedOrderID, setIsSelectedOrderID] = useState(true);
    const [isSelectedFile, setIsSelectedFile] = useState(true);
    const [isSelectedRevisionNote, setIsSelectedRevisionNote] = useState(true);



    const RestAllValues = () => {
        setRegistrationNo('');
        setModalNumber('');
        setOwnerName('');
        setColor('');
        setMakeName('');
        setRegistrationDate('');
        setCarName('');
    }

    const ResetAllFocus = () => {
        setIsFocusRegistrationNo(false);
        setIsFocusModalNumber(false);
        setIsFocusOwnerName(false);
        setIsFocusColor(false);
        setIsFocusMakeName(false);
        setIsFocusRegistrationDate(false);
        setIsFocusCarName(false);
    }

    const AddCar = () => {
        if(registrationNo==='')
        {
            setIsMissingValue('registrationNo');
        }
        else if(modalNumber==='')
        {
            setIsMissingValue('modalNumber');
        }
        else if(ownerName==='')
        {
            setIsMissingValue('ownerName');
        }
        else if(registrationDate==='')
        {
            setIsMissingValue('registrationDate');
        }
        else if(ownerName==='')
        {
            setIsMissingValue('ownerName');
        }
        else if(modalNumber==='')
        {
            setIsMissingValue('modalNumber');
        }
        else if(ownerName==='')
        {
            setIsMissingValue('ownerName');
        }
        else
        {
            props.AddCarPassRef().current.close();
        }
    }


    return (
        <AddCarSheetWrapper
            ref={props.AddCarPassRef()}
            closeOnDragDown={false}
            closeOnPressMask={true}
            animationType="slide"
            customStyles={{
                wrapper: {
                    backgroundColor: 'rgba(0,0,0,0.45)',
                },
                container: {
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: '#FFFFFF',
                    flex: 2
                },
                draggableIcon: {
                    backgroundColor: "#E4E5E5"
                }

            }}
        >

            <SafeAreaView style={{ flex: 1 }}>
                <View style={[AddCarSheetStyles.mainContainer]}>
                    <View style={{ height: height(0.7), borderRadius: 10, backgroundColor: colors.grey, width: height(4), alignSelf: 'center', marginTop: height(1.2) }} />
                    <View style={[AddCarSheetStyles.SetRowsiseProfileTextandCloseIcon]}>
                        <Text style={[AddCarSheetStyles.ProfileText]}>Car Registration</Text>
                        <TouchableOpacity
                            hitSlop={{ bottom: 15, top: 15, left: 15, right: 15 }}
                            onPress={() => {
                                props.AddCarPassRef().current.close()

                            }
                            }
                            style={[AddCarSheetStyles.CrossIconOuteraview]}>
                            {/* <CrossIcon /> */}
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flexGrow: 1 }}>

                        <Text style={[AddCarSheetStyles.LabelText]}>Registration number *</Text>
                        <TextInput
                            placeholder='Enter registration number'
                            placeholderTextColor='#5F6368'
                            value={registrationNo}
                            onFocus={() => setIsFocusRegistrationNo(true)}
                            onBlur={() => ResetAllFocus()}
                            onChangeText={(text) => {
                                setRegistrationNo(text);
                            }}
                            style={[AddCarSheetStyles.issueDetailTextInput, { color: '#000000', borderColor: isFocusRegistrationNo ? colors.darkBlue : colors.grey }]}
                        />


                        <Text style={[AddCarSheetStyles.LabelText]}>Modal number *</Text>
                        <TextInput
                            placeholder='Enter modal number'
                            placeholderTextColor='#5F6368'
                            value={modalNumber}
                            onFocus={() => setIsFocusModalNumber(true)}
                            onBlur={() => ResetAllFocus()}
                            onChangeText={(text) => {
                                setModalNumber(text)
                            }}
                            style={[AddCarSheetStyles.issueDetailTextInput, { color: '#000000', borderColor: isFocusModalNumber ? colors.darkBlue : colors.grey }]}
                        />


                        <Text style={[AddCarSheetStyles.LabelText]}>Owner name *</Text>
                        <TextInput
                            placeholder='Enter owner name'
                            placeholderTextColor='#5F6368'
                            value={ownerName}
                            onFocus={() => setIsFocusOwnerName(true)}
                            onBlur={() => ResetAllFocus()}
                            onChangeText={(text) => {
                                setOwnerName(text)
                            }}
                            style={[AddCarSheetStyles.issueDetailTextInput, { color: '#000000', borderColor: isFocusOwnerName ? colors.darkBlue : colors.grey }]}
                        />


                        <Text style={[AddCarSheetStyles.LabelText]}>Select date *</Text>
                        <TextInput
                            placeholder='Enter date'
                            placeholderTextColor='#5F6368'
                            value={registrationDate}
                            onFocus={() => setIsFocusRegistrationDate(true)}
                            onBlur={() => ResetAllFocus()}
                            onChangeText={(text) => {
                                setRegistrationDate(text)
                            }}
                            style={[AddCarSheetStyles.issueDetailTextInput, { color: '#000000', borderColor: isFocusRegistrationDate ? colors.darkBlue : colors.grey }]}
                        />


                        <Text style={[AddCarSheetStyles.LabelText]}>Make name *</Text>
                        <TextInput
                            placeholder='Enter make name'
                            placeholderTextColor='#5F6368'
                            value={makeName}
                            onFocus={() => setIsFocusMakeName(true)}
                            onBlur={() => ResetAllFocus()}
                            onChangeText={(text) => {
                                setMakeName(text)
                            }}
                            style={[AddCarSheetStyles.issueDetailTextInput, { color: '#000000', borderColor: isFocusMakeName ? colors.darkBlue : colors.grey }]}
                        />


                        <Text style={[AddCarSheetStyles.LabelText]}>Select color</Text>
                        <TextInput
                            placeholder='Enter color'
                            placeholderTextColor='#5F6368'
                            value={color}
                            onFocus={() => setIsFocusColor(true)}
                            onBlur={() => ResetAllFocus()}
                            onChangeText={(text) => {
                                setColor(text)
                            }}
                            style={[AddCarSheetStyles.issueDetailTextInput, { color: '#000000', borderColor: isFocusColor ? colors.darkBlue : colors.grey }]}
                        />


                        <Text style={[AddCarSheetStyles.LabelText]}>Car name</Text>
                        <TextInput
                            placeholder='Enter car name'
                            placeholderTextColor='#5F6368'
                            value={color}
                            onFocus={() => setIsFocusCarName(true)}
                            onBlur={() => ResetAllFocus()}
                            onChangeText={(text) => {
                                setCarName(text)
                            }}
                            style={[AddCarSheetStyles.issueDetailTextInput, { color: '#000000', borderColor: isFocusCarName ? colors.darkBlue : colors.grey }]}
                        />


                        <TouchableOpacity
                            onPress={() => {
                                Keyboard.dismiss();
                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    //props.AddCarPassRef().current.close();
                                    AddCar();
                                }}
                                style={[AddCarSheetStyles.SignInButtonStyle]}>
                                <Text style={[AddCarSheetStyles.SignInText]}>Add car</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </AddCarSheetWrapper>
    )
}
export default AddCar;