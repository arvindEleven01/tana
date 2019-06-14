import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class HeaderIcon extends Component {
  
  render() {
    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate("Events")} underlayColor="white">
      <View style={{ flexDirection: 'row' }}>
        <MaterialIcons style={styles.wrapper} name='live-tv' size={28} color='#fff'/>
        </View>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 10
  }
})