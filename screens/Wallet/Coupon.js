import React, { Component } from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";

class Coupon extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Coupon</Text>
            </View>
        );
    }
}
export default Coupon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});