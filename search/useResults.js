import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import yelp from "../api/YelpAPI";
// import SearchBar, {} from "./SearchBar";

export default function UseResults () {
    const [results, setResults] = useState([])
    const [error, setError] = useState("")

    const navigation = useNavigation()
    
    
    const searchApi = async (searchInput, searchLocation) => {
       
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

    return [results, searchApi, error]
    // return <SearchBar searchApi={searchApi} results={results} navigation={navigation} />
    
}