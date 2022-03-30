import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Button } from 'react-native-paper'
import React, { useState } from 'react'
import Background from '../components/Background'


const AddEvent = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState('')
  const [comment, setComment] = useState('')
  return (
    <Background>
      <View style={styles.eventContainer}>
        <Text>Add Event</Text>
        <Text>Name of the Event:</Text>
        <TextInput
          placeholder='Add Event Name'
          value={name}
          onChange={setName}
          style={styles.inputStyles}
        />
        {/* <Image>Event photo</Image> */}
        <Text> Details of the Event:</Text>
        <TextInput
          placeholder='Add Description'
          value={description}
          onChange={setDescription}
          style={styles.inputStyles}
        />
        <Text>Location:</Text>
        <TextInput
          placeholder='Location'
          value={location}
          onChange={setLocation}
          style={styles.inputStyles}
        />
        <Text>Price</Text>
        <TextInput
          placeholder='Price'
          value={cost}
          onChange={setCost}
          style={styles.inputStyles}
        />
        <Text>Comment or tips</Text>
        <TextInput
          placeholder='Add Description'
          value={comment}
          onChange={setComment}
          style={styles.inputStyles}
        />
       
        <Button onPress={() => navigation.navigate('HomeScreen')}>Home</Button>
      </View>
    </Background>
  )
}
// add ability to upload an Event

const styles = StyleSheet.create({
  eventContainer:{
    justifyContent: 'center',
    alignSelf: 'center'
  },
  inputStyles: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1
  }
})

export default AddEvent
