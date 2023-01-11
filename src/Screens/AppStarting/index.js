import React, { } from 'react';
import { ImageBackground, TouchableOpacity, Text, View, Image, SafeAreaView, } from 'react-native';
import Styles from './styles';
import Imports from '../../Constants/Imports';

const AppStarting = () => {
  const navigation = Imports.Navigations.useNavigation();

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
