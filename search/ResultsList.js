// import { useNavigation } from '@react-navigation/native';
// import React from 'react'
// import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
// import Events from '../screens/EventScreen'
// import SearchBar from './SearchBar';



// const ResultsList = ({ results }) => {
//     const navigation = useNavigation()

//     const showEvent = (item) => {
        
//         navigation.push('MainStacks', { 
//             screen: "Chosen Event", 
//             params: {result: item}
//         })
//     }

//     return (
//         <View style={styles.container}>
//             <SearchBar />
//             <FlatList
//                 showsVerticalScrollIndicator
//                 data={results}
//                 keyExtractor={(result) => result.id}
//                 renderItem={({ item }) => {
//                     return (
//                         <TouchableOpacity
//                             onPress={() => showEvent(item)} >
//                             <Events result={item} />
//                         </TouchableOpacity>
//                     ) 
//                 }}
//             />

//         </View>
//     )
    
// }

// const styles = StyleSheet.create({})

// export default ResultsList

