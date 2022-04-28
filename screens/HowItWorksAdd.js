import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const HowItWorksAdd = ({navigation}) => {

    return (
        <View>
            <Image source={require('../assets/add-graphic.png')} style={styles.image} />
            <Text style={{ fontWeight: '600', textAlign: 'center', fontSize: 24 }}>Add to Our Dad-abase</Text>
            <View>
                <Text style={styles.text}>You can add events or save an event to help build our Dad approved database</Text>
            </View>
            <Button style={styles.btn} onPress={() => navigation.navigate('Add An Event')}><Text style={styles.btnText}>ADD AN EVENT</Text></Button>
             <TouchableOpacity onPress={() => navigation.navigate('How it works to Review')}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
                <Text style={{ fontSize: 25, color: "#3DBFF2" }}>NEXT</Text>
                <MaterialCommunityIcons name="skip-next" size={30} color="#3DBFF2" style={{ alignSelf: 'center' }} />
            </View>
             </TouchableOpacity>
        </View>
    )
}

export default HowItWorksAdd

const styles = StyleSheet.create({
    image: {
        width: 280,
        height: 228,
        margin: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        resizeMode: 'contain'

    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: "center",
        margin: 20
    },
    btn: {
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
        width: 300,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    btnText: {
        color: 'white',
        fontSize: 18
    }

})