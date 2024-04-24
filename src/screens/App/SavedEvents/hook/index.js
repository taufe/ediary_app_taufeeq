import { useState } from 'react';
import { currentEventsList, eventCategoriesList, upcomingEventsList } from '../../../../utilities/dummyData';


const useSavedEvents = (navigation) => {
    // all local states
    const [savedEvents, setSavedEvents] = useState(upcomingEventsList.slice(0, 3))
    return {
        savedEvents
    };
};

export default useSavedEvents;
