import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Animated , icon} from "react-native";
import { Appbar, FAB, Searchbar, List } from "react-native-paper";
import MapView, { Callout, Marker } from "react-native-maps";
import { Location, takeSnapshotAsync } from "expo";
import Permissions from 'expo-permissions';


const { width, height } = Dimensions.get("window");
var isHidden = true;

class MainScreen extends Component {
  static navigationOptions = {
    title: "PowerBank"
  };


  state = {
    search: "",
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
    bounceValue: new Animated.Value(200),
    appBar: new Animated.Value(0),
    toggleSelect: "",
    toggleOpen:false,
    orderID:""
  };

  
  _toggleSubview() {
    var toValue = 200;
    var toAppBar = -200;
this.setState({
  toggleOpen: !this.state.toggleOpen
})

    if (isHidden) {
      toValue = 0;
    } else {
      toAppBar = 0;
    }

    console.log(toAppBar);

    //This will animate the transalteY of the subview between 0 & 100 depending on its current state
    //100 comes from the style below, which is the height of the subview.
    Animated.spring(this.state.bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8
    }).start();

    Animated.spring(this.state.appBar, {
      toValue: toAppBar,
      velocity: 3,
      tension: 2,
      friction: 8
    }).start();

    isHidden = !isHidden;
  }

  showMenuToggle() {
    if (this.state.toggleOpen) {
      return (
        <View style={{marginTop:50}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10}}>
          <Text style={{fontWeight:'bold'}}>Order NO. {this.state.orderID}</Text>
          <Text style={{fontWeight:'bold'}}>ใช้บริการ</Text>
          </View>
          <View style={{backgroundColor:'#E4E4E5',width:100,height:2,marginTop:10,marginBottom:10}} />
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
          <Text style={{fontWeight:'bold'}}>เวลาที่ยืม{this.state.orderID}</Text>
          <Text>ใช้บริการ</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
          <Text style={{fontWeight:'bold'}}>ยืมจากสถานที่{this.state.orderID}</Text>
          <Text>ใช้บริการ</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
          <Text style={{fontWeight:'bold'}}>ค่าบริการ {this.state.orderID}</Text>
          <Text>ใช้บริการ</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
          <Text style={{fontWeight:'bold'}}>เวลาที่ใช้ไปแล้ว{this.state.orderID}</Text>
          <Text>ใช้บริการ</Text>
          </View>
        </View>
      );
    }
  }

 
  
  render() {
    const { firstQuery } = this.state;

    return (
      
      <View style={styles.container}>
      
        <Searchbar
          style={{
            borderRadius: 1,
            margin: 10,
            position: "absolute",
            top: 10,
            zIndex: 2,
            // marginTop:40
          }}
          placeholder="Search"
          onChangeText={search => {
            this.setState({ search });
          }}
          value={firstQuery}
        />
        <MapView
          provider={"google"}
          style={{
            flex: 1,
            alignSelf: "stretch",
            zIndex: 0
          }}
          
        />

        <Animated.View
          style={[
            styles.subView,
            { transform: [{ translateY: this.state.bounceValue }] }
          ]}
        >
          {this.showMenuToggle()}
        </Animated.View>

        <FAB
          icon="camera"
          onPress={() => this.props.navigation.navigate('QRCode')}
          style={[
            styles.fab,
            { transform: [{ translateY: this.state.appBar }] }
          ]}
        />

        <FAB
          small
          icon={this.state.toggleOpen ? "arrow-downward" : "arrow-upward"}
          onPress={() => this._toggleSubview() }
          style={[
            styles.toggleMenu,
            { transform: [{ translateY: this.state.appBar }] }
          ]}
        />
      </View>
    );
  }
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  bottom: {
    width: 100,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    zIndex: 1
  },
  fab: {
    // position: "absolute",
    bottom: 28,
    zIndex: 2,
    backgroundColor: "#1A80CA",
    borderWidth:2,borderColor:'#fff'
  },
  toggleMenu: {
    position: "absolute",
    bottom: 35,
    right: 10,
    zIndex: 2,
    backgroundColor: "#1A80CA",
    borderWidth:2,
    borderColor:'#fff'
  },

  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    height: 257
  }
});
