import React, {useEffect} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import Styles from './styles';
import Imports from '../../Constants/Imports';
import CarData from '../../Constants/CarData';
import MakeList from '../../Constants/MakeList';
import ColorList from '../../Constants/ColorList';

const AppStarting = () => {
  const navigation = Imports.Navigations.useNavigation();
  const dispatch = Imports.Redux.useDispatch();
  const carData = Imports.Redux.useSelector(state => state?.app?.carData);

  useEffect(() => {
    if (carData?.length === 0) {
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
  }, []);

  return (
    <ImageBackground
      source={Imports.BackgroundImage}
      style={Styles.ImageContainer}>
      <SafeAreaView style={Styles.SafeAreaView}>
        <View style={Styles.ContentContainer}>
          <View style={Styles.HeaderContentView}>
            <Image
              resizeMode="contain"
              source={Imports.LogoImage}
              style={Styles.LogoStyle}
            />
          </View>
          <View style={Styles.FooterContentView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={[Styles.SignUpButtonStyle]}>
              <Text style={[Styles.SignUpText]}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
              style={[Styles.SignInButtonStyle]}>
              <Text style={[Styles.SignInText]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default AppStarting;
