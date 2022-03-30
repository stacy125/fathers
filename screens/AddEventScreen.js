import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

const AddEvent = () => {
  return (
    <View>
      <Text>Add Event</Text>
      <Text>Name of the Event:</Text>
      {/* <Image>Event photo</Image> */}
      <Text> Details of the Event:</Text>
      <Text>Location:</Text>
      <Text>Price</Text>
      <Text>Comment or tips</Text>
      <Button onPress={() => navigation.navigate('ContactScreen')}>Go to Contact Us</Button>
      <Button onPress={() => navigation.navigate('HomeScreen')}>Home</Button>
    </View>
  )
}
// add ability to upload an Event

const styles = StyleSheet.create({})

export default AddEvent
