import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const HowItWorksReview = ({navigation}) => {


    const and = '&'

    return (
        <View>
            <Image source={require('../assets/tips-graphic.png')} style={styles.image}/>
            <Text style={{ fontWeight: '600', textAlign: 'center', fontSize: 24 }}>Tips {and} Reviews</Text>
            <View>
                <Text style={styles.text}>Rate, write reviews and add insider tips for an event or activity to help other Dads be prepared.</Text>
            </View>
            <Button style={styles.btn} onPress={() => navigation.navigate('Add An Review')}><Text style={styles.btnText}>ADD A REVIEW</Text></Button>
             <TouchableOpacity onPress={() => navigation.navigate('How it works')}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={{ fontSize: 25, color: "#3DBFF2" }}>NEXT</Text>
                <MaterialCommunityIcons name="skip-next" size={30} color="#3DBFF2" style={{ alignSelf: 'center' }} />
            </View>
             </TouchableOpacity>
        </View>
    )
}

export default HowItWorksReview

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
        fontSize: 18,
    }

})