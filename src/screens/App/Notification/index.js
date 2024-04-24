import { ComponentWrapper, MainHeader, MainWrapper, ScrollView, Spacer } from "../../../components"
import { NotificationsList } from "./component"
import useNotification from "./hook"
import { height } from 'react-native-dimension';

const Notifications = ({ navigation, route }) => {
    const { todaysNotifications, yesterdayNotifications, onAcceptTodayRequest, onIgnoreTodayRequest,
        onAcceptYesterdayRequest, onIgnoreYesterdayRequest } = useNotification(navigation)
    return (
        <MainWrapper>
            <ScrollView>
                <Spacer />
                <MainHeader title={'Notification'} showBackBtn />
                <ComponentWrapper>
                    <NotificationsList heading={'Today'} data={todaysNotifications} onAccept={onAcceptTodayRequest} onIgnore={onIgnoreTodayRequest} />
                    <NotificationsList heading={'Yesterday'} data={yesterdayNotifications} onAccept={onAcceptYesterdayRequest} onIgnore={onIgnoreYesterdayRequest} />
                    <Spacer height={height(11)} />
                </ComponentWrapper>
            </ScrollView>
        </MainWrapper>
    )
}

export default Notifications