import { SCREEN } from "../../../../constants"
import { ageRangeDropdownData, eventCategoriesDropdownData, eventNumberOfInvitation } from "../../../../utilities/dummyData";
import { useState } from 'react';


const useAboutEvent = (navigation) => {
    const [values, setValues] = useState([10, 65]);
    const [eventCategory, setEventCategory] = useState('');
    const [eventCategories, setEventCategories] = useState(eventCategoriesDropdownData)
    const [eventInvitation, setEventInvitation] = useState('');
    const [eventNumberofInvitations, seteventNumberofInvitations] = useState(eventNumberOfInvitation)
    //date & time
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
    const [selectedDistance, setSelectedDistance] = useState(0)


    const handleButtonPress = (index) => {
        setSelectedDistance(index);
    }

    const handleValuesChange = (newValues) => {
        setValues(newValues);
    };
    const onPressContinue = () => {
        navigation.navigate(SCREEN.inviteFriends)
    }
    const onPressLocation = () => {
        navigation.navigate(SCREEN.eventMap)
    }
    return {
        onPressContinue, eventCategories, setEventCategories,
        eventCategory, setEventCategory, eventInvitation,
        setEventInvitation, eventNumberofInvitations,
        seteventNumberofInvitations, date, setDate, time, setTime,
        isDatePickerVisible, setIsDatePickerVisible, isTimePickerVisible,
        setIsTimePickerVisible, onPressLocation,
        selectedDistance, setSelectedDistance,
        handleButtonPress,
        values, setValues,
        handleValuesChange


    }
}

export default useAboutEvent