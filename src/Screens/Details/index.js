import React, { useState,useRef,useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Platform, ScrollView } from 'react-native';
import Styles from './styles';
import Imports from '../../Constants/Imports';
import EditCarSheet from '../../Constants/EditCarSheet';

const Details = (props) => {
  const navigation = Imports.Navigations.useNavigation();
  const selectedCategory = Imports.Redux.useSelector(state => state?.app?.selectedCategory);
  const carDetails = Imports.Redux.useSelector(state => state?.app?.carDetails);

  const EditCarSheetRef = useRef();
  const EditCarPassRef = () => EditCarSheetRef;


  const EditCarButtonView = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          EditCarPassRef().current.open();
        }}
        style={[Styles.SignInButtonStyle]}>
        <Text style={[Styles.SignInText]}>Update</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView style={Styles.SafeArea} />
      <SafeAreaView style={{ flex: 1, backgroundColor: Imports.Colors.white }}>
        <View style={[Styles.Container]}>

          <View style={[Styles.Header]}>
            <>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={Styles.ArrowBackContainer}>
                <Imports.ArrowBack />
              </TouchableOpacity>
              <View style={Styles.HeaderContentContainer}>
                <Text style={Styles.HeaderContentText}>{`${selectedCategory}`} </Text>
              </View>
            </>
          </View>
          <View style={Styles.Body}>
            <View
              style={[Styles.CardContainer, Platform.OS === 'ios' ? Styles.Card : Styles.Card2]}>
              <View style={Styles.LogoConatiner}>
                {carDetails?.make_Name === 'BMW' ? <Imports.BMWLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                  : carDetails?.make_Name === 'Honda' ? <Imports.HondaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                    : carDetails?.make_Name === 'Hyundai' ? <Imports.HyundaiLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                      : carDetails?.make_Name === 'Mazda' ? <Imports.MazdaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                        : carDetails?.make_Name === 'Mercedes' ? <Imports.MercedesLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                          : carDetails?.make_Name === 'Suzukie' ? <Imports.SuzukiLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                            : carDetails?.make_Name === 'Tesla' ? <Imports.TeslaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                              : carDetails?.make_Name === 'Toyota' && <Imports.ToyotaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />}
              </View>
              <ScrollView
                style={Styles.ScrollViewContainer}
                showsVerticalScrollIndicator={false}>
                <View style={Styles.ContentContainer}>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Reg No:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>{carDetails?.registration_No}</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Make Name:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>{carDetails?.make_Name}</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Car Name:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>{carDetails?.car_Name}</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Model Number:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>{carDetails?.modal_Number}</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Owner Name:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>{carDetails?.owner_Name}</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Color:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>{carDetails?.color}</Text>
                    </View>
                  </View>
                  
                </View>
                
              </ScrollView>
              {EditCarButtonView()}
            </View>
          </View>
        </View>
        <EditCarSheet EditCarPassRef={EditCarPassRef} />
      </SafeAreaView>
    </>
  )
}

export default Details