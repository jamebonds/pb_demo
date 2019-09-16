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
import Torch from 'react-native-torch';
import { BarCodeScanner } from "expo-barcode-scanner";


class QRCode extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    isTorchOn: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };
  handlePress() {
    const { isTorchOn } = this.state;
    Torch.switchState(!isTorchOn);
    this.setState({ isTorchOn: !isTorchOn });
  }
  
  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <View
          style={{
            width: 200,
            height: 36,
            color: "#ffffff",

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
        <View
          style={{
            width: 242,
            height: 242,
            borderColor: "#ff6969",
            borderStyle: "solid",
            borderWidth: 6,
            backgroundColor: "#ffffff",
            marginTop: 25
          }}
        >
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />

          {scanned && (
            <Button
              title={"Tap to Scan Again"}
              onPress={() => this.setState({ scanned: false })}
            />
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignContent: "center",
            marginTop: 70
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
              onPress={() => this.props.navigation.navigate('QRKey')}
            >
              <Image
                source={require("../../assets/images/security-code.png")}
              ></Image>
            </TouchableOpacity>
          </View>
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
export default QRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
