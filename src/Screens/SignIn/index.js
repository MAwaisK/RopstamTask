import React, {useState, useMemo} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import SignInStyles from './styles';
import Imports from '../../Constants/Imports';

const SignIn = () => {
  const navigation = Imports.Navigations.useNavigation();
  const dispatch = Imports.Redux.useDispatch();
  const loginKey = Imports.Redux.useSelector(state => state?.auth?.loginKey);
  const user = Imports.Redux.useSelector(state => state?.app?.user);
  const [keyboardStatus] = Imports.KeyBoardStatus();
  const [avaiableHeight, setavaiableHeight] = useState(
    Dimensions.get('screen').height,
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isMissingValue, setIsMissingValue] = useState('');
  const SignIn = () => {
    if (email === '') {
      setIsMissingValue('email');
    } else if (password === '') {
      setIsMissingValue('password');
    } else {
      let statusEmail = 0;
      let statusPassword = 0;
      for (a = 0; a < user?.length; a++) {
        if (user[a].email !== email) {
          statusEmail = statusEmail - 1;
        }
        if (user[a].email === email) {
          statusEmail = statusEmail + 1000;
        }
        if (user[a].password !== password) {
          statusPassword = statusPassword - 1;
        }
        if (user[a].email === email && user[a].password === password) {
          dispatch({type: Imports.Types.LOGIN_KEY, loginKey: user[a].name});
        }
      }
      if (statusEmail < 0) {
        setIsMissingValue('IncorrectEmail');
      } else {
        if (statusPassword === -1) {
          setIsMissingValue('IncorrectPassword');
        }
      }
    }
  };

  return (
    <View style={[SignInStyles.Main, {}]}>
      <View
        style={[
          SignInStyles.setAlignment,
          {
            height: keyboardStatus == 'Keyboard Hidden' ? '50%' : '80%',
          },
        ]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center',
            height: avaiableHeight - avaiableHeight / 5,
          }}>
          <View style={{justifyContent: 'center'}}>
            <Image source={Imports.LogoImage} style={SignInStyles.ImageView} />
          </View>
          <Text style={[SignInStyles.HeaderText]}>
            Find the ideal car for you!
          </Text>
          <View
            style={[
              SignInStyles.TextInputView,
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
              onFocus={() => {
                setIsFocusedEmail(true);
                setIsMissingValue('');
              }}
              onBlur={() => setIsFocusedEmail(false)}
              onChangeText={text => setEmail(text)}
              style={SignInStyles.TextInputStyle}
            />
          </View>
          {isMissingValue === 'IncorrectEmail' && (
            <Text
              style={{
                color: 'red',
                marginTop: Imports.ScreenDimensions.height(0.6),
              }}>
              Please enter valid email
            </Text>
          )}
          <View style={{marginVertical: Imports.ScreenDimensions.height(1)}} />
          <View
            style={[
              SignInStyles.TextInputView,
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
              style={[SignInStyles.TextInputStyle, {width: '90%'}]}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSecureEntry(!secureEntry)}>
              {secureEntry ? (
                <Imports.EyeHiddenContent
                  width={Imports.ScreenDimensions.height(3.5)}
                  height={Imports.ScreenDimensions.height(3.5)}
                />
              ) : (
                <Imports.EyeViewContent
                  width={Imports.ScreenDimensions.height(3.5)}
                  height={Imports.ScreenDimensions.height(3.5)}
                />
              )}
            </TouchableOpacity>
          </View>
          {isMissingValue === 'IncorrectPassword' && (
            <Text
              style={{
                color: 'red',
                marginTop: Imports.ScreenDimensions.height(0.6),
              }}>
              Please enter valid password
            </Text>
          )}
          <TouchableOpacity
            onPress={() => SignIn()}
            style={[SignInStyles.SignInButtonStyle]}>
            <Text style={[SignInStyles.SignInText]}>Sign In</Text>
          </TouchableOpacity>

          <View style={[SignInStyles.setRowWiseLastText]}>
            <Text style={[SignInStyles.donthaveAccnt]}>
              Don’t have an account?
            </Text>
            <TouchableOpacity
              hitSlop={{bottom: 15, top: 15, left: 15, right: 15}}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={[SignInStyles.BottomText]}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default SignIn;
