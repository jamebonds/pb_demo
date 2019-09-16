import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { Button } from "react-native-elements";
import ToggleSwitch from "toggle-switch-react-native";
import PhoneInput from "react-native-phone-input";


import CountryPicker from 'react-native-country-picker-modal';


const MAX_LENGTH_CODE = 6;
const MAX_LENGTH_NUMBER = 10;

// if you want to customize the country picker
const countryPickerCustomStyles = {};

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "+66 ",
      name: "",
      sername: "",
      friend: "",
      enterCode: false,
      spinner: false,
      country: {
        cca2: 'TH',
        callingCode: '66'
      }
    };
  }
  _onChangeText = (val) => {
    if (!this.state.enterCode) return;
    if (val.length === MAX_LENGTH_CODE)
    this._verifyCode();
  }

  state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false
  };
  onToggle(isOn) {
    // console.log("Changed to " + isOn);
  }
  _changeCountry = (country) => {
    this.setState({ country });
    this.refs.form.refs.textInput.focus();
  }
  _renderCountryPicker = () => {

    if (this.state.enterCode)
      return (
        <View />
      );

    return (
      <CountryPicker
        ref={'countryPicker'}
        closeable
        style={styles.countryPicker}
        onChange={this._changeCountry}
        cca2={this.state.country.cca2}
        styles={countryPickerCustomStyles}
        translation='eng'/>
    );

  }

  _renderCallingCode = () => {

    if (this.state.enterCode)
      return (
        <View />
      );

    return (
      <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
      </View>
    );

  }

  render() {
    return (
      <View style={styles.container}>
        <View>
        <View style={{ marginLeft:5 , width: 322,
              height: 34, borderBottomWidth: 1, borderColor: "#f0f0f0",
              borderStyle: "solid", flexDirection: "row" , alignItems:'center', }}>
          {/* <PhoneInput
            placeholder="Enter phone number"
            value={this.state.value}
            onChange={value => this.setState({ value })}
          /> */}
          {this._renderCountryPicker()}
            {this._renderCallingCode()}
          <TextInput
              ref={'textInput'}
              name={this.state.enterCode ? 'code' : 'phoneNumber' }
              type={'TextInput'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={this._onChangeText}
              placeholder={this.state.enterCode ? '' : '(00) 000 0000'}
              keyboardType={"number-pad"}
              style={{marginLeft:8}}
              returnKeyType='go'
              // autoFocus
              // placeholderTextColor={brandColor}
              // selectionColor={brandColor}
              maxLength={this.state.enterCode ? 6 : 10}
              onSubmitEditing={this._getSubmitAction} 
              >

              </TextInput>

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
          <TextInput
            style={{
              width: 322,
              height: 34,
              //   borderColor: "gray",
              //   borderWidth: 1,
              borderBottomWidth: 1,
              borderColor: "#f0f0f0",
              borderStyle: "solid"
            }}
            placeholder="Name"
            onChangeText={text => onChangeText(text)}
          />
        </View>
        <View>
          <TextInput
            style={{
              width: 322,
              height: 34,
              //   borderColor: "gray",
              //   borderWidth: 1,
              borderBottomWidth: 1,
              borderColor: "#f0f0f0",
              borderStyle: "solid"
            }}
            keyboardType="default"
            placeholder="Surname"
            onChangeText={text => onChangeText(text)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 300,
            height: 40,
            borderRadius: 8,
            borderColor: "#707070",
            borderStyle: "solid",
            borderWidth: 1,
            // opacity: 0.29,
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 25
          }}
        >
          <View style={{justifyContent:"center", alignItems:"center", alignContent:"center"}}>
            <Text
              style={{
                width: 65,
                height: 24,
                color: "#727c8e",
                marginLeft: 10,
                marginTop:6,
                fontSize: 14,
                fontWeight: "600",
                alignItems:"center"
              }}  
            >
              แนะนำโดย
            </Text>
          </View>
          <View>
            <TextInput
              style={{
                
                fontSize: 14,
                
                fontWeight: "bold",
                fontStyle: "normal",
                color: "#b3b3b3",
                marginTop: 6
              }}
              value={this.state.friend}
              placeholder="NEWUSERCODE"
              keyboardType="default"
              onChangeText={friend =>
                this.setState({
                  friend
                })
              }
            ></TextInput>
          </View>
          <View>
            <TouchableOpacity
              style={{
                width: 99,
                height: 41,
                shadowColor: "rgba(141, 150, 152, 0.56)",
                shadowOffset: { width: 3, height: 0 },
                shadowRadius: 6,
                borderRadius: 8,
                backgroundColor: "#0d7cde",
                backgroundColor: "#0d7cde",
                alignItems: "center",
                alignContent: "flex-end",
                justifyContent: 'center'
              }}
            >
              <Text style={{ color: "#FFFFFF", alignItems: "center" }}>
                ตรวจสอบ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ marginTop: 50, alignItems: "center", flexDirection: "row" }}
        >
          <ToggleSwitch
            marginLeft
            isOn={this.state.isOnLargeToggleSwitch}
            onToggle={isOnLargeToggleSwitch => {
              this.setState({ isOnLargeToggleSwitch });
              this.onToggle(isOnLargeToggleSwitch);
            }}
          />
          <Text style={{ marginLeft: 10 }}>
            I accept Terms & Privacy Policy
          </Text>
        </View>

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
            <Text style={{ color: "#FFFFFF" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25
    // justifyContent: "center"
  },
  info: {
    // width: 200,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginTop: 20
  },
  button: {
    marginTop: 20,
    padding: 10
  },
  textInput: {
    
  marginLeft:2,
    fontSize: 20,
    // color: brandColor
  },
  countryPicker: {
    // alignItems: 'center',
    // justifyContent: 'center'
    
  },
});
