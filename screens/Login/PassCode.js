import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";

class PassCode extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop:140, alignItems:'center'}}>
          <Text style={{ fontSize: 24,
    fontWeight: '600', color:'#ffffff'}}>กรุณาป้อนรหัสส่วนตัว</Text>
        </View>
        <View style={{marginTop:50, alignItems:'center'}}>
          <Text>dd</Text>
        </View>
        <View style={{ flexDirection:'row',justifyContent:'space-evenly', marginTop:50}}>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              3
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection:'row',justifyContent:'space-evenly', marginTop:20}}>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              6
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              9
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
          <TouchableOpacity style={styles.buttonstyleClean}>
            {/* <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              7
            </Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text
              style={{
                alignItems: "center",
                width: 16,
                height: 31,
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "400"
              }}
            >
              X
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default PassCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
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
  },
  buttonstyleClean:{
    borderRadius: 40,
    width: 80,
    height: 80,
    borderColor: "#2687fe",
    
    
    alignItems: "center",
    justifyContent: "center"
  },
  gradintBackground: {
    width: 378,
    height: 816,
    backgroundColor: "#2687fe"
  }
});
