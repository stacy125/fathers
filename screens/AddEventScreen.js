import { StyleSheet, Text, View, TextInput, Image, ScrollView, Modal } from 'react-native';
import { Button } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import Background from '../components/Background';
import AddEventImage from '../assets/add-event.png';
import Fil from '../components/Fil-logo';
import Logo from '../components/Logo';
import { auth, db } from '../secret/firebase';
import { setDoc, doc } from "firebase/firestore";


const AddEvent = () => {

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState('')
  const [url, setUrl] = useState('')
  const [comment, setComment] = useState('')
  const [visible, setVisible] = useState(false)
  const [image_URL, setImage_URL] = useState('')


  const addEvent = async () => {
    auth
    await setDoc(doc(db, "events", 'event.id'), {
      id, name, image_url, location, description, event_site_url, cost, is_free
    });
  }


  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <Background>
      <Image source={AddEventImage} style={styles.image} />
      <View style={styles.eventContainer}>
        <Text style={styles.photoText}>Add an event you love to our</Text>
        <Text style={styles.photoText}>Dad-abase!</Text>
        <Modal visible={visible} animationType='slide'  >
          <View style={{ marginTop: 50, flex: 1 }}>
            <Fil style={{ marginLeft: 20 }} />
            <Logo style={styles.logo} />
          </View>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Image URL</Text>
            <TextInput style={styles.modalInput} placeholder='put your URL link here' value={image_URL} onChangeText={(text) => setImage_URL(text)} />
            <Button title="UPLOAD IMAGE" style={styles.imgBtn} onPress={toggleModal}>
              <Text style={{ color: 'white', textAlign: 'center' }}>UPLOAD IMAGE</Text>
              </Button>
          </View>
        </Modal >
        <ScrollView style={styles.container}>
          <Button style={styles.upBtn} onPress={toggleModal}>
            <Text style={styles.upload}>+ UPLOAD EVENT COVER PHOTO</Text>
          </Button>
          <Text style={{ margin: 5 }}>Title of Event</Text>
          <TextInput
            placeholder='Add Event Title'
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.inputStyles}
          />
          <Text style={{ margin: 5 }}>Type of Event</Text>
          <TextInput
            placeholder='ex. waterpark, outdoor activity, kid-friendly....'
            value={type}
            onChangeText={(text) => setType(text)}
            style={styles.inputStyles}
          />
          {/* <Image>Event photo</Image> */}
          <Text style={{ margin: 5 }}> Description</Text>
          <TextInput
            placeholder='Add Description'
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={styles.inputStyles}
          />
          <Text style={{ margin: 5 }}>Event Link</Text>
          <TextInput
            placeholder='www.something.com'
            value={url}
            onChangeText={(text) => setUrl(text)}
            style={styles.inputStyles}
          />
          <Text style={{ margin: 5 }}>Event Location</Text>
          <TextInput
            placeholder='Location of the event'
            value={location}
            onChangeText={(text) => setLocation(text)}
            style={styles.inputStyles}
          />
          <Text style={{ margin: 5 }}>Price</Text>
          <TextInput
            placeholder='Price'
            value={cost}
            onChangeText={(text) => setCost(text)}
            style={styles.inputStyles}
          />
          <Text style={{ margin: 5 }}>Comment or tips</Text>
          <TextInput
            placeholder='Add Comment'
            value={comment}
            onChangeText={(text) => setComment(text)}
            style={styles.inputStyles}
          />
          <Button style={styles.button} onPress={addEvent}>
            <Text style={styles.submit} >SUBMIT</Text>
          </Button>
        </ScrollView>
      </View >
    </Background >
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
  modalContainer: {
    borderColor: 'lightgray',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4.84,
    elevation: 7,
    width: 350,
    height: 400,
    alignSelf: 'center',
    backgroundColor: 'lightgray',
    color: 'black',
    bottom: 50,
  },
  modalInput: {
    height: 40,

    borderColor: '#F12816',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 7,
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '800',
    marginTop: 250,
    marginBottom: 20
  },
  imgBtn: {
    backgroundColor: '#F12816',
    top: 10,
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
    width: 250,
    alignSelf: 'center',
    marginBottom: 20
  },
  modalText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
    top: 90
  },
  inputStyles: {
    height: 35,
    borderWidth: 1,
    borderColor: 'lightgray',
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 7,
    marginBottom: 10
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
    bottom: 5
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
    top: 10,
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
    width: 250,
    alignSelf: 'center',
    marginBottom: 20
  },
  submit: {
    color: 'white'
  }
})

export default AddEvent


//the textInput box expand
//price gets changed to slider
//add age slider