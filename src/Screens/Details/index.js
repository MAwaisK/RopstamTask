import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Platform, ScrollView } from 'react-native';
import Styles from './styles';
import Imports from '../../Constants/Imports';

const Details = (props) => {
  const { car_Name, color, make_Name, modal_Number, owner_Name, registration_Date, registration_No } = props?.route?.params?.item;
  const navigation = Imports.Navigations.useNavigation();
  const selectedCategory = Imports.Redux.useSelector(state => state?.app?.selectedCategory);


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
                {make_Name === 'BMW' ? <Imports.BMWLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                  : make_Name === 'Honda' ? <Imports.HondaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                    : make_Name === 'Hyundai' ? <Imports.HyundaiLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                      : make_Name === 'Mazda' ? <Imports.MazdaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                        : make_Name === 'Mercedes' ? <Imports.MercedesLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                          : make_Name === 'Suzukie' ? <Imports.SuzukiLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                            : make_Name === 'Tesla' ? <Imports.TeslaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                              : make_Name === 'Toyota' && <Imports.ToyotaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />}
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
                      <Text style={[Styles.ValueText]}>{registration_No}</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Make Name:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>{make_Name}</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Car Name:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>{car_Name}</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Model Number:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>{modal_Number}</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Owner Name:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>{owner_Name}</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Color:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>{color}</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Details