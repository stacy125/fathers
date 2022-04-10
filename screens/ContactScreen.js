import { StyleSheet, Text, View, Linking } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Background from '../components/Background';

const Contact = () => {
    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.email}>
                    <FontAwesome name="paper-plane" size={97} color="#F12816" />
                    <Text style={styles.text} >james@cool4dads.com</Text>
                </View>
                <View style={styles.line} ></View>
                    <Text style={styles.title} >Follow Us</Text>
                <View style={styles.icons}>
                    <Button style={styles.icon} onPress={() => Linking.openURL('https://facebook.com/fatherhoodislit')}>
                        <FontAwesome name="facebook" size={57} color="#F12816" />
                    </Button>
                    <Button style={styles.icon} onPress={() => Linking.openURL('https://instagram.com/fatherhoodislit')}>
                    <FontAwesome name="instagram" size={57} color="#F12816" />
                    </Button>
                </View>
            </View>
        </Background>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // marginBottom: 250,
        width: '100%'
    },
    email: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 24
    },
    line: {
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        marginBottom: 20,
        marginTop: 20
    },
    icons: {
        flexDirection: 'row',
    },
    icon: {
        left: 50,
        margin: 30
    },
    text: {
        marginTop: 20,
        marginBottom: 20
    }
})