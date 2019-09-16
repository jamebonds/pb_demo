import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import CountryPicker from 'react-native-country-picker-modal';


const MAX_LENGTH_CODE = 6;
const MAX_LENGTH_NUMBER = 10;
const countryPickerCustomStyles = {};

class OTPScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.path1322}
          ></Image>
        </View>

        <View style={{ marginLeft:5 , width: 322,
              height: 34, borderBottomWidth: 1, borderColor: "#f0f0f0",
              borderStyle: "solid", flexDirection: "row" , alignItems:'center', marginTop:25}}>
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
              // underlineColorAndroid={'transparent'}
              // autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={this._onChangeText}
              placeholder={this.state.enterCode ? '' : '(00) 000 0000'}
              keyboardType={"number-pad"}
              style={{marginLeft:8}}
              // returnKeyType='go'
              // autoFocus
              // placeholderTextColor={brandColor}
              // selectionColor={brandColor}
              maxLength={this.state.enterCode ? 6 : 10}
              onSubmitEditing={this._getSubmitAction} ></TextInput>

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
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity
            style={{
              width: 293,
              height: 49,
              borderRadius: 3,
              backgroundColor: "#2687fe",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                width: 97,
                height: 29,
                color: "#ffffff",
                // fontFamily: "Sukhumvit Set",
                fontSize: 17,
                fontWeight: "700",
                
              }}
            >
              ขอรหัส OTP
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 35}}>
          <Text
            style={{
              width: 105,
              height: 25,
              color: "#727c8e",
              // fontFamily: 'Sukhumvit Set',
              fontSize: 14,
              fontWeight: "700",
              lineHeight: 15
            }}
          >
            กรอกรหัส OTP
          </Text>
          <TextInput
            style={{
              width: 322,
              height: 34, //   borderColor: "gray", //   borderWidth: 1,
              borderBottomWidth: 1,
              borderColor: "#f0f0f0",
              borderStyle: "solid"
            }}
            keyboardType="number-pad"
            
            onChangeText={text => onChangeText(text)}
          />
        </View>
        <View style={{ marginTop: 25, alignItems:'center' }}>
          <TouchableOpacity
            style={{
              width: 293,
              height: 49,
              borderRadius: 3,
              backgroundColor: "#2687fe",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                width: 50,
                height: 29,
                color: "#ffffff",
                // fontFamily: 'Sukhumvit Set',
                fontSize: 17,
                fontWeight: "700",
                
                alignItems:'center',
                alignContent:'center',
                marginTop:3
                
              }}
              onPress={() => this.props.navigation.navigate("PassCode")}
            >
              ยืนยัน
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50
  },
  path1322: {
    width: 109,
    height: 108,
    marginTop: 75
  }
  ,
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
