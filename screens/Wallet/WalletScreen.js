import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Icon
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

class WalletScreen extends Component {
  static navigationOptions = {
    title: "Wallet"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 25 }}>
          <Card
            style={{
              width: 326,
              height: 127,
              shadowColor: "rgba(38, 135, 254, 0.6)",
              shadowOffset: { width: 4, height: 0 },
              shadowRadius: 30,
              borderRadius: 20,
              backgroundColor: "#ffffff"
            }}
          >
            <Card.Content style={{}}>
              <Title
                style={{
                  color: "#0672f7",
                  fontSize: 23,
                  fontWeight: "600",
                  alignItems: "center"
                }}
              >
                ยอดเงินคงเหลือ 200.00 บาท
              </Title>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <View>
                  <Image
                    source={require("../../assets/images/Layer_5.png")}
                  ></Image>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      width: 114,
                      height: 40,
                      borderColor: "#2687fe",
                      marginRight: 10,
                      borderWidth: 3,
                      backgroundColor: "#ffffff",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 10,
                      alignContent: "center"
                    }}
                    onPress={() => this.props.navigation.navigate("AddFund")}
                  >
                    <Text
                      style={{
                        color: "#020202",

                        fontSize: 20,
                        fontWeight: "600",
                        alignItems: "center"
                      }}
                    >
                      เติมเงิน
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={{ marginTop: 25 }}>
          <Card
            style={{
              width: 326,
              height: 127,
              shadowColor: "rgba(228, 201, 92, 0.4)",
              shadowOffset: { width: 4, height: 0 },
              shadowRadius: 30,
              borderRadius: 20,
              backgroundColor: "#ffffff"
            }}
          >
            <Card.Content>
              <Text
                style={{
                  color: "#020202",
                  marginLeft: 20,
                  fontSize: 19,
                  fontWeight: "600"
                }}
              >
                ชำระผ่านบัตรเครดิต
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                  alignItems: "center",
                  justifyContent: "space-evenly"
                }}
              >
                <View>
                  <Image
                    source={require("../../assets/images/Layer_6.png")}
                  ></Image>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      width: 188,
                      height: 43,
                      shadowColor: "rgba(27, 64, 126, 0.1)",
                      shadowOffset: { width: 0, height: 0 },
                      shadowRadius: 72,
                      borderRadius: 11,
                      borderColor: "#e3c85b",
                      borderStyle: "solid",
                      borderWidth: 3,
                      backgroundColor: "#ffffff",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => this.props.navigation.navigate("LoanMoney")}
                  >
                    <Text
                      style={{
                        color: "#020202",

                        fontSize: 16,
                        fontWeight: "600",
                        alignItems: "center"
                      }}
                    >
                      เงินมัดจำ และเติมเงิน
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={{ marginTop: 75, justifyContent: "space-between" }}>
          <Card
            style={{
              width: 333,
              height: 194,
              shadowColor: "#e7eaf0",
              shadowOffset: { width: 10, height: 0 },
              shadowRadius: 15,
              borderRadius: 10,
              backgroundColor: "#ffffff",
              justifyContent: "center"
            }}
          >
            <View>
              <Card.Content style={{ marginTop: 14 }}>
                <View
                  style={{ flexDirection: "column", justifyContent: "center" }}
                >
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottomWidth: 1,
                      borderBottomColor: "#727c8e",
                      width: 295,
                      height: 54
                    }}
                    onPress={() => this.props.navigation.navigate("Coupon")}
                  >
                    <Text
                      style={{
                        color: "#515c6f",
                        fontSize: 15,
                        fontWeight: "500"
                      }}
                    >
                      คูปอง
                    </Text>
                    <Image
                      source={require("../../assets/images/arrow-r.png")}
                    ></Image>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottomWidth: 1,
                      borderBottomColor: "#727c8e",

                      width: 295,
                      height: 54
                    }}
                  >
                    <Text
                      style={{
                        color: "#515c6f",
                        fontSize: 15,
                        fontWeight: "500",
                        alignItems: "center"
                      }}
                      onPress={() =>
                        this.props.navigation.navigate("TransectionMoney")
                      }
                    >
                      ประวัติธุรกรรมการเงิน
                    </Text>
                    <Image
                      source={require("../../assets/images/arrow-r.png")}
                    ></Image>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",

                      borderBottomColor: "#727c8e",
                      width: 295,
                      height: 54
                    }}
                  >
                    <Text
                      style={{
                        color: "#515c6f",
                        fontSize: 15,
                        fontWeight: "500",
                        alignItems: "center"
                      }}
                      onPress={() =>
                        this.props.navigation.navigate("TransectionLoan")
                      }
                    >
                      ประวัติการเช่า
                    </Text>
                    <Image
                      source={require("../../assets/images/arrow-r.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </Card.Content>
            </View>
          </Card>
        </View>
      </View>
    );
  }
}
export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f9f9f9"
  }
});
