import { StyleSheet, Image } from 'react-native'
import React from 'react'

const Logo = () => {
    return (
        <Image source={require('../assets/fil-logo.png')} style={styles.image} />
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