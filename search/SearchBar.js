import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const SearchBar = ({ categories, location, onCategoryChange, onLocationChange, onSubmit, filterResultsByLowPrice, filterResultsByMediumPrice, filterResultsByExpensivePrice }) => {

    const [item, setItem] = useState()
    console.log('searchBar');


    return (
        <>
            <View style={styles.container} >
                <View style={styles.searchContainer}>
                    <View style={styles.categoryContainer}>
                        <Feather name="search" size={24} color="red" style={styles.iconStyle} />
                        <TextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={styles.inputStyle2}
                            placeholder="Search by Category"
                            value={categories}
                            onChangeText={onCategoryChange}
                            onEndEditing={onSubmit}
                        />
                    </View>
                    <View style={styles.locationContainer}>
                        <MaterialIcons name="location-pin" size={24} color="red" style={styles.iconStyle} />
                        <TextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={styles.inputStyle}
                            placeholder="Location by City"
                            value={location}
                            onChangeText={onLocationChange}
                            onEndEditing={onSubmit}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="$" onPress={filterResultsByLowPrice}>$</Button>
                    <Button style={styles.button} title='$$' onPress={filterResultsByMediumPrice}>$$</Button>
                    <Button style={styles.button} title='$$$' onPress={filterResultsByExpensivePrice}>$$$</Button>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
    },
    searchContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        alignSelf: 'center'
    },
    categoryContainer: {
        flexDirection: 'row',
    },
    locationContainer: {
        flexDirection: 'row',
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 18,
        height: 35,
        width: 335,
        marginBottom: 10,
        textAlignVertical: "center",
        textAlign: "center",
        right: 25,
    },
    inputStyle2: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 18,
        height: 35,
        width: 335,
        marginBottom: 10,
        right: 25,
        textAlignVertical: "center",
        textAlign: "center"
    },
    iconStyle: {
        fontSize: 20,
        marginVertical: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#F12816',
        borderColor: 'lightgray',
        borderRadius: 20,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
        color: 'white',
        marginLeft: 5
    },

});

export default SearchBar;
