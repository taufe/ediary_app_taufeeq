import { ComponentWrapper, Hrline, MainHeader, MainWrapper, Spacer } from '../../../components'
import { width } from 'react-native-dimension';
import { ProfileHeaderComponent, ProfileOptionsList } from './components';
import useProfile from './hook';

const Profile = ({ navigation }) => {
    const { userName, userProfile, connects, onProfileOptionPress, onConnect, onLogout, onViewProfile } = useProfile(navigation);

    return (
        <MainWrapper>
            {/* <Spacer />
            <MainHeader title={'Account'} showBackBtn />
            <Spacer isSmall />
            <ComponentWrapper>
                <ProfileHeaderComponent name={userName} profile={userProfile} noOfConnects={connects} onConnect={onConnect} onViewProfile={onViewProfile} />
                <Hrline Width={width(90.69)} />
                <ProfileOptionsList onPress={onProfileOptionPress} />
            </ComponentWrapper> */}
        </MainWrapper>
    )
}

export default Profile