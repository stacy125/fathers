import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper'
import Background from '../components/Background';
import Logo from '../components/Logo'
import Header from '../components/Text';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [isLoggedIn, setIsLoggedIn] = useState(false)




    const text = "Dont have an account? Sign up instead"
    const routeName = "SignupScreen"


    const handleSignIn = () => {
        auth
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            }).then(user => {
                auth.onIdTokenChanged(user => {
                    if (user) {
                        navigation.navigate('Events')
                    }
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }



    return (
        <Background>
            <Logo />
            <View style={styles.container}>

                <Header style={styles.header}>Log In</Header>
                <TextInput
                    style={styles.spacer}
                    name="email"
                    value={email}
                    label="Email"
                    autoCapitalize={false}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.spacer}
                    label="Password"
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate(routeName)}>
                    <Text style={styles.link}>{text}</Text>
                </TouchableOpacity>
                <Button onPress={handleSignIn}>submit</Button>
                <Button onPress={() => navigation.replace("Home")}>Home</Button>
                <Button onPress={() => navigation.navigate('AddEventScreen')}>AddEventScreen</Button>
            </View>
        </Background>

    );
};

SigninScreen.navigationOptions = {
    header: () => false,
};

const styles = StyleSheet.create({
    spacer: {
        marginTop: 20,
        marginBottom: 30,
    },
    link: {
        color: 'blue'
    }
});

export default SigninScreen;
