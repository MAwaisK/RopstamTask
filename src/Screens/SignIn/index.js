import React, { useState, useMemo } from 'react';
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
  Image
} from 'react-native';

import SignInStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import KeyBoardStatus from '../../CustomHooks/KeyBoardStatus/KeyBoardStatus';

import { height, width, totalSize } from 'react-native-dimension';
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
  const [secureEntry, setSecureEntry] = useState(true)
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

  }



  return (

    <View style={[SignInStyles.LoginMainConatiner, {}]}>
      {/* <StatusBarUI /> */}


      <View style={[SignInStyles.setAlignment,
      {
        height: keyboardStatus == "Keyboard Hidden" ? '50%' : '80%',

      }]}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={
            {}
            // [SignInStyles.ScrollStyle,]
          }
          contentContainerStyle={
            { justifyContent: 'center', height: avaiableHeight - avaiableHeight / 4, }
            //    SignInStyles.ScrollContentConatinewrStyle,
            // ]
          }
        >
          <View style={{ justifyContent: 'center', }}>
            <Image
              //resizeMode='cover'
              source={require('../../assets/Ropstam_Logo.png')}
              style={{ width: '100%', height: '38%' }}
            />
          </View>
          <Text style={[SignInStyles.HiThereText]}>Find the ideal car for you!</Text>
          <View
            style={{ height: height(5), marginTop: height(2), borderBottomWidth: 1, borderBottomColor: isFocusedEmail ? colors.darkBlue : colors.grey }}
          >
            <TextInput
              placeholder={'Enter email'}
              placeholderTextColor={colors.grey}
              value={email}
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
              onChangeText={(text) => setEmail(text)
              }
              style={{ height: height(5), fontSize: totalSize(1.7), color: colors.black }}
            />
          </View>
          <View style={{ marginVertical: height(1) }} />
          <View
            style={{ height: height(5), borderBottomWidth: 1, marginTop: height(2), borderBottomColor: isFocusedPassword ? colors.darkBlue : colors.grey }}
          >
            <TextInput
              placeholder={'Enter password'}
              placeholderTextColor={colors.grey}
              value={password}
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
              onChangeText={(text) => setPassword(text)}
              style={{ height: height(5), fontSize: totalSize(1.7), color: colors.black }}
            />
          </View>



          {/* {!isFocusedSecondField ? (
            <>
              <View
                style={[
                  SignInStyles.TextInputOuterView,
                  {
                    height:
                      avaiableHeight <= 731.4285714285714
                        ? height(6)
                        : height(5),
                  },
                ]}>
                <LockIcon /> 
                <TextInput
                  onFocus={() => {
                    setIsFocusedSecondField(true);
                  }}
                  placeholder="Password"
                  placeholderTextColor={'#D2D2D2'}
                  value={password}
                  secureTextEntry={secureEntry}
                  onChangeText={text => {
                    setPassword(text)
                    setValidationPassword('')
                  }
                  }
                  style={[
                    SignInStyles.TextInputStyle,
                    {
                      height:
                        avaiableHeight <= 731.4285714285714
                          ? height(6)
                          : height(5),
                    },
                  ]}
                />
                <TouchableOpacity
                activeOpacity={1}
                  onPress={() => { setSecureEntry(!secureEntry) }}
                >
                  {
                    secureEntry ?
                      <EyeHiddenContent
                        width={width(6)}
                        height={height(5)}
                      />
                      :
                      <EyeViewContent
                        width={width(6)}
                        height={height(5)}
                      />
                  }
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View
                style={[
                  SignInStyles.FocusedTextInputOuterView,
                  {
                    height:
                      avaiableHeight <= 731.4285714285714
                        ? height(6)
                        : height(5),
                    paddingHorizontal: 12,
                  },
                ]}>
                <View style={[SignInStyles.setTextInputTextAbsolute]}>
                  <Text style={[SignInStyles.FocusedLabelStyle]}>
                    Password
                  </Text>
                </View>
                <TextInput
                  onChangeText={text => {
                    setPassword(text)
                    setValidationPassword('')
                  }
                  }
                  onBlur={() => setIsFocusedSecondField(false)}
                  value={password}
                  secureTextEntry={secureEntry}
                  style={[
                    SignInStyles.FocsedTextInputStyle,
                    {
                      height:
                        avaiableHeight <= 731.4285714285714
                          ? height(6)
                          : height(5),
                      paddingLeft: 0,
                      flexGrow: 1

                    },
                  ]}
                />
                <TouchableOpacity
                activeOpacity={1}
                  onPress={() => { setSecureEntry(!secureEntry) }}
                  style={{ alignSelf: 'flex-end' }}
                >
                  {
                    secureEntry ?
                      <EyeHiddenContent
                        width={width(6)}
                        height={height(5)}
                      />
                      :
                      <EyeViewContent
                        width={width(6)}
                        height={height(5)}
                      />
                  }
                </TouchableOpacity>
              </View>

            </>
          )} */}

          {/* <Text style={SignInStyles.ErrorText}>
            {validationPassword?.length > 0 && validationPassword && validationPassword}
          </Text> */}

          <TouchableOpacity
            onPress={() => SignIn()}
            style={[SignInStyles.SignInButtonStyle]}>
            <Text style={[SignInStyles.SignInText]}>Sign In</Text>
          </TouchableOpacity>

          <View style={[SignInStyles.setRowWiseLastText]}>
            <Text style={[SignInStyles.donthaveAccnt]}>Don’t have an account?</Text>
            <TouchableOpacity
              hitSlop={{ bottom: 15, top: 15, left: 15, right: 15 }}
              onPress={() => {
                navigation.navigate('SignUp')
              }}>
              <Text style={[SignInStyles.ForgetText, { textDecorationLine: 'underline', marginLeft: 8, }]}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>



      {keyboardStatus == "Keyboard Hidden" &&
        <View
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          {/* <HistoricalPic height={120} width={'100%'} /> */}
        </View>
      }
    </View>
  );
};
export default SignIn;
