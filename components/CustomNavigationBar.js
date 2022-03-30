import { Appbar } from 'react-native-paper';
import React from 'react';
import { StyleSheet } from "react-native";
import TabList from '../menu/TabList';

export default function CustomNavigationBar({navigation}) {
   

    return (
        <Appbar.Header >
            <TabList />
            {/* <Appbar.Content title="FatherhoodIsLit" style={styles.text}/> */}
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 12,
    },
    header: {
        backgroundColor: 'darkblue',
    }
});