import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
//import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import BmiScreen from '../screens/BmiScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingScreen from '../screens/SettingScreen';
import TipsScreen from '../screens/TipsScreen';
import MyRecords from '../screens/MyRecords';
export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : DetailsScreen
    },
  BmiScreen : {
    screen : BmiScreen
  },
  MyRecords:{
    screen:MyRecords
  },
  TipsScreen : {
    screen : TipsScreen
  },
  Setting : {
    screen : SettingScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })