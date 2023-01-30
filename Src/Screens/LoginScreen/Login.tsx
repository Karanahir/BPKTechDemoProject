import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
} from 'react-native';
import styles from './styles';
import {Card} from 'react-native-paper';
import Constant from '../../Helper/Constant';
import Header from '../../Components/Header';
import axios from 'axios';
// redux hooks
import {useSelector, useDispatch} from 'react-redux';
// actions
import {isLogin} from '../../Redux/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [data, setData] = useState(false);

  const auth = useSelector(state => state.auth);
  // initialize action dispatcher
  const dispatch = useDispatch();
  // define a component mode state
  const [isLog, setIsLog] = useState(auth.isLogin);

  // Handle changing the theme mode
  async function handleLogin() {
    dispatch(isLogin(auth.isLogin === false ? true : false));
    await AsyncStorage.setItem(Constant.isLogin, 'true');
  }
  // Update the app Incase the theme mode changes
  useEffect(() => {
    checkLogin();
    setIsLog(auth.isLogin);
    if (auth.isLogin === true) {
      navigation.navigate('TabNavigation');
    }
  }, [auth]);

  const checkLogin = async () => {
    try {
      const value = await AsyncStorage.getItem(Constant.isLogin);
      if (value !== null) {
        if (value === 'true') {
          navigation.navigate('TabNavigation');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  async function doLogin() {
    try {
      axios
        .post('https://publicapi.mybuildbase.com/api/User/AppLogin', {
          domain: 'rohit',
          email: email,
          Password: password,
        })
        .then(function (response) {
          console.log('Res', response.data);
          AsyncStorage.setItem(Constant.isLogin, 'true');
          AsyncStorage.setItem(Constant.user, JSON.stringify(response.data));
          navigation.navigate('TabNavigation');
        })
        .catch(function (error) {
          console.log('error', error);
          notifyMessage('Invalid Credentials');
        });
    } catch (e) {
      console.log('Get Data Error', e);
    }
  }

  const validateEmail = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setIsEmailValid(false);
      return false;
    } else {
      setIsEmailValid(true);
      setEmail(text);
      return true;
    }
  };

  const validatePassword = text => {
    if (text.length >= 1) {
      setPassword(text);
      setIsPasswordValid(true);
      return true;
    } else {
      setIsPasswordValid(false);
      return false;
    }
  };

  useEffect(() => {
    if (isEmailValid && isPasswordValid) {
      setIsValid(true);
    }
  }, [isEmailValid, isPasswordValid]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.itemView, {width: '100%'}]}>
        <Header title="Login" />
        <Card style={[styles.cardStyle, {marginTop: '50%'}]}>
          <View style={[styles.inputView, {width: '100%'}]}>
            <TextInput
              style={{color: 'black', width: '100%'}}
              placeholder="Enter Email"
              placeholderTextColor="grey"
              numberOfLines={1}
              autoCapitalize="none"
              onChangeText={email => {
                console.log(validateEmail(email));
              }}
            />
          </View>
        </Card>
        <Card style={[styles.cardStyle]}>
          <View style={[styles.inputView, {width: '100%'}]}>
            <TextInput
              style={{color: 'black', width: '100%'}}
              placeholder="Enter Password"
              placeholderTextColor="grey"
              numberOfLines={1}
              secureTextEntry={true}
              onChangeText={password => {
                console.log(validatePassword(password));
              }}
            />
          </View>
        </Card>

        <Card
          disabled={!isValid}
          style={[
            styles.cardStyle1,
            {
              elevation: 5,
              margin: '5%',
              backgroundColor: !isValid ? 'grey' : Constant.primaryColor,
            },
          ]}>
          <TouchableOpacity
            disabled={!isValid}
            style={{alignItems: 'center', width: '100%'}}
            onPress={() => {
              if (isValid) {
                doLogin();
              }
            }}>
            <Text
              style={{
                color: 'black',
                margin: '5%',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    </SafeAreaView>
  );
}
function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert(msg);
  }
}
