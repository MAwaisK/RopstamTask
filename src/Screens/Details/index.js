import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Platform, ScrollView } from 'react-native';
import Styles from './styles';
import Imports from '../../Constants/Imports';

const Details = () => {
  const navigation = Imports.Navigations.useNavigation();
  const dispatch = Imports.Redux.useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');


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
                <Text style={Styles.HeaderContentText}>{`${selectedCategory}`}Toyota </Text>
              </View>
            </>
          </View>
          <View style={Styles.Body}>
            <View
              style={[Styles.CardContainer, Platform.OS === 'ios' ? Styles.Card : Styles.Card2]}>
              <View style={Styles.LogoConatiner}>
                <Imports.ToyotaLogo width={Imports.ScreenDimensions.height(17)} height={Imports.ScreenDimensions.height(17)} />
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
                      <Text style={[Styles.ValueText]}>Awais</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Modal Name:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>Awais</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Car Name:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>Awais</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Reg Date:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>Awais</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Owner Name:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>Awais</Text>
                    </View>
                  </View>
                  <View style={Styles.RowContainer}>
                    <View style={Styles.LabelView}>
                      <Text style={[Styles.LabelText]}>Color:</Text>
                    </View>
                    <View style={Styles.ValueView}>
                      <Text style={[Styles.ValueText]}>Awais</Text>
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