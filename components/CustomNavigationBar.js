import { Appbar } from 'react-native-paper';
import React from 'react';
import { StyleSheet, View } from "react-native";
import Fil from '../components/Fil-logo';
import Logo from '../components/Logo';


export default function CustomNavigationBar({ navigation }) {


    return (
        <View >
            <Fil  style={{marginLeft:20}}/>
            <Logo style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    // fil: {
    //     flex: 1,
    //     height: 20,
    //     width: 20
    // },
    // logo: {
    //     flex: 2,
    //     marginLeft: 5
    // }
});