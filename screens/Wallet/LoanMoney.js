import React, { Component } from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";

class LoanMoney extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>LoanMoney</Text>
            </View>
        );
    }
}
export default LoanMoney;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});