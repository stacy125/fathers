import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

const Contact = () => {
    return (
        <View style={styles.container}>
            <Text>Contact Us</Text>
            <Text>james@cool4dads.com</Text>
            <Text>facebook.com/fatherhoodislit</Text>
            <Text>instagram.com/fatherhoodislit</Text>
            <Button onPress={() => navigation.navigate('Profile')}>Profile</Button>
            <Button onPress={() => navigation.navigate('Home')}>Home</Button>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
        width: '100%'
    }
})