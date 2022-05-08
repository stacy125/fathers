import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Linking, Modal, TextInput } from 'react-native'
import { Button, Card, Title } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { getDoc, doc } from "firebase/firestore";
import { db } from "../secret/firebase";
import { auth } from '../secret/firebase';
import Fil from '../components/Fil-logo';
import Logo from '../components/Logo';

const SavedEvents = () => {

  const [events, setEvents] = useState({})
  const [comment, setComment] = useState('')
  const [show, setShow] = useState(false)

  const getEvents = async () => {
    auth
    // collectionGroup(db, 'events')

    const docRef = doc(db, "events", 'event.id');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setEvents({ events: docSnap.data() });

    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

  }

  useEffect(() => {
    getEvents()
  }, [])

  // console.log(events, 'events');
  console.log(Object.values(events), 'object handled');
  
  const toggleShow = () => {
    setShow(!show);
  }


  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 25, marginBottom: 20 }}>Fatherhood Suggested Events</Text>
      <FlatList
        showsVerticalScrollIndicator
        data={Object.values(events)}
        keyExtractor={(event) => event.id}
        renderItem={({ item }) => {
          console.log(item.image_url,' name');   
          return (
            <View style={styles.dadContainer} >
              <Title style={{ textAlign: 'center', fontWeight: '800', fontSize: 25 }} >{item.name}</Title>
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={{ uri: item.image_url }} />
              </View>
              <Card style={styles.card}>
                <Text style={{ marginHorizontal: 10, marginTop: 10 }} >Description:  {item.description}</Text>
                <Text style={{ marginHorizontal: 10, marginBottom: 10 }}>Location:  {item.location.display_address}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(event_site_url)}>
                  <Text style={{ color: '#F12816', left: 250, top: 5 }}>Visit Site</Text>
                </TouchableOpacity>
              </Card>
              <Modal visible={show} animationType='slide'>
                <View style={{ marginTop: 50 }}>
                  <Fil />
                  <Logo />
                </View>
                <Card style={styles.comment}>
                  <Text style={{ marginLeft: 10 }}>Comments or tips</Text>
                  <TextInput
                    placeholder='Why you choose this event? Your response goes here.'
                    // value='comment'
                    multiline
                    numberOfLines={4}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.textInput}
                    onChangeText={setComment}
                  />
                </Card>
                <Button onPress={toggleShow}><Text style={{ color: '#F12816' }}>Add Comment</Text></Button>
              </Modal>
            </View>
          )
        }}
      />

      <Button onPress={toggleShow} style={{bottom: 20}}><Text style={{ color: '#F12816' }}>Add Comment</Text></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    resizeMode: "contain",
    width: 350,
    height: 200,
    marginVertical: 10,
    borderColor: 'lightgray',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
    alignSelf: 'center'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  card: {
    marginHorizontal: 15,
    borderColor: 'lightgray',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  dadContainer: {
    width: 350,
    height: 150,
    marginHorizontal: 10,
 
  },
  comment: {
    marginHorizontal: 20,
    borderColor: 'black',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
    height: 300,
  },
  textInput: {
    marginLeft: 10
  }
})

export default SavedEvents
