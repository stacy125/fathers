import { StyleSheet, Text, View, Linking, TouchableOpacity, Image, Dimensions} from 'react-native'
import {Card} from 'react-native-paper'
import React from 'react'
import { Title } from 'react-native-paper';


const { width } = Dimensions.get("screen");

const Events = ({ result }) => {
    // console.log(result, 'events');


    return (
        <View style={styles.container}>
            <Title style={{ marginLeft: 5 }}>Event Name: {result?.name} </Title>
            <Text style={{ marginLeft: 5, marginBottom: 5 }}>Location:  {result?.location?.display_address}</Text>
            <Card style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={{ uri: result?.image_url }} />
            </Card>         
            {/* <Text style={{ marginLeft: 5 }}>Description:  {result?.description}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:5 }}>
                    <TouchableOpacity onPress={() => Linking.openURL(result.event_site_url)}>
                        <Text style={{ color: 'blue' }}>Event Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://maps.google.com')}>
                        <Text style={{ color: 'blue' }}>Google Maps</Text>
                    </TouchableOpacity>
                </View> */}
         
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'lightgray',
        borderRadius: 20,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
        borderWidth: 2,
        margin: 10
    },
    dataContainer: {
        // width: 335,
        marginLeft: 15,

    },
    imageContainer: {
        width: 335,
        height: 250,
        alignSelf: 'center'
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
})

export default Events
