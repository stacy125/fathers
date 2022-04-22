import { View, TouchableOpacity, Text } from 'react-native'
import React, {useEffect} from 'react'
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../secret/firebase';


const SignOutScreen = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        
        signOut(auth)
    }

    useEffect(() => {
        logout()
    }, [])


    if (user)

        return (
            <View>
                <TouchableOpacity onPress={logout}>
                    <Text>SignOut</Text>
                </TouchableOpacity>
            </View>
        )
}

export default SignOutScreen