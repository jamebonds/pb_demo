import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const { width, height } = Dimensions.get("screen");

class AddFund extends Component {
  static navigationOptions = {
    header: null
  };

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={{ alignItems: "flex-start" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Wallet")}
          >
            <Ionicons name="ios-arrow-back" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 18, marginVertical: 14 }}>เติมเงิน</Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View>
          <Card
            style={{
              width: 337,
              height: 211,
              shadowColor: "#e7eaf0",
              shadowOffset: { width: 4, height: 0 },
              shadowRadius: 10,
              borderRadius: 10,
              backgroundColor: "#ffffff"
            }}
          >
            <Card.Content></Card.Content>
          </Card>
        </View>
      </View>
    );
  }
}
export default AddFund;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.1,
    width: width,
    paddingHorizontal: 14
  }
});
