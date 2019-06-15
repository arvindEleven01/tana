import React from "react";
import { Header } from "react-navigation";
import { View, Platform, StatusBar, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const CustomHeader = props => {
  return (
    <View style={{ height: 56, marginTop: Platform.OS == "ios" ? 20 : 0 }}>
      <MyStatusBar backgroundColor="#d32f2f" barStyle="light-content" />
      <LinearGradient colors = { ["#f44336", "#d32f2f"] }>
        <Header {...props} />
      </LinearGradient>
    </View>
  );
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
// const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  //  appBar: {
  //    backgroundColor: '#79B45D',
  //    height: APPBAR_HEIGHT,
  //  },
});

export default CustomHeader;