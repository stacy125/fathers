import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Logo = () => {
    return (
        <>
            <Ionicons name="menu-outline" size={24} color="white" />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 50,
        marginBottom: 20,
        alignSelf: 'center',

    }
})

export default Logo