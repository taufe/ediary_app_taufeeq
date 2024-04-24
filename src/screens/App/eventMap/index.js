
import { MainWrapper } from '../../../components'
import { MapComponent } from './component'
import useEventMap from './hook'

const EventMap = ({ navigation }) => {
    const { onPressPin } = useEventMap(navigation)
    return (
        <MainWrapper>
            {/* <MapComponent goBack={() => navigation.goBack()} title={'Pin on Map'} onPressPin={onPressPin} /> */}
        </MainWrapper>
    )
}

export default EventMap