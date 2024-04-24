import { useState } from 'react';
import { AppIcons } from '../../../../assets';
import { SCREEN } from '../../../../constants';
import { StackActions } from '@react-navigation/native';


const useProfile = (navigation) => {
    // all local states
    const [userName, setUserName] = useState('James Clear');
    const [userProfile, setUserProfile] = useState(AppIcons.avatar);
    const [connects, setConnects] = useState('500+');


    // on profile options press
    const onProfileOptionPress = (screenName) => {
        screenName && navigation.navigate(screenName)
    }
    //on connect press
    const onConnect = () => {

    }
    // on logout press
    const onLogout = () => {
        // navigation.navigate(SCREEN.signIn)
        navigation.dispatch(StackActions.replace(SCREEN.authStack, { screen: SCREEN.signIn }))
    }

    // on view profile press
    const onViewProfile = () => {
        navigation.navigate(SCREEN.myprofile)
    }

    return {
        userName, userProfile, connects, onProfileOptionPress, onConnect, onLogout, onViewProfile
    };
};

export default useProfile;
