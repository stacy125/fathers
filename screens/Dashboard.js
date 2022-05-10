import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { Button } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import Calendar from '../assets/calendar.png';
import { useNavigation } from '@react-navigation/native';
import { auth, db} from '../secret/firebase'
import { doc, getDoc } from 'firebase/firestore';




const Dashboard = ({ show, toggleDashboard }) => {

    const navigation = useNavigation()
    console.log(navigation, 'this');

    const [color, setColor] = useState(true);
    const [addColor, setAddColor] = useState(true);
    const [reviewColor, setReviewColor] = useState(true);
    const [events, setEvents] = useState([]);


    const onModalClose = () => {
        toggleDashboard()
    }

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

    return (
        <View>
            <Modal visible={show} animationType='slide' navigation={navigation} onModalClose={toggleDashboard}>
                <View style={{ flexDirection: "row", alignSelf: 'center', marginVertical: 40 }}>
                    <Button style={styles.topButton} onPress={toggleDashboard}>
                        <Text style={styles.topText}>YOUR ACCOUNT</Text>
                    </Button>

                    <Button style={styles.topButton} onPress={toggleDashboard}>
                        <Text style={styles.topText}>DASHBOARD</Text>
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => {setColor(!color)}} >
                        <Text style={{ color: color ? '#747688' : '#F12816' }}>SAVED EVENTS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setAddColor(!addColor) }}>
                        <Text style={{ color: addColor ? '#747688' : '#F12816' }}>ADDED EVENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setReviewColor(!reviewColor)}>
                        <Text style={{ color: reviewColor ? '#747688' : '#F12816' }}>REVIEWS</Text>
                    </TouchableOpacity>
                </View>
                    <Image source={Calendar} style={styles.image} />
                {color ? (
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>NO UPCOMING EVENTS</Text> )
                    : 
                   ( <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>NO SAVED EVENTS</Text>
                )}
                {addColor ? color : 
                   ( <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>NO ADDED EVENTS</Text>
                )}
                {reviewColor ? color :
                    
                   ( <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>NO REVIEWS</Text>
                )}
                <Text style={styles.text}>Search our database to find events and activities, then save them to your profile for future use!</Text>
                <Button style={styles.button} onPress={() => {onModalClose(); navigation.navigate('Drawer', { screen: 'Find Event' })}}>
                    <Text style={styles.btnText} >EXPLORE EVENTS</Text>
                </Button>
            </Modal>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    topButton: {
        backgroundColor: 'white',
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
        width: 180,
        alignSelf: 'center',
        marginBottom: 20
    },
    topText: {
        color: '#F12816'
    },
    text: {
        color: '#747688',
        textAlign: 'center',
        margin: 10
    },
    image: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20
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
    btnText: {
        color: 'white'
    }
})