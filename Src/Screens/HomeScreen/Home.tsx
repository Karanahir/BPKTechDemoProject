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
  FlatList,
  ToastAndroid,
  Alert,
  Image,
} from 'react-native';
import styles from './styles';
import {Card} from 'react-native-paper';
import Constant from '../../Helper/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const [data, setData] = useState({name: ''});
  useEffect(() => {
    getUserData();
  });

  async function getUserData() {
    var dat = await AsyncStorage.getItem(Constant.user);
    setData(JSON.parse(dat));
  }

  async function doLogout() {
    await AsyncStorage.setdata(Constant.isLogin, 'false');
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView>
      <View style={[styles.itemView, {width: '100%'}]}>
        <Card
          style={[
            styles.cardStyle,
            {
              elevation: 5,
              width: '40%',
              margin: '5%',
              marginLeft: '30%',
              backgroundColor: Constant.primaryColor,
            },
          ]}>
          <TouchableOpacity
            style={{alignItems: 'center', width: '100%'}}
            onPress={() => {
              doLogout();
            }}>
            <Text
              style={{
                color: 'black',
                margin: '5%',
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </Card>
        <Card style={[styles.cardStyle]}>
          <View style={[styles.itemView, {margin: 10}]}>
            <Text style={[styles.textStyle]}>Id: {data.id}</Text>
            <Text style={[styles.textStyle]}>Name: {data.name}</Text>
            <Text style={[styles.textStyle]}>Email: {data.email}</Text>
            <Text style={[styles.textStyle]}>App Id: {data.appId}</Text>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}
