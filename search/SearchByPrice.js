import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../search/ResultsList';
import SearchBar from '../search/SearchBar';
import useResults from '../search/useResults';



const SearchByPrice = () => {

    const [searchInput, setSearchInput] = useState('')
    const [searchLocation, setSearchLocation] = useState('')
    const [results, searchApi, error] = useResults([])

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

    return (
        <>
            <SearchBar
                categories={searchInput}
                location={searchLocation}
                onCategoryChange={setSearchInput}
                onLocationChange={setSearchLocation}
                onSubmit={() => searchApi(searchInput, searchLocation)}
            />

            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByLowPrice('$')} title="Affordable" />
                <ResultsList results={filterResultsByMediumPrice('$$')} title="Bit Pricer" />
                {/* <ResultsList results={filterResultsByExpensivePrice('$$$')} title="Big Spender" /> */}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchByPrice;
