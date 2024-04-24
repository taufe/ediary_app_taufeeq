import { Avatar } from "react-native-elements"
import { CardWrapper, GradientButtonSmall, MediumTitle, RegularText, RowWrapperBasic, SmallText, Wrapper } from "../../../../components"
import { FlatList } from "react-native"
import { height, width, totalSize } from 'react-native-dimension';
import { StyleSheet } from 'react-native'
import moment from "moment";
import { colors } from "../../../../constants";
const Dot = ({ size }) => {
    return (
        <Wrapper style={{ marginHorizontal: width(2), backgroundColor: colors.appBgColor8, height: totalSize(size ? size : 0.3), width: totalSize(size ? size : 0.3), borderRadius: totalSize(size ? size : 0.3) / 2 }} />
    )
}

export const NotificationCard = ({ profile, userName, date, description, showButton, onAccept, onIgnore }) => {
    return (
        <CardWrapper style={{ width: width(90.86), paddingHorizontal: totalSize(1.8), paddingVertical: totalSize(1.5), marginVertical: totalSize(1), shadowColor: 0, backgroundColor: colors.appBgColor11 }}>
            <RowWrapperBasic style={{ alignItems: 'center' }}>
                <Avatar source={profile} size={totalSize(3.6)} />
                <MediumTitle style={{ marginLeft: width(2), color: colors.appTextColor2, fontSize: totalSize(1.4) }}>{userName}</MediumTitle>
                <Dot />
                <SmallText style={{ color: '#3E3E3E' }}>{date ? moment(date).fromNow() : ''}</SmallText>
            </RowWrapperBasic>
            <RegularText style={{ fontSize: totalSize(1.4), marginVertical: totalSize(1), color: '#ACACAC' }}>{description}</RegularText>
            {showButton && (
                <RowWrapperBasic style={{ alignSelf: 'flex-end' }}>
                    <GradientButtonSmall textColor={colors.appTextColor1} title={'Ignore'} isMediumText={true} style={{ ...style.acceptRejectBtn, marginRight: width(2.5), color: colors.appTextColor1 }} bgGradientColor={colors.gradiant7} onPress={onIgnore} />
                    <GradientButtonSmall title={'Accept'} isMediumText={true} style={style.acceptRejectBtn} onPress={onAccept} />
                </RowWrapperBasic>
            )}
        </CardWrapper>
    )
}

export const NotificationsList = ({ heading, data, onAccept, onIgnore }) => {
    return (
        <FlatList
            scrollEnabled={false}
            data={data}
            ListHeaderComponent={() => (
                <MediumTitle style={{ fontSize: totalSize(1.8), marginVertical: totalSize(0.5), color: colors.appTextColor2 }}>{heading}</MediumTitle>
            )}
            renderItem={({ item, index }) => {
                return (
                    <NotificationCard
                        profile={item?.userProfile}
                        userName={item?.userName}
                        date={item?.date}
                        description={item?.description}
                        showButton={item?.status == 'pending' ? true : false}
                        onAccept={() => onAccept(index, data)}
                        onIgnore={() => onIgnore(index, data)}
                    />
                )
            }}
        />
    )
}

const style = StyleSheet.create({
    acceptRejectBtn: {
        marginTop: height(3),
        width: width(25.81),
        height: totalSize(3.2),
        paddingVertical: 0,
        marginHorizontal: 0,
    }
})