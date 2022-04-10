import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Poppins = () => {



    let [fontsLoaded] = useFonts({
        'Poppins': 'https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap'
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
}
    export default Poppins()
