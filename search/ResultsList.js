import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import Event from '../screens/EventScreen'


const ResultsList = ({ results, navigation: { navigate } }) => {
 
    if(!results.length){
        return null;
    }
    console.log(results);
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigate('ResultsShow', { id: item.id })} >
                            <Event result={item} />
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
    
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        width: 250,
        marginLeft: 15
    }
})

export default ResultsList

