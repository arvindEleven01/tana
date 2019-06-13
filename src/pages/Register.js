import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import {
  TextInput,
  Button
} from "react-native-paper";

export default class Register extends React.Component {
  state = {
    text: ''
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={styles.inputStyles}
          label='Name'
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
        <TextInput
          style={styles.inputStyles}
          label='Mobile'
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
        <Button
          style={styles.buttonStyles}
          mode = "contained"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          Submit
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 30
  },
  inputStyles: {
    margin: 10
  },
  buttonStyles: {
    padding: 10,
    margin: 10
  }
})