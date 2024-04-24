import { useState } from 'react';
import { currentEventsList, eventCategoriesList, upcomingEventsList } from '../../../../utilities/dummyData';


const useUpcomingEvents = (navigation, route) => {
    // all local states

    const [data, setData] = useState(route?.params?.data)





    return {
        data
    };
};

export default useUpcomingEvents;
