
import { useState } from 'react';
import { SCREEN } from '../../../../constants';


const useInterest = (navigation) => {
    // All useState hooks
    const [selectedInterests, setSelectedInterests] = useState([0]);

    // get started press
    const onPressNext = () => {
        navigation.navigate(SCREEN.addFriends)
    }

    const toggleInterest = (interestId) => {
        const isSelected = selectedInterests.includes(interestId);
        if (isSelected) {
            setSelectedInterests((prevSelected) =>
                prevSelected.filter((id) => id !== interestId)
            );
        } else {
            setSelectedInterests((prevSelected) => [...prevSelected, interestId]);
        }
    };
    return {
        onPressNext, selectedInterests, setSelectedInterests, toggleInterest
    };
};

export default useInterest;
