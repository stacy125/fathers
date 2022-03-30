import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons'
import CategoriesData, { category } from './CategoriesData'
import SearchableDropdown from 'react-native-searchable-dropdown';
import Background from '../components/Background';


const SearchBar = ({ categories, location, onCategoryChange, onLocationChange, onSubmit, filterResultsByLowPrice, filterResultsByMediumPrice, filterResultsByExpensivePrice }) => {

    const [item, setItem] = useState()

    // const selectedItem = () => {
    //     return (
    //         <ScrollView>
    //             <CategoriesData />
    //         </ScrollView>
    //     )
    // }

    return (
            <>
                <View style={styles.searchContainer}>
                    <Feather name="search" size={24} color="red" style={styles.iconStyle} />
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.inputStyle}
                        placeholder="Search by Category"
                        value={categories}
                        onChangeText={onCategoryChange}
                        onEndEditing={onSubmit}
                    />
                </View>
                <View style={styles.locationContainer}>
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
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="$" onPress={filterResultsByLowPrice}>$</Button>
                    <Button style={styles.button} title='$$' onPress={filterResultsByMediumPrice}>$$</Button>
                    <Button style={styles.button} title='$$$' onPress={filterResultsByExpensivePrice}>$$$$</Button>
                </View>
            </> 
    );
};

const styles = StyleSheet.create({
    
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1
    },
    locationContainer: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        height: 25

    },
    inputStyle: {
        fontSize: 18,
        
    },
    iconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'red'
    },

});

export default SearchBar;
