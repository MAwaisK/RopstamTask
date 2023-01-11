import React, { } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Platform, ScrollView } from 'react-native';
import Styles from './styles';
import Imports from '../../Constants/Imports';

const Dashboard = () => {
  const navigation = Imports.Navigations.useNavigation();
  const dispatch = Imports.Redux.useDispatch();

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

  const CategoryDetails = category => {
    dispatch({
      type: Imports.Types.SELECTED_CATEGORY,
      selectedCategory: category,
    });
    navigation.navigate('Categories');
  };

  const Signout = () => {
    dispatch({
      type: Imports.Types.LOGIN_KEY,
      loginKey: '',
    });
  };

  return (
    <>
      <SafeAreaView style={Styles.SafeAreaStatus} />
      <SafeAreaView style={Styles.SafeAreaContainer}>
        <View style={[Styles.Container]}>
          <View style={[Styles.Header]}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => Signout()}
              style={Styles.SignoutContainer}>
              <Text style={Styles.SignoutText}>Sign out</Text>
            </TouchableOpacity>
            <>
              <View style={Styles.HeaderContent}>
                <Text style={Styles.HeaderContentText}>
                  Dashboard{' '}
                </Text>
              </View>
            </>
          </View>

          <View style={Styles.Body}>
            <View
              style={[
                Styles.CardContainer,
                Platform.OS === 'ios'
                  ? Styles.Card
                  : Styles.Card2,
              ]}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.InnerCardContainer}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => CategoryDetails('BMW')}
                    style={[
                      Platform.OS === 'ios'
                        ? Styles.Card3
                        : Styles.Card4,
                      Styles.InnerCardLeftStyle,
                    ]}>
                    <View style={Styles.LogoContainer}>
                      <Imports.BMWLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                    </View>
                    <Text style={Styles.CardLabelText}>(12)</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => CategoryDetails('Honda')}
                    style={[
                      Platform.OS === 'ios'
                        ? Styles.Card3
                        : Styles.Card4,
                      Styles.InnerCardRightStyle,
                    ]}>
                    <View style={Styles.LogoContainer}>
                      <Imports.HondaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                    </View>
                    <Text style={Styles.CardLabelText}>(12)</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.InnerCardContainer}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => CategoryDetails('Hyundai')}
                    style={[
                      Platform.OS === 'ios'
                        ? Styles.Card3
                        : Styles.Card4,
                      Styles.InnerCardLeftStyle,
                    ]}>
                    <View style={Styles.LogoContainer}>
                      <Imports.HyundaiLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                    </View>
                    <Text style={Styles.CardLabelText}>(12)</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => CategoryDetails('Mazda')}
                    style={[
                      Platform.OS === 'ios'
                        ? Styles.Card3
                        : Styles.Card4,
                      Styles.InnerCardRightStyle,
                    ]}>
                    <View style={Styles.LogoContainer}>
                      <Imports.MazdaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                    </View>
                    <Text style={Styles.CardLabelText}>(12)</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.InnerCardContainer}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => CategoryDetails('Mercedes')}
                    style={[
                      Platform.OS === 'ios'
                        ? Styles.Card3
                        : Styles.Card4,
                      Styles.InnerCardLeftStyle,
                    ]}>
                    <View style={Styles.LogoContainer}>
                      <Imports.MercedesLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                    </View>
                    <Text style={Styles.CardLabelText}>(12)</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => CategoryDetails('Suzukie')}
                    style={[
                      Platform.OS === 'ios'
                        ? Styles.Card3
                        : Styles.Card4,
                      Styles.InnerCardRightStyle,
                    ]}>
                    <View style={Styles.LogoContainer}>
                      <Imports.SuzukiLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                    </View>
                    <Text style={Styles.CardLabelText}>(12)</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.InnerCardContainer}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => CategoryDetails('Tesla')}
                    style={[
                      Platform.OS === 'ios'
                        ? Styles.Card3
                        : Styles.Card4,
                      Styles.InnerCardLeftStyle,
                    ]}>
                    <View style={Styles.LogoContainer}>
                      <Imports.TeslaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                    </View>
                    <Text style={Styles.CardLabelText}>(12)</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => CategoryDetails('Toyota')}
                    style={[
                      Platform.OS === 'ios'
                        ? Styles.Card3
                        : Styles.Card4,
                      Styles.InnerCardRightStyle,
                    ]}>
                    <View style={Styles.LogoContainer}>
                      <Imports.ToyotaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                    </View>
                    <Text style={Styles.CardLabelText}>(12)</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Dashboard;
