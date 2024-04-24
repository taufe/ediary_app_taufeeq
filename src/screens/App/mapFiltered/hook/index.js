import { useState } from 'react';
import { eventTypesList, pastEventsData, upcomingEventsList } from '../../../../utilities/dummyData';
import { SCREEN } from '../../../../constants';


const useMyEvents = (navigation, route) => {
    // all local states
    const [activeTab, setActiveTab] = useState(0);
    const [eventTypes, setEventTypes] = useState(eventTypesList)
    const [eventsData, setEventsData] = useState(upcomingEventsList?.slice(0, 4)); // to store upcoming and past events

    // on event category tab press
    const onTabChange = (id) => {
        id == 0 ? setEventsData(upcomingEventsList?.slice(0, 4)) : setEventsData(pastEventsData)
        setActiveTab(id)
    }

    // on heart icon press in header
    const onHeartIconPress = () => {
        navigation.navigate(SCREEN.savedEvents)
    }



    return {
        eventsData, eventTypes, activeTab, onTabChange, onHeartIconPress
    };
};

export default useMyEvents;
