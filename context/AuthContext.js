import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import * as Google from 'expo-google-app-auth';
import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, onAuthStateChanged, signInWithCredential, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../secret/firebase';
import * as Facebook from 'expo-facebook';



const AuthContext = createContext({});

const config = {
    androidClientId: '147309702638-414so9u6vfp2kkrnq81d8slfts77fdlr.apps.googleusercontent.com',
    iosClientId: '147309702638-nionflolq6rnc3t2cm9jabuqpv15r0n8.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    permissions: ['public_profile', 'email', 'location']
}
const twitterCongig = {
     accessToken: 'NkxKZkdLc0VDX2lIWTN6c0M0REs6MTpjaQ',
     clientSecret: 'AN7h_jBwlFEcM8pt71AjoRPptt5LpnJZj0r5hnokQEWtz-KY5J'
}

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)
    const [loadingInitial, setLoadingInitial] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() =>
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
            setLoadingInitial(false)
        }), [])

    // const logout = () => {
    //     setLoading(true)

    //     signOut(auth)
    //         .catch((error) => setError(error))
    //         .finally(() => setLoading(false))
    // }



    const signInWithGoogle = async () => {
        setLoading(true)

        await Google.logInAsync(config).then(async (logInResult) => {
            if (logInResult.type === 'success') {
                const { idToken, accessToken } = logInResult
                const credential = GoogleAuthProvider.credential(idToken, accessToken)
                await signInWithCredential(auth, credential)
            }
            return Promise.reject()
        })
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }

    const signInWithTwitter = async () => {
        setLoading(true)
        const provider = new TwitterAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                const credential = TwitterAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const secret = credential.clientSecret;

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
                const credential = TwitterAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const facebookSignIn = async () => {
        setLoading(true)
        try {
            await Facebook.initializeAsync('398897712002981', 'fatherhoodIsLit');
            const { type, token } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email', 'location'],
            });
            if (type === 'success') {
                // SENDING THE TOKEN TO FIREBASE TO HANDLE AUTH
                const credential = FacebookAuthProvider.credential(token);
                await signInWithCredential(auth, credential)
                    .then(user => { // All the details about user are in here returned from firebase
                        console.log('Logged in successfully', user)
                    })
                    .catch((error) => {
                        console.log('Error occurred ', error)
                    });
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    const memoedValue = useMemo(() => ({
        user,
        loading,
        error,
        signInWithGoogle,
        facebookSignIn,
        signInWithTwitter
        // logout,
    }), [user, loading, error])

    return (
        <AuthContext.Provider
            value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    console.log(AuthContext);
    return useContext(AuthContext)
}

