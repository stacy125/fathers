import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

const SavedEvents = () => {
  return (
    <View style={styles.container}>
      <Text>Fatherhood Suggested Events</Text>
      <Button onPress={() => navigation.navigate('Events')}>Suggested Events</Button>
      <Button onPress={() => navigation.navigate('Home')}>Home</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
    width: '100%'
  }
})

export default SavedEvents
