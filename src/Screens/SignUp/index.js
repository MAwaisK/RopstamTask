import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

import SignUpStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {height, width, totalSize} from 'react-native-dimension';
import KeyBoardStatus from '../../CustomHooks/KeyBoardStatus/KeyBoardStatus';
import colors from '../../Constants/Colors';
import types from '../../Redux/types';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [keyboardStatus] = KeyBoardStatus();

  const [avaiableHeight, setavaiableHeight] = useState(
    Dimensions.get('screen').height,
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const SignUp = () => {};

  return (
    <View style={[SignUpStyles.Main]}>
      <View
        style={[
          SignUpStyles.setAlignment,
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
              //resizeMode='cover'
              source={require('../../assets/Ropstam_Logo.png')}
              style={SignUpStyles.ImageView}
            />
          </View>
          <Text style={[SignUpStyles.HeaderText]}>
            Sign Up to find the ideal car for you!
          </Text>
          <View
            style={[
              SignUpStyles.TextInputView,
              {
                borderBottomColor: isFocusedName
                  ? colors.darkBlue
                  : colors.grey,
              },
            ]}>
            <TextInput
              placeholder={'Enter name'}
              placeholderTextColor={colors.grey}
              value={name}
              onFocus={() => setIsFocusedName(true)}
              onBlur={() => setIsFocusedName(false)}
              onChangeText={text => setName(text)}
              style={SignUpStyles.TextInputStyle}
            />
          </View>

          <View style={{marginVertical: height(1)}} />

          <View
            style={[
              SignUpStyles.TextInputView,
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
              style={SignUpStyles.TextInputStyle}
            />
          </View>
          <View style={{marginVertical: height(1)}} />
          <View
            style={[
              SignUpStyles.TextInputView,
              {
                borderBottomColor: isFocusedPassword
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
              onChangeText={text => setPassword(text)}
              style={SignUpStyles.TextInputStyle}
            />
          </View>

          <TouchableOpacity
            onPress={() => SignUp()}
            style={[SignUpStyles.SignInButtonStyle]}>
            <Text style={[SignUpStyles.SignInText]}>Sign Up</Text>
          </TouchableOpacity>

          <View style={[SignUpStyles.setRowWiseLastText]}>
            <Text style={[SignUpStyles.donthaveAccnt]}>
              Already have an account?
            </Text>
            <TouchableOpacity
              hitSlop={{bottom: 15, top: 15, left: 15, right: 15}}
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              <Text style={[SignUpStyles.BottomLabelText]}>SignIn Instead</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default SignUp;
