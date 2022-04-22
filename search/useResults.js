import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import yelp from "../api/YelpAPI";
import ResultsList from "./ResultsList";



export default function UseResults () {
    const [results, setResults] = useState([])
    const [result, setResult] = useState([])
    const [error, setError] = useState("")

    const navigation = useNavigation()
    
    
    const searchApi = async (searchInput, searchLocation) => {
       
        console.log(searchInput, 'useResult') 
        console.log(searchLocation, 'useL');
        // console.log(results, 'hi');
       
        try {
            const respone = await yelp.get('', {
                params: {
                    // limit: 5,
                    categories: searchInput,
                    location: searchLocation  
                }
            })
            setResults(respone.data.events)
        } catch (err) {
            setError("something went wrong")
        }
    }

    useEffect (async () => {
        searchApi('kid-friendly', 'NY')
    }, [])

    // return [results, searchApi, error]
    return <ResultsList results={results} navigation={navigation} />
    
}