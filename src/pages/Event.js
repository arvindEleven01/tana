import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Event extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        < Text > Hello From Event </Text>
      </View>
    )
  }
}