import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Linking } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import yelp from '../api/YelpAPI';
import Header from '../components/Text';
import Context from '../context/EventContext'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const [value, setValue] = useState('')
    const [comment, setComment] = useState('')
    const id = navigation.getParam('id')
    const {addEvent} = useContext(Context)
 
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if(!result) {
        return null
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.image_url}
                keyExtractor={image_url => image_url}
                renderItem={({ item }) => {
                    console.log(item); 
                    return (
                        <View>
                            <Header>{result.name}</Header>
                            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
                            <Text>Description:  {result.description}</Text>
                            <Text>Location:  {result.location.display_address}</Text>
                            <Text onPress={() => Linking.openURL('https://maps.google.com')}>Google Maps</Text>
                            <Text>Start Date/time: {result.time_start}</Text>
                            <Text>End Date/time: {result.time_end}</Text>
                            <Text>Price: {result.costs} </Text>
                            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
                            <TouchableOpacity onPress={() => Linking.openURL(result.event_site_url)}>
                                <Text>Event Website</Text>
                            </TouchableOpacity>
                            <Text onPress={() => Linking.openURL(result.event_site_url)}>Google Maps</Text>
                            <Text>Comment</Text>
                            <TextInput
                                placeholder='Why you choose this event? Your response goes here.'
                                value={setValue}
                                autoCapitalize='none'
                                autoCorrect={false}
                                style={styles.inputStyle}
                                onChangeText={setComment}
                            />
                            <Button onPress={addEvent}>Add Event</Button>
                        </View>
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 10
    }
})

export default ResultsShowScreen