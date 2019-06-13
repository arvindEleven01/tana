import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Button } from "react-native-paper";

export default class Register extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <Button
            raised
            onPress={() => this.props.navigation.navigate("Dashboard")}
          >
            <Text>Get Started</Text>
        </Button>
      </View>
    )
  }
}