import { AuthHeaderComponent, ComponentWrapper, GradientButton, MainWrapper, PrimaryImage, ScrollView, Spacer, Wrapper } from '../../../components'
import useInterest from './hook'
import { AppImages } from '../../../assets'
import { width, height } from 'react-native-dimension';
import { InterestList } from '../../../components/listComponent'

const Interests = ({ navigation }) => {
    const { onPressNext, selectedInterests, toggleInterest } = useInterest(navigation);

    return (
        <MainWrapper>
            <ScrollView>
                <Spacer />
                <PrimaryImage styles={{ alignSelf: 'center', width: width(22), height: height(5) }} source={AppImages.activeDot2} />
                <Spacer isDoubleBase />
                <AuthHeaderComponent heading={'Show Interest'} description={'Select your interest that you are looking for!'} />
                <Spacer height={height(5)} />
                <ComponentWrapper>
                    <InterestList selectedInterests={selectedInterests} toggleInterest={toggleInterest} />
                    <Spacer isDoubleBase />
                    <GradientButton title={'Next'} onPress={onPressNext} />
                </ComponentWrapper>
            </ScrollView>
        </MainWrapper>
    )
}

export default Interests

