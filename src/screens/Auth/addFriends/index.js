import { AppImages } from '../../../assets'
import { AuthHeaderComponent, ComponentWrapper, GradientButton, MainWrapper, PrimaryImage, Spacer } from '../../../components'
import { height, width } from 'react-native-dimension';
import { AddFriendsList } from '../../../components/listComponent';
import useAddFriends from './hook';

const AddFriends = ({ navigation }) => {
    const { onPressFinish } = useAddFriends(navigation)
    return (
        <MainWrapper>
            <Spacer />
            <PrimaryImage styles={{ alignSelf: 'center', width: width(22), height: height(5) }} source={AppImages.activeDot3} />
            <Spacer isDoubleBase />
            <AuthHeaderComponent heading={'Add Friends'} description={'Select your interest that you are looking for!'} />
            <Spacer height={height(5)} />
            <AddFriendsList />
            <Spacer />
            <ComponentWrapper>
                <GradientButton title={'Finish'} onPress={onPressFinish} />
            </ComponentWrapper>
            <Spacer />
        </MainWrapper>
    )
}

export default AddFriends