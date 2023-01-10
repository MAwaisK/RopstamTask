import React, {useState, useMemo} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
  Image,
} from 'react-native';

import SignInStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import KeyBoardStatus from '../../CustomHooks/KeyBoardStatus/KeyBoardStatus';

import {height, width, totalSize} from 'react-native-dimension';
import EyeHiddenContent from '../../assets/eyeHiddenContent.svg';
import EyeViewContent from '../../assets/eyeViewContent.svg';
import colors from '../../Constants/Colors';
import types from '../../Redux/types';

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [avaiableHeight, setavaiableHeight] = useState(
    Dimensions.get('screen').height,
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [validationEmail, setValidationEmail] = useState('');

  const [validationPassword, setValidationPassword] = useState('');

  const [keyboardStatus] = KeyBoardStatus();

  const [loading, setLoading] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const loginKey = useSelector(state => state?.auth?.loginKey);

  const SignIn = () => {
    // navigation.navigate('SignUp')
    let testKey = 'Umair';
    dispatch({
      type: types.LOGIN_KEY,
      loginKey: testKey,
    });
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
            height: avaiableHeight - avaiableHeight / 4,
          }}>
          <View style={{justifyContent: 'center'}}>
            <Image
              source={require('../../assets/Ropstam_Logo.png')}
              style={SignInStyles.ImageView}
            />
          </View>
          <Text style={[SignInStyles.HeaderText]}>
            Find the ideal car for you!
          </Text>
          <View
            style={[
              SignInStyles.TextInputView,
              {
                borderBottomColor: isFocusedEmail
                  ? colors.darkBlue
                  : colors.grey,
              },
            ]}>
            <TextInput
              placeholder={'Enter email'}
              placeholderTextColor={colors.grey}
              value={email}
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
              onChangeText={text => setEmail(text)}
              style={SignInStyles.TextInputStyle}
            />
          </View>
          <View style={{marginVertical: height(1)}} />
          <View
            style={[
              SignInStyles.TextInputView,
              {
                flexDirection: 'row',
                borderBottomColor: isFocusedEmail
                  ? colors.darkBlue
                  : colors.grey,
              },
            ]}>
            <TextInput
              placeholder={'Enter password'}
              placeholderTextColor={colors.grey}
              value={password}
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
              secureTextEntry={secureEntry}
              onChangeText={text => setPassword(text)}
              style={[SignInStyles.TextInputStyle, {width: '90%'}]}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSecureEntry(!secureEntry)}>
              {secureEntry ? (
                <EyeHiddenContent width={height(3.5)} height={height(3.5)} />
              ) : (
                <EyeViewContent width={height(3.5)} height={height(3.5)} />
              )}
            </TouchableOpacity>
          </View>
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
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={[SignInStyles.BottomText]}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default SignIn;
