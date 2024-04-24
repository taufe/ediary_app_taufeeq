import { useState } from "react";
import { NotificationsData } from "../../../../utilities/dummyData";
import moment from "moment";

const useNotification = () => {
    // all local states
    const todayDate = moment();
    const yesterdayDate = moment().subtract(1, 'day');

    const [todaysNotifications, setTodaysNotifications] = useState(NotificationsData.filter((item) => {
        const itemDate = moment(item?.date);
        return itemDate.isSame(todayDate, 'day');
    }))

    const [yesterdayNotifications, setYesterdayNotifications] = useState(NotificationsData.filter((item) => {
        const itemDate = moment(item?.date);
        return itemDate.isSame(yesterdayDate, 'day');
    }))

    // on accept pressed
    const onAcceptTodayRequest = (index, data) => {
        const updatedNotifications = [...todaysNotifications];
        updatedNotifications[index].status = 'ignored'
        setTodaysNotifications(updatedNotifications);
    }

    // on ignore pressed
    const onIgnoreTodayRequest = (index, type) => {
        const updatedNotifications = [...todaysNotifications];
        updatedNotifications[index].status = 'ignored'
        setTodaysNotifications(updatedNotifications);
    }

    // on accept pressed
    const onAcceptYesterdayRequest = (index, data) => {
        const updatedNotifications = [...yesterdayNotifications];
        updatedNotifications[index].status = 'accepted'
        setYesterdayNotifications(updatedNotifications);
    }

    // on ignore pressed
    const onIgnoreYesterdayRequest = (index, type) => {
        const updatedNotifications = [...todaysNotifications];
        updatedNotifications[index].status = 'ignored'
        setTodaysNotifications(updatedNotifications);
    }

    return {
        todaysNotifications, yesterdayNotifications, onAcceptTodayRequest, onIgnoreTodayRequest,
        onAcceptYesterdayRequest, onIgnoreYesterdayRequest
    }
}

export default useNotification;