import React, { useEffect, useState } from 'react';
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

  const [bmwCount, setBMWCount] = useState(0);
  const [hondaCount, setHondaCount] = useState(0);
  const [hyundaiCount, setHyundaiCount] = useState(0);
  const [mazdaCount, setMazdaCount] = useState(0);
  const [mercedesCount, setMercedesCount] = useState(0);
  const [suzukieCount, setSuzukieCount] = useState(0);
  const [teslaCount, setTeslaCount] = useState(0);
  const [toyotaCount, setToyotaCount] = useState(0);


  const GetCount = () => {
    let bmw_Count = 0;
    let honda_Count = 0;
    let hyundai_Count = 0;
    let mazda_Count = 0;
    let mercedes_Count = 0;
    let suzukie_Count = 0;
    let tesla_Count = 0;
    let toyota_Count = 0;
    for (var v = 0; v < carData.length; v++) {

      if (carData[v].make_Name === 'BMW') {
        bmw_Count = bmw_Count + 1
         setBMWCount(Number(bmw_Count));
      }
      if (carData[v].make_Name === 'Honda') {
        honda_Count = honda_Count + 1
        setHondaCount(Number(honda_Count));
      }
      if (carData[v].make_Name === 'Hyundai') {
        hyundai_Count = hyundai_Count + 1
        setHyundaiCount(Number(hyundai_Count))
      }
      if (carData[v].make_Name === 'Mazda') {
        mazda_Count = mazda_Count + 1
          setMazdaCount(Number(mazda_Count))
      }
      if (carData[v].make_Name === 'Mercedes') {
        mercedes_Count = mercedes_Count + 1
          setMercedesCount(Number(mercedes_Count))
      }
      if (carData[v].make_Name === 'Suzukie') {
        suzukie_Count = suzukie_Count + 1
          setSuzukieCount(Number(suzukie_Count))
      }
      if (carData[v].make_Name === 'Tesla') {
        tesla_Count = tesla_Count + 1
          setTeslaCount(Number(tesla_Count))
      }
      if (carData[v].make_Name === 'Toyota') {
        toyota_Count = toyota_Count + 1
          setToyotaCount(Number(toyota_Count))
      }
    }
  }


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

    GetCount();

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
                            {item?.Label === 'BMW' ? <Text style={Styles.CardLabelText}>({`${bmwCount}`})</Text> :
                              item?.Label === 'Honda' ? <Text style={Styles.CardLabelText}>({`${hondaCount}`})</Text> :
                                item?.Label === 'Hyundai' ? <Text style={Styles.CardLabelText}>({`${hyundaiCount}`})</Text> :
                                  item?.Label === 'Mazda' ? <Text style={Styles.CardLabelText}>({`${mazdaCount}`})</Text> :
                                    item?.Label === 'Mercedes' ? <Text style={Styles.CardLabelText}>({`${mercedesCount}`})</Text> :
                                      item?.Label === 'Suzukie' ? <Text style={Styles.CardLabelText}>({`${suzukieCount}`})</Text> :
                                        item?.Label === 'Tesla' ? <Text style={Styles.CardLabelText}>({`${teslaCount}`})</Text> :
                                          item?.Label === 'Toyota' && <Text style={Styles.CardLabelText}>({`${toyotaCount}`})</Text>
                            }
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
