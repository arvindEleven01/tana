import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

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
        <View style={styles.imageContainer}>
          <Image
            style = {styles.image}
            source={require("../../images/TANA-logo.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.inputContainer}>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 30
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 50
  },
  inputContainer: {
    marginTop: 20
  },
  image: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150
  },
  inputStyles: {
    margin: 10,
    backgroundColor: 'white'
  },
  buttonStyles: {
    padding: 10,
    margin: 10
  }
})