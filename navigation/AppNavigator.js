import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import OTPScreen from '../screens/Login/OTPScreen';
import PassCode from '../screens/Login/PassCode';
import PassCodeAccept from '../screens/Login/PassCodeAccept';
import QRCode from '../screens/QRCode/QRCode';
import QRKey from '../screens/QRCode/QRKey';
import AddFund from '../screens/Wallet/AddFund';
import Coupon from '../screens/Wallet/Coupon';
import LoanMoney from '../screens/Wallet/LoanMoney';
import TransectionLoan from '../screens/Wallet/TransectionLoan';
import TransectionMoney from '../screens/Wallet/TransectionMoney';



export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    HomeScreen: HomeScreen,
    OTPScreen: OTPScreen,
    PassCode: PassCode,
    PassCodeAccept: PassCodeAccept,
    QRCode: QRCode,
    QRKey: QRKey,
    AddFund: AddFund,
    Coupon: Coupon,
    LoanMoney: LoanMoney,
    TransectionMoney: TransectionMoney,
    TransectionLoan: TransectionLoan,
  },
  {
    initialRouteName:'HomeScreen'
  })
);
