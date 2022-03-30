import { useEffect, useState } from "react";
import yelp from "../api/YelpAPI";

export default () => {
    const [results, setResults] = useState([])
    const [error, setError] = useState("")
   

    const searchApi = async (searchInput, searchLocation) => {
       
        console.log(searchInput) 
        console.log(searchLocation);
       
        try {
            const respone = await yelp.get('', {
                params: {
                    limit: 5,
                    categories: searchInput,
                    location: searchLocation  
                }
            })
            setResults(respone.data.events)
        } catch (err) {
            setError("something went wrong")
        }
    }

    useEffect(() => {
        searchApi('sports-active-life', 'NY')
    }, [])

    return [results, searchApi, error]
}