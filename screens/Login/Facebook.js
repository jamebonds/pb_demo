import React, { Component } from "react";
import {View,Text,StyleSheet,Dimensions, Alert} from "react-native";

class Facebook extends Component {
    logIn = async () => {
        try {
          const {
            type,
            token,
          } = await Facebook.logInWithReadPermissionsAsync('2476685745900845', {
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
          } else {
            Alert.alert('Something is wrong !');
          }
        } catch ({ message }) {
          Alert.alert(`Facebook Login Error: ${message}`);
        }
      }
    render() {
        return (
           <View></View> 
        );
    }
}
export default Facebook;

