import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons, Foundation, FontAwesome } from '@expo/vector-icons';
import Facebook from "../Login/Facebook";

import CountryPicker from "react-native-country-picker-modal";

const MAX_LENGTH_CODE = 6;
const MAX_LENGTH_NUMBER = 10;

// if you want to customize the country picker
const countryPickerCustomStyles = {};

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterCode: false,
      spinner: false,
      country: {
        cca2: "TH",
        callingCode: "66"
      }
    };
  }
  _onChangeText = val => {
    if (!this.state.enterCode) return;
    if (val.length === MAX_LENGTH_CODE) this._verifyCode();
  };
  validateLogin = () => {
    usernameError = false;
    passwordError = false;

    if (!this.state.username.length) {
      usernameError = true;
    }
    if (!this.state.password.length) {
      passwordError = true;
    }
    this.setState({
      usernameError: usernameError,
      passwordError: passwordError
    });
    if (usernameError === false && passwordError === false) {
      this.props.realmLogin(this.state.username, this.state.password);
    }
  };
  onToggle(isOn) {
    // console.log("Changed to " + isOn);
  }
  _changeCountry = country => {
    this.setState({ country });
    this.refs.form.refs.textInput.focus();
  };
  _renderCountryPicker = () => {
    if (this.state.enterCode) return <View />;

    return (
      <CountryPicker
        ref={"countryPicker"}
        closeable
        style={styles.countryPicker}
        onChange={this._changeCountry}
        cca2={this.state.country.cca2}
        styles={countryPickerCustomStyles}
        translation="eng"
      />
    );
  };

  _renderCallingCode = () => {
    if (this.state.enterCode) return <View />;

    return (
      <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>
          +{this.state.country.callingCode}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View
            style={{
              marginLeft: 5,
              width: 322,
              height: 34,
              borderBottomWidth: 1,
              borderColor: "#f0f0f0",
              borderStyle: "solid",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            {/* <PhoneInput
            placeholder="Enter phone number"
            value={this.state.value}
            onChange={value => this.setState({ value })}
          /> */}
            {this._renderCountryPicker()}
            {this._renderCallingCode()}
            <TextInput
              ref={"textInput"}
              name={this.state.enterCode ? "code" : "phoneNumber"}
              type={"TextInput"}
              // underlineColorAndroid={'transparent'}
              // autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={this._onChangeText}
              placeholder={this.state.enterCode ? "" : "(00) 000 0000"}
              keyboardType={"number-pad"}
              style={{ marginLeft: 8 }}
              // returnKeyType='go'
              // autoFocus
              // placeholderTextColor={brandColor}
              // selectionColor={brandColor}
              maxLength={this.state.enterCode ? 6 : 10}
              onSubmitEditing={this._getSubmitAction}
            ></TextInput>

            {/* <TextInput
            style={{
              width: 322,
              height: 34,
              //   borderColor: "gray",
              //   borderWidth: 1,
              borderBottomWidth: 1,
              borderColor: "#f0f0f0",
              borderStyle: "solid"
            }}
            keyboardType="number-pad"
            placeholder="Phone"
            onChangeText={text => onChangeText(text)}
          /> */}
          </View>
        </View>
        <View>
          <View style={{ marginTop: 25 }}>
            <TouchableOpacity
              style={{
                width: 321,
                height: 48,
                shadowColor: "rgba(0, 0, 0, 0.15)",
                shadowOffset: { width: 5, height: 0 },
                shadowRadius: 20,
                borderRadius: 2,
                backgroundColor: "#2687fe",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center"
              }}
              onPress={() => this.props.navigation.navigate("OTPScreen")}
            >
              <Text style={{ color: "#FFFFFF" }}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 160, alignItems: "center" }}>
            <Text
              style={{
                width: 107,
                height: 20,
                color: "#2687fe",
                // fontFamily: 'Sukhumvit Set',
                fontSize: 12,
                fontWeight: "700"
              }}
            >
              Or Continue with
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-evenly",
              flexDirection: "row",
              marginTop: 20
            }}
          >
            <View>
              <TouchableOpacity
                style={{
                  width: 75,
                  height: 75,
                  backgroundColor: "#3b5998",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={() => this.props.navigation.navigate("Main")}
              >
                <Icon name="facebook" size={40} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: 75,
                  height: 75,
                  backgroundColor: "#f44336",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon name="google" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25
  },
  textInput: {
    marginLeft: 2,
    fontSize: 20
    // color: brandColor
  },
  countryPicker: {
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
