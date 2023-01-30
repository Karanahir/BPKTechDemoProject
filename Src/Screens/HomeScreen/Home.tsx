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
  async function doLogout() {
    await AsyncStorage.setItem(Constant.isLogin, 'false');
    navigation.navigate('Login');
  }
  return (
    <SafeAreaView>
      <View style={[styles.itemView, {width: '100%'}]}>
        <Card
          style={[
            styles.cardStyle1,
            {
              elevation: 5,
              width: '40%',
              margin: '5%',
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
      </View>
    </SafeAreaView>
  );
}
