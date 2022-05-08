import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import useResults from './UseResults';
import { useNavigation } from '@react-navigation/native';
import Events from '../screens/EventScreen';
import OneEvent from './OneEvent';


const SearchBar = ({navigation}) => {

    const [searchInput, setSearchInput] = useState('')
    const [searchLocation, setSearchLocation] = useState('')
    const [results, searchApi, error] = useResults()


    const toggleEvent = () => {
    
    }
    // const navigation = useNavigation()

    const showEvent = () => {
        return <OneEvent result={item} onPress={toggleEvent} />
    }


    const filterResultsByLowPrice = (cost) => {
        // price === '$' || '$$' || '$$$'
        if (cost === '$') {
            return results.filter(result => {
                return result.cost <= 50
            })
        }
    }

    const filterResultsByMediumPrice = (cost) => {
        // price === '$' || '$$' || '$$$'
        if (cost === '$$') {
            return results.filter(result => {
                return result.cost > 50 < 150
            })
        }
    }

    const filterResultsByExpensivePrice = (cost) => {
        // price === '$' || '$$' || '$$$'
        if (cost === '$$$') {
            return results.filter(result => {
                return result.cost > 150
            })
        }
    }

    const onSubmit = () => { searchApi(searchInput, searchLocation) }


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
                            value={searchInput}
                            onChangeText={(text) => setSearchInput(text)}
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
                            value={searchLocation}
                            onChangeText={(text) => setSearchLocation(text)}
                            onEndEditing={onSubmit}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="$" onPress={filterResultsByLowPrice}>$</Button>
                    <Button style={styles.button} title='$$' onPress={filterResultsByMediumPrice}>$$</Button>
                    <Button style={styles.button} title='$$$' onPress={filterResultsByExpensivePrice}>$$$</Button>
                </View>
                <View style={styles.flatContainer}>
                    <FlatList
                        showsVerticalScrollIndicator
                        data={results}
                        keyExtractor={(result) => result.id}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Event', {result: item })} >
                                    <Events result={item} />
                                </TouchableOpacity>
                            )
                        }}
                    />
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
    flatContainer: {
        height: 450,
        width: 350,
        flexShrink: 1,
        flexWrap: 'wrap'
    }
});

export default SearchBar;
