import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Dimensions, Image, StatusBar } from 'react-native';
import Styles from './styles';
import Imports from '../../Constants/Imports';
import { emailRegex } from '../../Constants/emailRegex';

const SignUp = () => {
  const dispatch = Imports.Redux.useDispatch();
  const navigation = Imports.Navigations.useNavigation();
  const user = Imports.Redux.useSelector(state => state?.app?.user);
  const [keyboardStatus] = Imports.KeyBoardStatus();
  const [avaiableHeight, setavaiableHeight] = useState(Dimensions.get('screen').height);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isMissingValue, setIsMissingValue] = useState('');

  const SignUp = () => {
    if (name === '') {
      setIsMissingValue('name');
    } else if (email === '') {
      setIsMissingValue('email');
    }
    else if (!emailRegex.test(email)) {
      setIsMissingValue('InvalidEmail');
    }
    else if (password === '') {
      setIsMissingValue('password');
    } else if (password?.length < 5) {
      setIsMissingValue('ShortPassword');
    } else {
      if (user?.length === 0) {
        var userData = [
          {
            name: name,
            email: email,
            password: password,
          },
        ];
        dispatch({ type: Imports.Types.USER, user: userData });
        dispatch({ type: Imports.Types.LOGIN_KEY, loginKey: name });
      } else {
        var repeatEmail = 0;
        for (var a = 0; a < user?.length; a++) {
          if (user[a].email === email) {
            repeatEmail = 1
            alert('Email already exists')
          }
        }
        if (repeatEmail === 0) {
          var userData = {
            name: name,
            email: email,
            password: password,
          };
          let userDataArr = user;
          userDataArr.push(userData);
          dispatch({ type: Imports.Types.USER, user: userDataArr });
          dispatch({ type: Imports.Types.LOGIN_KEY, loginKey: name });
        }
      }
    }
  };

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Imports.Colors.white} />
      <View style={[Styles.Main]}>
        <View style={[Styles.setAlignment]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: 'center',
              height: avaiableHeight - avaiableHeight / 4,
            }}>
            <View style={{ justifyContent: 'center' }}>
              <Image
                source={Imports.LogoImage}
                style={Styles.ImageView} />
            </View>
            <Text style={[Styles.HeaderText]}>Sign Up to find the ideal car for you!</Text>
            <View style={[
              Styles.TextInputView,
              {
                borderBottomColor:
                  isMissingValue === 'name'
                    ? Imports.Colors.red
                    : isFocusedName
                      ? Imports.Colors.darkBlue
                      : Imports.Colors.grey,
              }
            ]}>
              <TextInput
                placeholder={'Enter name'}
                placeholderTextColor={Imports.Colors.grey}
                value={name}
                onFocus={() => {
                  setIsFocusedName(true);
                  setIsMissingValue('');
                }}
                onBlur={() => setIsFocusedName(false)}
                onChangeText={text => setName(text)}
                style={Styles.TextInputStyle} />
            </View>

            <View style={{ marginVertical: Imports.ScreenDimensions.height(1) }} />

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
            {isMissingValue === 'InvalidEmail' && (
              <Text
                style={Styles.ErrorText}>Please enter valid email</Text>)}
            <View style={{ marginVertical: Imports.ScreenDimensions.height(1) }} />
            <View
              style={[
                Styles.TextInputView,
                {
                  borderBottomColor:
                    isMissingValue === 'password'
                      ? Imports.Colors.red
                      : isFocusedPassword
                        ? Imports.Colors.darkBlue
                        : Imports.Colors.grey,
                }
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
                onChangeText={text => setPassword(text)}
                style={Styles.TextInputStyle} />
            </View>
            {isMissingValue === 'ShortPassword' && (
              <Text style={Styles.ErrorText}>Please enter more than 5 character</Text>)}

            <TouchableOpacity
              onPress={() => SignUp()}
              style={[Styles.SignInButtonStyle]}>
              <Text style={[Styles.SignInText]}>Sign Up</Text>
            </TouchableOpacity>
            <View style={[Styles.setRowWiseLastText]}>
              <Text style={[Styles.donthaveAccnt]}>Already have an account?</Text>
              <TouchableOpacity
                hitSlop={{ bottom: 15, top: 15, left: 15, right: 15 }}
                onPress={() => { navigation.navigate('SignIn') }}>
                <Text style={[Styles.BottomLabelText]}>Sign In Instead</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
export default SignUp;
