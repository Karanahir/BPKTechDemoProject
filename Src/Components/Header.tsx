import React, {useState, useEffect} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
// redux hooks
import {useSelector, useDispatch} from 'react-redux';
// actions
import {switchMode} from '../Redux/Actions';

import Colors from '../Helper/Constant';

function Header({navigation, title, headerStyle}): JSX.Element {
  // Update the app Incase the theme mode changes

  return (
    <View style={[styles.container, headerStyle]}>
      <View style={[styles.container, headerStyle]}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    color: 'black',
    fontSize: 24,
    marginLeft: 20,
  },
  backBtn: {
    marginLeft: 10,
  },
});
export default Header;
