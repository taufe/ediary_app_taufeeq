
import { useState } from 'react';
import { SCREEN } from '../../../../constants';
const useEventDetails = (navigation) => {
    const [isShown, setIsShown] = useState(null);

    const onPressThreeDots = () => {
        setIsShown(!isShown)
    }


    const onPress = () => {
        navigation.navigate(SCREEN.eventpost)
    }

    return { isShown, setIsShown, onPressThreeDots, onPress }
}

export default useEventDetails