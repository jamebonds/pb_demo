import React, { Component } from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";

class TransectionMoney extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TransectionMoney</Text>
            </View>
        );
    }
}
export default TransectionMoney;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});