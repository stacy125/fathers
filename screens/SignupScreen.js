import React, { useContext, useState } from 'react';
import { Button, TextInput } from 'react-native-paper'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Spacer from '../components/Spacer'
import Background from '../components/Background';
import Logo from '../components/Logo'
import Header from '../components/Text';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';



const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [username, setUsername] = useState('')

    const text = "Already have an account? Sign in instead!"
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
            <Logo />
            <View style={styles.container}>
                {/* <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText="Sign Up for Fatherhood Is Lit"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            /> */}
                <Header style={styles.header}>Register</Header>
                {/* <TextInput
                    style={styles.spacer}
                    label="Username"
                    name="username"
                    value={username}
                    onChangeText={text => setUsername(text)}
                /> */}
                <TextInput
                    style={styles.spacer}
                    name="email"
                    autoCapitalize={false}
                    value={email}
                    label="Email"
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.spacer}
                    name="password"
                    value={password}
                    label="Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <Button onPress={handleSignUp}>Submit</Button>
                <TouchableOpacity
                    onPress={() => navigation.navigate(routeName, { screen: 'Signin' })}>
                    <Spacer>
                        <Text style={styles.link}>{text}</Text>
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
    spacer: {
        marginTop: 20,
        marginBottom: 10,
    },
    link: {
        color: 'blue'
    }
});

export default SignupScreen;


// google signin
// facebook signin
// twitter signin