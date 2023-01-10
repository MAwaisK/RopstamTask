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
  Image,
  StatusBar,
} from 'react-native';

import LoginStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import KeyBoardStatus from '../../CustomHooks/KeyBoardStatus/KeyBoardStatus';

import { height, width, totalSize } from 'react-native-dimension';
import EyeHiddenContent from '../../assets/eyeHiddenContent.svg';
import EyeViewContent from '../../assets/eyeViewContent.svg';
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

const SignUp = ()=>{

  
  dispatch({
    type: types.USER,
    user: res?.data?.user,
});
}

  return (
    <View style={[LoginStyles.LoginMainConatiner]}>
     <StatusBar
            barStyle={'dark-content'}
            backgroundColor={colors.black}
          />
      <View style={[LoginStyles.setAlignment,
      {
        height: keyboardStatus == "Keyboard Hidden" ? '50%' : '80%',

      }]}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={
            {}
            // [LoginStyles.ScrollStyle,]
          }
          contentContainerStyle={
            { justifyContent: 'center', height: avaiableHeight - avaiableHeight / 4, }
            //    LoginStyles.ScrollContentConatinewrStyle,
            // ]
          }
        >
          <View style={{justifyContent:'center',}}>
            <Image
              //resizeMode='cover'
              source={require('../../assets/Ropstam_Logo.png')}
              style={{ width: '100%', height: '38%' }}
            />
          </View>
          <Text style={[LoginStyles.HiThereText]}>Sign Up to find the ideal car for you!</Text>
          <View
            style={{ height: height(5), marginTop: height(2), borderBottomWidth: 1, borderBottomColor: isFocusedName ? colors.darkBlue : colors.grey }}
          >
            <TextInput
              placeholder={'Enter name'}
              placeholderTextColor={colors.grey}
              value={name}
              onFocus={() => setIsFocusedName(true)}
              onBlur={() => setIsFocusedName(false)}
              onChangeText={(text) => setName(text)
              }
              style={{ height: height(5), fontSize: totalSize(1.7), color: colors.black }}
            />
          </View>


          <View style={{ marginVertical: height(1) }} />

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

          <TouchableOpacity
            onPress={() => SignUp()}
            style={[LoginStyles.SignInButtonStyle]}>
            <Text style={[LoginStyles.SignInText]}>Sign Up</Text>
          </TouchableOpacity>

          <View style={[LoginStyles.setRowWiseLastText]}>
            <Text style={[LoginStyles.donthaveAccnt]}>Already have an account?</Text>
            <TouchableOpacity
              hitSlop={{ bottom: 15, top: 15, left: 15, right: 15 }}
              onPress={() => {
                navigation.navigate('SignIn')
              }}>
              <Text style={[LoginStyles.ForgetText, { textDecorationLine: 'underline', marginLeft: 8, }]}>SignIn Instead</Text>
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
export default SignUp;
