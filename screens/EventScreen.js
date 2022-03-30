import { StyleSheet, Text, View, Linking, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const Event = ({ result }) => {

    return (
        <View style={styles.container}>
            <View style={styles.dataContainer}>
                <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
                <Text>Event Name: {result.name} </Text>
                <Text>Description:  {result.description}</Text>
                <Text>Location:  {result.location.display_address}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(result.event_site_url)}>
                    <Text>Event Website</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://maps.google.com')}>
                    <Text>Google Maps</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: '100%',
        // marginTop: 100
    },
    imageStyle: {
        width: 250,
        height: 150,
        // borderRadius: 4,
        // marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
        marginBottom: 20
    }
})

export default Event
