
import { TouchableOpacity } from 'react-native';
import { AppIcons } from '../../../assets'
import { Avatar, MainHeader, MainWrapper, Spacer } from '../../../components'
import useMyProfile from './hook'
import { totalSize } from 'react-native-dimension';
import { MyProfileComponent } from './component';

const MyProfile = ({ navigation }) => {
    const { profile, onPressProfile, onPressEditInformation, onPressLogout } = useMyProfile(navigation)
    return (
        <MainWrapper>
            <Spacer />
            <MainHeader title={'My Profile'} showBackBtn />
            <TouchableOpacity onPress={onPressProfile}>
                <Avatar styles={{ alignSelf: 'center' }} source={profile ? { uri: profile } : AppIcons.avatar} size={totalSize(9.6)} />
            </TouchableOpacity>
            <MyProfileComponent onPressEditInformation={onPressEditInformation} onPressLogout={onPressLogout} />
        </MainWrapper>
    )
}

export default MyProfile