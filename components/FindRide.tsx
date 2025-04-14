import 'react-native-url-polyfill/auto'
import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'


export default function FindRide({ user }: { user: any }) {

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Find somewhere to SHRED!</Text>
      <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102_1280.png' }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
  },
  welcome: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
})