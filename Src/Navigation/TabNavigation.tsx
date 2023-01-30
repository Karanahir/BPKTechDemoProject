import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Settings from '../Screens/SettingsScreen/Settings';
import Home from '../Screens/HomeScreen/Home';
import Colors from '../Helper/Constant';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
function ListFun() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} initialParams={{tab: 1}} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation(props) {
  ListFun();
  const storeData = useSelector(state => state.initalRoute);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        activeTintColor: 'white',
        drawUnderTabBar: false,
        tabBarStyle: {
          backgroundColor: Colors.blueLight,
          borderTopWidth: 0,
          borderColor: 'white',
          borderTopLeftRadius: 21,
          borderTopRightRadius: 21,
          elevation: 0,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="grid-view" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  imageIconStyle: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 2,
    bottom: -45,
    opacity: 0.9,
    // top:2
    // resizeMode:"content"
  },
  imageIconStyle2: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 2,
    bottom: -22,
    opacity: 0.9,
  },
  underlineStyle: {
    height: 4,
    width: 60,
    backgroundColor: Colors.createTextColor,
    bottom: 20,
    position: 'absolute',
    left: -25,
  },
});
