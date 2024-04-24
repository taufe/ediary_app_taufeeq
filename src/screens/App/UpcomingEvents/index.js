import { MainHeader, MainWrapper, Spacer } from '../../../components'
import { ComponentHeader } from '../../../components/commonComponents';
import useUpcomingEvents from './hook';
import { EventsList } from '../../../components/listComponent';
import { height } from 'react-native-dimension';


const UpcomingEvents = ({ navigation, route }) => {
    const { data } = useUpcomingEvents(navigation, route)
    return (
        <MainWrapper>
            <Spacer height={height(3)} />
            <MainHeader title={route?.params?.title} showBackBtn showSearchIcon />
            <ComponentHeader title={route?.params?.title} />
            <Spacer isSmall />
            <EventsList data={data} />
            <Spacer isBasic />
        </MainWrapper>
    )
}
export default UpcomingEvents;