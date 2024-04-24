import { ComponentWrapper, MainHeader, MainWrapper, MediumTitle, ScrollView, Spacer, TextInputBordered, Wrapper } from "../../../components"
import { EventDetailsImagesList, PostList } from "../../../components/listComponent"
import { EventDetailsComponent, EventDetailsHeaderComponent } from "./components"
import useEventDetails from "./hook"
import { height } from 'react-native-dimension';
import { styles } from "./styles";


const EventDetails = ({ navigation }) => {
    const { isShown, onPressThreeDots, onPress } = useEventDetails(navigation)
    return (
        <MainWrapper>
            <Spacer height={height(3.5)} />
            <MainHeader showBackBtn title={'Event'} showHeartIcon heartFill isThreeDots isShown={isShown} onPressThreeDots={onPressThreeDots} />
            <ScrollView>
                <EventDetailsHeaderComponent />
                <Spacer />
                <ComponentWrapper>
                    <EventDetailsImagesList />
                </ComponentWrapper>
                <Spacer />
                <EventDetailsComponent />
                <MediumTitle style={styles.community}>Community:</MediumTitle>
                <Spacer isSmall />
                <ComponentWrapper>
                    <TextInputBordered onPress={onPress} placeholder={'Write comment here . . .'} isButton={true} gradientButton buttonText={'Post'} />
                </ComponentWrapper>
                <Spacer isSmall />
                <Wrapper>
                    <PostList />
                </Wrapper>
            </ScrollView>
        </MainWrapper>
    )
}

export default EventDetails