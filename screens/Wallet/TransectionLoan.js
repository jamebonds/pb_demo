import React, { Component } from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";

class TransectionLoan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TransectionLoan</Text>
            </View>
        );
    }
}
export default TransectionLoan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});