import React, { useContext, useState } from 'react';
import { Button } from 'react-native-paper'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Spacer from '../components/Spacer'
import Background from '../components/Background';
import Logo from '../components/Logo'
import Header from '../components/Text';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import Fil from '../components/Fil-logo'



const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const text = "Sign in instead!"
    const routeName = "Signin"



    const handleSignUp = ({ navigation }) => {
        auth
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log(user);
            }).then(user => {
                auth.onAuthStateChanged(user => {
                    if (user) {
                        navigation.dispatch(
                            navigation.navigate({
                                name: 'Events',
                                params: {
                                    user,
                                },
                            })
                        );
                    }
                })
            })
            .catch(error =>
                alert(error.message));
    }


    return (
        <Background>
            <View style={styles.container}>
            <Fil />
            <Logo />
                <Header style={styles.header}>Register</Header>
                <View style={{flexDirection: 'row'}}>
                <Text>Create an</Text>
                <Text style={{ color: '#F12816', left: 2, marginRight: 4}}>account</Text>
                <Text>to access all the features of </Text>
                </View>
                <Text>#FatherhoodIsLit</Text>
                <Text style={styles.text}>Username</Text>
                <Button
                    style={styles.spacer}
                    label="Username"
                    name="username"
                    value={username}
                    onChangeText={text => setUsername(text)}
                />
                <Text style={styles.text}>Email</Text>
                <Button
                    style={styles.spacer}
                    name="email"
                    autoCapitalize={false}
                    value={email}
                    label="Email"
                    onChangeText={text => setEmail(text)}
                />
                <Text style={styles.text}>Your Password</Text>
                <Button
                    style={styles.spacer}
                    name="password"
                    value={password}
                    label="Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate(routeName, { screen: 'Signin' })}>
                    <Button style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>REGISTER</Text></Button>
                    <Spacer >
                        <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.link1}>Already have an account? </Text>
                        <Text style={styles.link}>{text}</Text>
                        </View>
                    </Spacer>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 50
    },
    spacer: {
        marginTop: 2,
        marginBottom: 15,
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: '#F12816',
        borderWidth: 1,
        borderRadius: 16,
    },
    link: {
        color: '#F12816'
    },
    header: {
        color: '#F12816',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        // left: 40
    },
    text: {
        fontWeight: '600',
        marginTop: 30
    },
    button: {
        backgroundColor: '#14225C',
        width: 300,
        height: 50,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'lightgray',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
        justifyContent: 'center',
        marginLeft: -10

    },
    buttonText: {
        color: 'white',
    },
    textC: {
        flexDirection: 'row',
        marginTop: 20
    }
});

export default SignupScreen;


// google signin
// facebook signin
// twitter signin