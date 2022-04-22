import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper'
import Background from '../components/Background';
import Logo from '../components/Logo'
import Header from '../components/Text';
import Fil from '../components/Fil-logo'
import { auth } from '../secret/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation} from '@react-navigation/native';




const SigninScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [isLoggedIn, setIsLoggedIn] = useState(false)


    
    const text = "Sign up instead"
    const routeName = "Signup"
    
    
    const handleSignIn = () => {
        auth
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(user);
        }).then(user => {
            auth.onIdTokenChanged(user => {
                if (user) {
                    setTimeout(() => {
                        navigation.navigate('Drawer', {
                                screen: "Events",
                            })
                    }, 2000);
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
            <View style={styles.container}>
            <Fil />
            <Logo />

                <Header style={styles.header}>Log In</Header>
                <Text>Log in and help build the #FatherhoodIsLit database!</Text>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.spacer}
                    name="email"
                    value={email}
                    label="Email"
                    onChangeText={text => setEmail(text)}
                />
                <Text style={styles.text}>Your Password</Text>
                <TextInput
                    style={styles.spacer}
                    label="Password"
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <Button style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>LOG IN</Text></Button>
                <TouchableOpacity style={styles.textC}
                    onPress={() => navigation.navigate(routeName, {screen: 'Signup'})}>
                    <Text style={styles.linkText}>Dont have an account?</Text>
                    <Text style={styles.link}>{text}</Text>
                </TouchableOpacity>
            </View>
        </Background>

    );
};

SigninScreen.navigationOptions = {
    header: () => false,
};

const styles = StyleSheet.create({
    container: {
        margin: 50
    },
    spacer: {
        width: 300,
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: '#F12816',
        borderWidth: 1,
        marginTop: 2,
        marginBottom: 25,
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

export default SigninScreen;
