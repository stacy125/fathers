import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import client from '../client_secret_147309702638-l838thqpo4v6a5qsht373tc2927qenar.apps.googleusercontent.com.json'



export default GoogleAuth = () => {
    const [user, setUser] = useState(null)

    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
        
        
        const initAsync = async () => {
            await GoogleSignIn.initAsync({
                
                clientId: client,
            });
                _syncUserWithStateAsync();
        };
        
        _syncUserWithStateAsync = async () => {
            const user = await GoogleSignIn.signInSilentlyAsync();
                setUser({ user });
        };
        
        signOutAsync = async () => {
            await GoogleSignIn.signOutAsync();
                setUser({ user: null });
        };
        
        signInAsync = async () => {
            try {
                await GoogleSignIn.askForPlayServicesAsync();
                const { type, user } = await GoogleSignIn.signInAsync();
                if (type === 'success') {
                    _syncUserWithStateAsync(user);
                }
            } catch ({ message }) {
                alert('login: Error:' + message);
            }
        };
        
        onPress = () => {
            if (user) {
                signOutAsync();
            } else {
                signInAsync();
            }
        }

        useEffect(() => {
            initAsync()
        }, [])
        
    }