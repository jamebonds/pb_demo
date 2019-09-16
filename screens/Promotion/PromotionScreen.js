import React, { Component } from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";

class PromotionScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PromotionScreen</Text>
            </View>
        );
    }
}
export default PromotionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});