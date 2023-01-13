import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Dimensions, Image, StatusBar } from 'react-native';
import Styles from './styles';
import Imports from '../../Constants/Imports';
import { emailRegex } from '../../Constants/emailRegex';

const SignIn = () => {
  const navigation = Imports.Navigations.useNavigation();
  const dispatch = Imports.Redux.useDispatch();
  const loginKey = Imports.Redux.useSelector(state => state?.auth?.loginKey);
  const user = Imports.Redux.useSelector(state => state?.app?.user);
  const [keyboardStatus] = Imports.KeyBoardStatus();
  const [avaiableHeight, setavaiableHeight] = useState(Dimensions.get('screen').height);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isMissingValue, setIsMissingValue] = useState('');

  const SignIn = () => {
    if (email === '') {
      setIsMissingValue('email');
    }
    else if (!emailRegex.test(email)) {
      setIsMissingValue('NotEmail');
    }
    else if (password === '') {
      setIsMissingValue('password');
    } else {
      let userFlag = false;
      for (var a = 0; a < user?.length; a++) {
        if (user[a].email === email && user[a].password === password) {
          dispatch({ type: Imports.Types.LOGIN_KEY, loginKey: user[a].name });
          userFlag = false;
        }
        else { userFlag = true }
      }
      if (userFlag) { alert('Access Denied!') }
    }
  };

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Imports.Colors.white} />
      <View style={[Styles.Main, {}]}>
        <View
          style={[
            Styles.setAlignment,
            {
              height: keyboardStatus == 'Keyboard Hidden' ? '50%' : '80%',
            },
          ]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: 'center',
              height: avaiableHeight - avaiableHeight / 4,
            }}>
            <View style={{ justifyContent: 'center' }}>
              <Image source={Imports.LogoImage} style={Styles.ImageView} />
            </View>
            <Text style={[Styles.HeaderText]}>Find the ideal car for you!</Text>
            <View
              style={[
                Styles.TextInputView,
                {
                  borderBottomColor:
                    isMissingValue === 'email'
                      ? Imports.Colors.red
                      : isFocusedEmail
                        ? Imports.Colors.darkBlue
                        : Imports.Colors.grey,
                },
              ]}>
              <TextInput
                placeholder={'Enter email'}
                placeholderTextColor={Imports.Colors.grey}
                value={email}
                keyboardType={'email-address'}
                onFocus={() => {
                  setIsFocusedEmail(true);
                  setIsMissingValue('');
                }}
                onBlur={() => setIsFocusedEmail(false)}
                onChangeText={text => setEmail(text)}
                style={Styles.TextInputStyle} />
            </View>
            {isMissingValue === 'IncorrectEmail' || isMissingValue === 'NotEmail' && (
              <Text
                style={Styles.ErrorText}>Please enter valid email</Text>
            )}
            <View style={{ marginVertical: Imports.ScreenDimensions.height(1) }} />
            <View
              style={[
                Styles.TextInputView,
                {
                  flexDirection: 'row',
                  borderBottomColor:
                    isMissingValue === 'password'
                      ? Imports.Colors.red
                      : isFocusedPassword
                        ? Imports.Colors.darkBlue
                        : Imports.Colors.grey,
                },
              ]}>
              <TextInput
                placeholder={'Enter password'}
                placeholderTextColor={Imports.Colors.grey}
                value={password}
                onFocus={() => {
                  setIsFocusedPassword(true);
                  setIsMissingValue('');
                }}
                onBlur={() => setIsFocusedPassword(false)}
                secureTextEntry={secureEntry}
                onChangeText={text => setPassword(text)}
                style={[Styles.TextInputStyle, { width: '90%' }]} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSecureEntry(!secureEntry)}>
                {secureEntry ? (
                  <Imports.EyeHiddenContent
                    width={Imports.ScreenDimensions.height(3.5)}
                    height={Imports.ScreenDimensions.height(3.5)} />
                ) : (
                  <Imports.EyeViewContent
                    width={Imports.ScreenDimensions.height(3.5)}
                    height={Imports.ScreenDimensions.height(3.5)} />
                )}
              </TouchableOpacity>
            </View>
            {isMissingValue === 'IncorrectPassword' && (
              <Text
              style={Styles.ErrorText}>Please enter valid password</Text>
            )}
            <TouchableOpacity
              onPress={() => SignIn()}
              style={[Styles.SignInButtonStyle]}>
              <Text style={[Styles.SignInText]}>Sign In</Text>
            </TouchableOpacity>

            <View style={[Styles.setRowWiseLastText]}>
              <Text style={[Styles.donthaveAccnt]}>Don’t have an account?</Text>
              <TouchableOpacity
                hitSlop={{ bottom: 15, top: 15, left: 15, right: 15 }}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={[Styles.BottomText]}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
export default SignIn;
