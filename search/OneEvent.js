import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Linking, Modal } from 'react-native'
import React, { useState, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Title, Button, Card } from 'react-native-paper';
import { Provider } from '../context/EventContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from '../secret/firebase';
import Fil from '../components/Fil-logo';
import Logo from '../components/Logo';

const OneEvent = () => {
   
    const [comment, setComment] = useState('')
    const [show, setShow] = useState(false)
    const [event, setEvent] = useState(false)

    const navigation = useNavigation()
    const route = useRoute() 

    const { id, name, image_url, location, description, event_site_url, cost, is_free } = route.params.result

    const Free = () => {
        if (is_free === true || cost === null) {
            return <Text style={{ fontWeight: '600', textAlign: 'center' }} >This Event is FREE!</Text>
        } else {
            return <Text>Price: {cost} </Text>
        }
    }

    // Add a new document with a generated id.
    const savedEvent = async () => {
        auth
    //     const docRef = await addDoc(collection(db, "events"), {
    //         id, name, image_url, location, description, event_site_url, cost, is_free
    //     });
    //     console.log("Document written with ID: ", docRef.id);
        await setDoc(doc(db, "events", 'event.id'), {
            id, name, image_url, location, description, event_site_url, cost, is_free
        });
    }

    const toggleShow = () => {
        setShow(!show);
    }
    const goToEvent = () => {
        return navigation.navigate('Add An Event')
    }

    return (
        // <Modal visible={event} animationType='slide'>
            <Provider>
                <View key={id} style={styles.container} >
                    <Title style={{ textAlign: 'center', fontWeight: '800', fontSize: 25 }} >{name}</Title>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageStyle} source={{ uri: image_url }} />
                    </View>
                    <Card style={styles.card}>
                        <Text style={{ marginHorizontal: 10, marginTop: 10 }} >Description:  {description}</Text>
                        <Text style={{ marginHorizontal: 10, marginBottom: 10 }}>Location:  {location.display_address}</Text>
                        <TouchableOpacity onPress={() => Linking.openURL(event_site_url)}>
                            <Text style={{ color: '#F12816', left: 250, top: 5 }}>Visit Site</Text>
                        </TouchableOpacity>
                    </Card>
                    <Free />
                <Button onPress={toggleShow}><Text style={{color: '#F12816'}}>Add Comment</Text></Button>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity>
                            <MaterialIcons name="note-add" size={35} color='#F12816' style={{ marginLeft: 5 }} onPress={goToEvent} /> 
                         </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://maps.google.com')}>
                            <FontAwesome5 name="map-marked" size={35} color='#F12816' style={{ marginLeft: 110}} />
                        </TouchableOpacity>
                    <TouchableOpacity onPress={savedEvent} >
                            <FontAwesome name="bookmark" size={35} color='#F12816' style={{ marginLeft: 120 }} />
                        </TouchableOpacity>
                    </View>
                        <View style={{flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ marginLeft: 5 }}>Add Review</Text>
                    <Text style={{ marginLeft: 50 }}>Google Map</Text>
                    <Text style={{ marginLeft: 75 }}>Save Event</Text>
                        </View>
                    <Modal visible={show} animationType='slide'>
                    <View style={{marginTop: 50}}>
                        <Fil />
                        <Logo />
                    </View>
                        <Card style={styles.comment}>
                            <Text style={{marginLeft:10}}>Comments or tips</Text>
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
                    {/* <Button onPress={toggleEvent}>Add A Comment or Tip</Button> */}
                </View>
            </Provider>
        // </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    imageContainer: {
        resizeMode: "contain",
        width: 300,
        height: 220,
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
        height: 140,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 20
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

export default OneEvent