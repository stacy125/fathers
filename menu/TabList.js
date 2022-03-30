import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MenuLogo from '../components/MenuLogo'


export default function TabList({ navigation }) {
    const [isVisible, setIsVisibile] = useState(false)

    return (
        <View style={{
            width: '20%', height: 40, marginTop: '10%'
        }}>
            <MenuLogo/>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Events')}>
                <Text>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AddEvent')}>
                <Text>Add An Event</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Approved')}>
                <Text>Approved Events</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                <Text>Contact Us</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 150,
        maxHeight: '5%'
    },
    paragraph: {
        backgroundColor: 'lavender',
        fontSize: 18,
        fontWeight: 'bold',
    },
    seen: {
        height: '100%'
    }
});
