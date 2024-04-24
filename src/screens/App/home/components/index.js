import { useState } from "react";
import { ButtonColored, Custom, LargeText, LargeTitle, MediumText, RegularText, RowWrapper, RowWrapperBasic, Spacer, Wrapper } from "../../../../components"
import { StyleSheet, TouchableOpacity } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { colors, fontFamily } from "../../../../constants";
import { AppIcons } from "../../../../assets";
import moment from "moment";
import { Icon } from "react-native-elements";


export const WeekDays = ({ setSelectedDay }) => {
    const [selectedDate, setSelectedDate] = useState(Date.parse(new Date()));
    const [next7Days, setNext7Days] = useState(getNext7Days(new Date(selectedDate)));
    const [activeDay, setActiveDay] = useState(1)

    return (
        <RowWrapper>
            {next7Days?.map((day, idx) => {
                return (
                    <DateCard
                        key={idx}
                        date={moment(day).format('DD')}
                        day={moment(day).format('ddd')}
                        onPress={() => {
                            setSelectedDay(moment(day).format('ddd'))
                            setActiveDay(idx + 1)
                        }}
                        active={activeDay == idx + 1}
                    />
                )
            })}
        </RowWrapper>
    )
}

export const getNext7Days = (date) => {
    const next7Days = [];
    for (let i = 0; i <= 6; i++) {
        const nextDay = new Date(date);
        nextDay.setDate(date?.getDate() + i);
        next7Days.push(nextDay);
    }
    return next7Days;
};

const DateCard = ({ onPress, active, day, date }) => {
    return (
        <TouchableOpacity activeOpacity={1}
            onPress={onPress} style={[styles.dateCard, active && styles.activeDateCard]}>
            <MediumText
                style={[styles.dateText, active && styles.activeDate]}>
                {date}
            </MediumText>
            <Spacer height={totalSize(.5)} />
            <MediumText
                style={[styles.dayText, active && styles.activeDay]}>
                {day}
            </MediumText>

        </TouchableOpacity >
    )
}
export const HomeProfileHeader = ({ onPressNotification }) => {
    return (
        <RowWrapper style={{ alignItems: 'flex-start' }}>
            <Wrapper>
                <LargeTitle style={styles.welcome}>Doctor Baloch</LargeTitle>
                <MediumText style={styles.hey}>Hoston - Female, 35</MediumText>
                <Spacer height={height(4)} />
                <LargeTitle style={{ ...styles.welcome, fontSize: totalSize(1.7) }}>Medicine Reminder</LargeTitle>
            </Wrapper>
            <Wrapper>
                <RowWrapperBasic>
                    <Custom onPress={onPressNotification} size={totalSize(2.9)} icon={AppIcons.bellActive} />
                </RowWrapperBasic>
            </Wrapper>
        </RowWrapper>
    )
}

export const MedecineComponent = ({ icon, medicineName, usageTime }) => {
    return (
        <RowWrapper>
            <Wrapper>
                <RowWrapperBasic>
                    {icon}
                    <Wrapper>
                        <LargeText>{medicineName}</LargeText>
                        <RegularText>{usageTime}</RegularText>
                    </Wrapper>
                </RowWrapperBasic>
            </Wrapper>
            <Wrapper>
                <ButtonColored text="Schedule" />
            </Wrapper>
        </RowWrapper>
    )
}

const styles = StyleSheet.create({
    hey: {
        fontSize: totalSize(2),
        color: colors.appTextColor1
    },
    welcome: {
        fontFamily: fontFamily.appTextBold,
        fontSize: totalSize(2.5)
    },

    activeDateCard: {
        backgroundColor: colors.appBgColor1,
        paddingHorizontal: width(3.5),
        paddingVertical: height(.7),
        borderRadius: totalSize(1.6),
    },
    dateCard: {
        backgroundColor: colors.appBgColor4,
        paddingHorizontal: width(3),
        paddingVertical: height(.7),
        borderRadius: totalSize(1.6),

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 3
    },
    activeDay: {
        color: colors.appTextColor4
    },
    dayText: {
        color: colors.appTextColor2,
        fontSize: totalSize(1.3)
    },
    activeDate: {
        color: colors.appTextColor4,
        fontSize: totalSize(2),
        fontFamily: fontFamily.appTextSemiBold
    },
    dateText: {
        color: colors.appTextColor2,
        fontSize: totalSize(2),
        fontFamily: fontFamily.appTextSemiBold
    },
})