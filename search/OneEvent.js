import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Linking } from 'react-native'
import React, { useState, useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import { Title, Button } from 'react-native-paper';
import { Context, Provider } from '../context/EventContext';


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
                <Title style={{ textAlign: 'center', fontWeight: '800' }} >{name}</Title>
                <Text>Description:  {description}</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={{ uri: image_url }} />
                </View>

                <Text>Location:  {location.display_address}</Text>
                <Free />
                <TouchableOpacity onPress={() => Linking.openURL(event_site_url)}>
                    <Text style={{ color: 'blue' }}>Event Website</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://maps.google.com')}>
                    <Text style={{ color: 'blue' }}>Google Maps</Text>
                </TouchableOpacity>
                <View style={styles.comment}>
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
                </View>
                    <Button onPress={addEvent}>Add Event</Button>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20
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
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    textInput: {


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