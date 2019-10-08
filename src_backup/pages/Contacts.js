import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from "react-native-paper";


export default class Contacts extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Hello From Contacts </Text>
        <Button
            raised
            onPress={() => this.props.navigation.navigate("Contact",{ hideTabBar: true })}
          >
            <Text>Go to details screen</Text>
        </Button>
      </View>
    )
  }
}