import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from "react-native-paper";

export default class Events extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Events Details</Text>
        <Button
            raised
            onPress={() => this.props.navigation.navigate("Event",{ hideTabBar: true })}
          >
            <Text>Go to details screen</Text>
        </Button>
      </View>
    )
  }
}