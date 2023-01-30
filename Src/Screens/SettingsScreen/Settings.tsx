import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {Card} from 'react-native-paper';
import Constant from '../../Helper/Constant';

export default function Settings({navigation}) {
  const [data, setData] = useState();

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
              navigation.navigate('Login');
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
