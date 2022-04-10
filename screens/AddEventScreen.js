import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import { Button } from 'react-native-paper'
import React, { useState, useContext } from 'react'
import Background from '../components/Background'
import AddEventImage from '../assets/add-event-hero.png'
import { Context } from '../context/EventContext'


const AddEvent = () => {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState('')
  const [url, setUrl] = useState('')
  const [comment, setComment] = useState('')

  const { addEvent } = useContext(Context)

  return (
    <Background>
      <Image source={AddEventImage} style={styles.image} />
      <View style={styles.eventContainer}>
        <Text style={styles.photoText}>Add an event you love to our</Text>
        <Text style={styles.photoText}>Dad-abase!</Text>
        <Button style={styles.upBtn}>
          <Text style={styles.upload}>+ UPLOAD EVENT COVER PHOTO</Text>
        </Button>
        <View style={styles.container}>

          <Text>Title of Event</Text>
          <TextInput
            placeholder='Add Event Title'
            value={name}
            onChange={setName}
            style={styles.inputStyles}
          />
          <Text>Type of Event</Text>
          <TextInput
            placeholder='Add the type of event'
            value={type}
            onChange={setType}
            style={styles.inputStyles}
          />
          {/* <Image>Event photo</Image> */}
          <Text> Description</Text>
          <TextInput
            placeholder='Add Description'
            value={description}
            onChange={setDescription}
            style={styles.inputStyles}
          />
          <Text>URL</Text>
          <TextInput
            placeholder='Price'
            value={url}
            onChange={setUrl}
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
            placeholder='Add Comment'
            value={comment}
            onChange={setComment}
            style={styles.inputStyles}
          />
        </View>
        <Button style={styles.button} onPress={() => addEvent()}>
          <Text style={styles.submit} >SUBMIT</Text>
        </Button>
      </View>
    </Background>
  )
}
// add ability to upload an Event

const styles = StyleSheet.create({
  eventContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 0
  },
  container: {
    bottom: 25
  },
  inputStyles: {
    height: 25,
    borderColor: 'black',
    borderWidth: 1,
    borderColor: 'lightgray',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
  upBtn: {
    borderWidth: 1,
    borderColor: 'lightgray',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
    bottom: 35
  },
  upload: {
    color: '#F12816'
  },
  image: {
    width: 350,
    height: 200,
    alignSelf: 'center'
  },
  photoText: {
    color: 'white',
    fontWeight: '800',
    bottom: 50,
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#F12816',
    bottom: 15,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: 'lightgray',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
  submit: {
    color: 'white'
  }
})

export default AddEvent
