import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Platform, ScrollView } from 'react-native';
import Styles from './styles';
import Imports from '../../Constants/Imports';
import Data from '../../Constants/Data';
import CarData from '../../Constants/CarData';
import MakeList from '../../Constants/MakeList';
import ColorList from '../../Constants/ColorList';

const Dashboard = () => {
  const navigation = Imports.Navigations.useNavigation();
  const dispatch = Imports.Redux.useDispatch();
  const carData = Imports.Redux.useSelector(state => state?.app?.carData);



  useEffect(() => {
    console.log("carData", carData?.length);
    if (!carData) {
      dispatch({
        type: Imports.Types.CAR_DATA,
        carData: CarData,
      });
    }
    dispatch({
      type: Imports.Types.MAKE_LIST,
      makeList: MakeList,
    });
    dispatch({
      type: Imports.Types.COLOR_LIST,
      colorList: ColorList,
    });

  }, [])


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
                <Text style={[Styles.HeaderContentText, { fontSize: Imports.ScreenDimensions.totalSize(1.7), alignSelf: 'flex-end', marginRight: Imports.ScreenDimensions.height(2.5) }]}>
                  Total Cars: {carData.length}
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
                  {
                    Data.map((item, index) => {

                      return (
                        <TouchableOpacity
                          key={index}
                          activeOpacity={0.8}
                          onPress={() => CategoryDetails(item?.Label)}
                          style={[
                            Platform.OS === 'ios'
                              ? Styles.Card3
                              : Styles.Card4,
                            Styles.InnerCardLeftStyle,
                          ]}>
                          <View style={Styles.LogoContainer}>
                            {item?.Label === 'BMW' ? <Imports.BMWLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                              : item?.Label === 'Honda' ? <Imports.HondaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                                : item?.Label === 'Hyundai' ? <Imports.HyundaiLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                                  : item?.Label === 'Mazda' ? <Imports.MazdaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                                    : item?.Label === 'Mercedes' ? <Imports.MercedesLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                                      : item?.Label === 'Suzukie' ? <Imports.SuzukiLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                                        : item?.Label === 'Tesla' ? <Imports.TeslaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />
                                          : item?.Label === 'Toyota' && <Imports.ToyotaLogo width={Imports.ScreenDimensions.height(8)} height={Imports.ScreenDimensions.height(8)} />}
                          </View>
                        </TouchableOpacity>
                      )
                    })
                  }
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
