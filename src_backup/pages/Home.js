import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Avatar } from 'react-native-paper';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image
            style = {styles.image}
            source={require("../../images/image11.jpeg")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.imageContainer2}>
          <Avatar.Image 
            size={160}
            source={require("../../images/SatishVemana1555200054.jpg")}
          />
          <Text style={styles.textTitle}>Satish Vemana</Text>
          <Text style={styles.textSubTitle}>President</Text>
          <Text>703-731-8367</Text>
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
  imageContainer2: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 50
  },
  textTitle: {
    fontSize: 24
  },
  textSubTitle: {
    fontSize: 20
  },
  image: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150
  }
})