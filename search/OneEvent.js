import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Linking } from 'react-native'
import React, { useState, useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import { Title, Button, Card } from 'react-native-paper';
import { Context, Provider } from '../context/EventContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Save from '../assets/save-icon.png'
import Map from '../assets/map-icon.png'
import Review from '../assets/review-icon.png'


const OneEvent = () => {
    const [value, setValue] = useState('')
    const [comment, setComment] = useState('')
    const { addEvent, state } = useContext(Context)


    const route = useRoute()

    const { id, name, image_url, location, description, event_site_url, cost, is_free } = route.params.result

    const Free = () => {
        if (is_free === true) {
            return <Text style={{ fontWeight: '600', textAlign: 'center' }} >This Event is FREE!</Text>
        } else {
            return <Text>Price: {cost} </Text>
        }
    }

    console.log(route, 'hi');
    console.log(image_url, 'hello');

    return (
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
                <View style={{ flexDirection: 'row', marginTop: 50, marginLeft: 50 }}>
                    <TouchableOpacity>
                        <MaterialIcons name="note-add" size={35} color='#F12816' style={{ marginLeft: 45 }}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://maps.google.com')}>
                        <FontAwesome5 name="map-marked" size={35} color='#F12816' style={{ marginLeft: 45 }}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="bookmark" size={35} color='#F12816' style={{ marginLeft: 45 }}/>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.comment}>
                    <Text>Comments or tips</Text>
                    <TextInput
                        placeholder='Why you choose this event? Your response goes here.'
                        value={setValue}
                        multiline
                        numberOfLines={4}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.textInput}
                        onChangeText={setComment}
                    />
                </View> */}
                {/* <Button onPress={addEvent}>Add Event</Button> */}
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    imageContainer: {
        resizeMode: "contain",
        width: 300,
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
        height: 170,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 20
    },
    comment: {
        marginTop: 10,
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
    }
})

export default OneEvent