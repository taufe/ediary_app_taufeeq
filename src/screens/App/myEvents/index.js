import { MainHeader, MainWrapper, Spacer } from "../../../components";
import { ComponentHeader } from "../../../components/commonComponents";
import { EventsList, TabsList } from "../../../components/listComponent";
import { colors } from "../../../constants";
import useMyEvents from "./hook";
import { height } from 'react-native-dimension';

const MyEvents = ({ navigation }) => {
    const { eventsData, eventTypes, activeTab, onTabChange, onHeartIconPress } = useMyEvents(navigation);
    return (
        <MainWrapper>
            {/* <Spacer height={height(3)} />
            <MainHeader title={'My Events'} showBackBtn showHeartIcon onHeartPress={onHeartIconPress} showAddIcon />
            <Spacer isTiny />
            <TabsList inActiveBGColors={[colors.appBgColor4, colors.appBgColor4]}
                borderWidth={1} data={eventTypes} activeTab={activeTab} onTabChange={onTabChange} />
            <Spacer isBasic />
            <ComponentHeader title={'Joined Events'} />
            <EventsList data={eventsData} /> */}
        </MainWrapper>
    )
}

export default MyEvents;