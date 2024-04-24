import { useState, useEffect } from 'react';
import { SCREEN } from '../../../../constants';
import { upcomingEventsList } from '../../../../utilities/dummyData';

const useSearch = (navigation, route) => {
    // all local states
    const [searchResults, setSearchResults] = useState(upcomingEventsList.slice(0, 2));
    const [searchTerm, setSearchTerm] = useState('');

    // on filter icon pressed
    const onFilterPressed = () => {
        navigation.navigate(SCREEN.searchFilter)
    }

    //search functionality
    useEffect(() => {
        if (searchTerm?.length == 0) {
            setSearchResults(upcomingEventsList.slice(0, 2))
        } else {
            const filteredData = searchResults?.filter(item => item.name?.toLocaleLowerCase()?.includes(searchTerm?.toLocaleLowerCase()));
            console.log(filteredData)
            setSearchResults(filteredData)
        }
        return () => {
        }
    }, [searchTerm])

    return {
        searchResults, onFilterPressed, searchTerm, setSearchTerm
    };
};

export default useSearch;
