import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Home extends React.Component {
  render() {
    return (
      <View style={{flex: 1,justifyContent: "center", alignItems: "center" }}>
        <Text>Hello From Home</Text>
      </View>
    )
  }
}