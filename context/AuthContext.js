import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import * as Google from 'expo-google-app-auth';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from 'firebase/auth';
import { auth } from '../secret/firebase'



const AuthContext = createContext({});

const config = {
    androidClientId: '147309702638-414so9u6vfp2kkrnq81d8slfts77fdlr.apps.googleusercontent.com',
    iosClientId: '147309702638-nionflolq6rnc3t2cm9jabuqpv15r0n8.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    permissions: ['public_profile', 'email', 'location']
}

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)
    const [loadingInitial, setLoadingInitial] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            setUser(null)
        }
        setLoadingInitial(false)
    }), [])

    // const logout = () => {
    //     setLoading(true)

    //     signOut(auth).catch((error) => setError(error)).finally(() => setLoading(false))
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
        }).catch(error => setError(error))
          .finally(() => setLoading(false))
    }

    const memoedValue = useMemo(() => ({
        user,
        loading,
        error,
        // logout,
        signInWithGoogle 
    }), [user, error, loading])

    return (
        <AuthContext.Provider 
        value={{ memoedValue }}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    console.log(AuthContext);
    return useContext(AuthContext)
}