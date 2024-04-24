import { useState, useEffect } from 'react';
import { ageRangeDropdownData, eventCategoriesDropdownData, friendListDropdownData } from '../../../../utilities/dummyData';

const useSearchFilter = (navigation, route) => {
    // all local states
    //interest
    const [interest, setInterest] = useState(eventCategoriesDropdownData[0]?.value);
    const [interestsItems, setInterestsItems] = useState(eventCategoriesDropdownData);
    //age range
    const [ageRange, setAgeRange] = useState(ageRangeDropdownData[0]?.value)
    const [ageRangeItems, setAgeRangeItems] = useState(ageRangeDropdownData)
    // distance range
    const [distance, setDistance] = useState(20);
    //friend list
    const [friendList, setFriendList] = useState(friendListDropdownData[0]?.value)
    const [friendItems, setFriendItems] = useState(friendListDropdownData)
    //date & time
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

    // on apply filter press
    const onApply = () => {
        // console.log({ interest, distance, ageRange, friendList, date, time })
        navigation.goBack()
    }


    return {
        interest, setInterest, interestsItems, distance, setDistance, ageRange, setAgeRange, ageRangeItems, friendList, setFriendList, friendItems,
        date, setDate, time, setTime, isDatePickerVisible, setIsDatePickerVisible, isTimePickerVisible, setIsTimePickerVisible,
        onApply,
    };
};

export default useSearchFilter;
