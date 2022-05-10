import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Button, Card, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import Fil from '../components/Fil-logo';
import Logo from '../components/Logo'


const HowItWorksReview = ({ navigation, result }) => {
    const [show, setShow] = useState(false)
    const [rating, setRating] = useState(0)
    const [size, setSize] = useState(1)
    const [review, setReview] = useState('')
    const [title, setTitle] = useState('')

    const toggleShow = () => {
        setShow(!show)
    }

    const updateHeight = () => {
        setSize(size)
    }

    const and = '&'

    return (
        <View>
            <Image source={require('../assets/tips-graphic.png')} style={styles.image} />
            <Text style={{ fontWeight: '600', textAlign: 'center', fontSize: 24 }}>Tips {and} Reviews</Text>
            <View>
                <Text style={styles.text}>Rate, write reviews and add insider tips for an event or activity to help other Dads be prepared.</Text>
            </View>
            <Button style={styles.btn} onPress={toggleShow}><Text style={styles.btnText}>ADD A REVIEW</Text></Button>
            <Modal visible={show} animationType='slide'>
                <View style={styles.modal}>
                    <Fil style={{ marginLeft: 20 }} />
                    <Logo style={styles.logo} />
                    <Title style={styles.title}>EVENT TITLE</Title>
                    <TextInput 
                    placeholder='put the event title here'
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                    style={styles.input}
                    />
                    <Card style={styles.cardTitle}>
                        <Text style={{textAlign: 'center', fontWeight: '700', marginVertical: 20}}>Rate the Event</Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 20 }}>
                            <Text>1 Star</Text>
                            <Slider
                                style={{ width: 200, height: 20}}
                                minimumValue={0}
                                maximumValue={5}
                                step={1}
                                onValueChange={setRating}
                                minimumTrackTintColor='#F12816'
                                maximumTrackTintColor="lightgray"
                            />
                            <Text>{rating} Stars</Text>
                        </View>
                    </Card>
                    <Card style={styles.card}>
                        <TextInput
                            placeholder='Write a review or leave tips if you have attended this event or activity. Other Dads who are interested in this event would love your input.'
                            multiline={true}
                            onContentSizeChange={(e) => updateHeight(e.nativeEvent.contentSize.height)}
                            value={review}
                            onChangeText={(text) => setReview(text)}
                            style={styles.inputStyles}
                        />
                    </Card>
                    <Button style={styles.btn} onPress={toggleShow}><Text style={styles.btnText}>POST A REVIEW</Text></Button>
                </View>
            </Modal>
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
    }, 
    input: {
        alignSelf: 'center',
        marginVertical: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 250,
        fontWeight: 'bold',
    },
    modal: {
        marginTop: 50,
    }, 
    title: {
        marginTop: 30,
        textAlign: 'center',
        fontWeight: '700'
    },
    inputStyles: {
        marginTop: 100,
        textAlign: "center",
        bottom: 50,
    },
    card: {
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
        marginBottom: 20,
        width: 350,
        marginLeft: 10
    }

})