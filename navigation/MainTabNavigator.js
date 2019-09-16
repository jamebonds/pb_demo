import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MainScreen from '../screens/MainScreen';
import PromotionScreen from '../screens/Promotion/PromotionScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import MessageScreen from '../screens/Message/MessageScreen';
import WalletScreen from '../screens/Wallet/WalletScreen'


const MainStack = createStackNavigator({
  Main: MainScreen,
});

MainStack.navigationOptions = {
  tabBarLabel: "PowerBank\nStation",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-battery-charging'}
    />
  )
};

const PromotionStack = createStackNavigator({
  Promotion: PromotionScreen
});

PromotionStack.navigationOptions = {
  tabBarLabel: "Deal",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-pricetags'}
    />
  )
};

const WalletStack = createStackNavigator({
  Wallet: WalletScreen
});

WalletStack.navigationOptions = {
  tabBarLabel: "Wallet",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-wallet" : "md-wallet"}
    />
  )
};

const MessageStack = createStackNavigator({
  Message: MessageScreen
});

MessageStack.navigationOptions = {
  tabBarLabel: "Message",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-text'}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-person'}
    />
  )
};

export default createBottomTabNavigator({
  MainStack,
  PromotionStack,
  WalletStack,
  MessageStack,
  ProfileStack
},{
  swipeEnabled:true,
  tabBarOptions:{
    activeTintColor:'#2f95dc',

  }
});
