import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Button,
  Animated,
  ScrollView
} from "react-native";
import RegisterScreen from "../screens/Login/RegisterScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import SegmentedControlIOS from "@react-native-community/segmented-control";

const { width } = Dimensions.get("window");
class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: "register",
      viewLogin: true,
      active: 0,
      xTabOne: 0,
      xTabTwo: 0,
      translateX: new Animated.Value(0),
      translateXTabOne: new Animated.Value(0),
      translateXTabTwo: new Animated.Value(width),
      translateY: -1000
    };
    handleSlide = type => {
      let {
        xTabOne,
        xTabTwo,
        active,
        translateX,
        translateXTabOne,
        translateXTabTwo
      } = this.state;
      Animated.spring(translateX, {
        toValue: type,
        duration: 100
      }).start();
      if (active === 0) {
        Animated.parallel([
          Animated.spring(translateXTabOne, {
            toValue: 0,
            duration: 200
          }).start(),
          Animated.spring(translateXTabTwo, {
            toValue: width,
            duration: 100
          }).start()
        ]);
      } else {
        Animated.parallel([
          Animated.spring(translateXTabOne, {
            toValue: -width,
            duration: 100
          }).start(),
          Animated.spring(translateXTabTwo, {
            toValue: 0,
            duration: 100
          }).start()
        ]);
      }
    };
  }

  render() {
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY
    } = this.state;
    let screenToShow;
    switch (this.state.currentScreen) {
      case "login":
        screenToShow = <LoginScreen navigation={this.props.navigation} />;
        break;
      case "register":
        screenToShow = <RegisterScreen navigation={this.props.navigation} />;
        break;
    }
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.path1322}
          ></Image>
        </View>
        
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "#007aff",
            marginTop: 29
          }}
        >
          <View>
            <Animated.View
              style={{
                position: "absolute",
                width: 161,
                height: 42,
                top: 0,
                left: 0,
                // backgroundColor: "#007aff",
                borderRadius: 4,
                transform: [
                  {
                    translateX
                  }
                ]
              }}
            />
            <TouchableOpacity
              style={{ backgroundColor: active === 0 ? "#007aff" : "#ffffff",
                width: 161,
                height: 42,
                borderColor: "#007aff",
                // borderRadius: 4,
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                
              }}
              
              onPress={() =>
                this.setState({ active: 0, currentScreen: "register" })
              }
            >
              <Text
                style={{
                  color: active === 0 ? "#ffffff" : "#007aff"
                }}
              >
                ลงทะเบียน
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ backgroundColor  : active === 1 ? "#007aff" : "#ffffff",
                width: 161,
                height: 42,
                borderColor: "#007aff",
                
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={() =>
                this.setState({ active: 1, currentScreen: "login" })
              }
              
            >
              <Text
                style={{
                  color: active === 1 ? "#ffffff" : "#007aff"
                }}
              >
                เข้าสู่ระบบ
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>

        {screenToShow}
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25
  },
  path1322: {
    width: 109,
    height: 108,
    marginTop: 75
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  }
});
