import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import Torch from "react-native-torch";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TextInput } from "react-native-paper";

class QRKey extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    isTorchOn: false
  };

  handlePress() {
    const { isTorchOn } = this.state;
    Torch.switchState(!isTorchOn);
    this.setState({ isTorchOn: !isTorchOn });
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: 200,
            height: 36,
            color: "#ffffff",
            marginTop: 60,
            fontSize: 22,
            fontWeight: "600",

            alignItems: "center",
            alignContent: "center"
          }}
        >
          <Text
            style={{
              color: "#ffffff",

              fontSize: 22
            }}
          >
            กรุณา Scan QR code
          </Text>
        </View>
        <View>
          <Image
            source={require("../../assets/images/qr-code.png")}
            style={{ width: 151, height: 132, marginTop: 40 }}
          ></Image>
        </View>
        <View style={{ marginTop: 25 }}>
          <TextInput
            placeholder="ใส่เลขรหัสเครื่อง"
            style={{
                width: 298,
    height: 48,
    borderRadius:24,
    backgroundColor: '#ffffff',
    alignItems:'center',
    justifyContent:'center',
    shadowColor: '#000000',
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 6,
            }}
          ></TextInput>
        </View>
        <View>
          <View style={{marginTop:20,alignItems:'center'}}>
            <TouchableOpacity
              style={{
                width: 269,
                height: 43,
                shadowColor: "rgba(255, 255, 255, 0.48)",
                shadowOffset: { width: 3, height: 0 },
                shadowRadius: 6,
                borderRadius: 3,
                backgroundColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <Text
                style={{
                  width: 47,
                  height: 28,
                  color: "#0d7cde",

                  fontSize: 17,
                  fontWeight: "700"
                }}
              >
                ตกลง
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignContent: "center",
            marginTop: 20
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                width: 80,
                height: 80,
                shadowColor: "#1ec9ee",
                shadowOffset: { width: 3, height: 0 },
                shadowRadius: 6,
                backgroundColor: "#ffffff",
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center"
              }}
              onPress={this.handlePress.bind(this)}
            >
              <Image
                source={require("../../assets/images/flashlight.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}
export default QRKey;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#2687fe"
  },
  buttonstyle: {
    borderRadius: 40,
    width: 80,
    height: 80,
    borderColor: "#dce6f0",
    borderStyle: "solid",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
