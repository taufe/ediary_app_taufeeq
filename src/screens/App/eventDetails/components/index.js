import { StyleSheet } from "react-native";
import { ComponentWrapper, GradientButton, MediumText, MediumTitle, PrimaryImage, RegularText, RowWrapper, RowWrapperBasic, Spacer, TinyTitle, Wrapper } from "../../../../components";
import { colors, fontFamily } from "../../../../constants";
import { totalSize, width, height } from 'react-native-dimension';
import { AppImages } from "../../../../assets";
import { Icon } from "react-native-elements";


export const EventDetailsHeaderComponent = ({ onPressRequested }) => {
    return (
        <ComponentWrapper>
            <RowWrapperBasic >
                <Wrapper>
                    <PrimaryImage size={totalSize(11)} source={AppImages.eventDetailsImage} />
                </Wrapper>
                <Wrapper style={{ paddingLeft: width(3) }}>
                    <MediumTitle style={{ fontSize: totalSize(2), color: colors.appTextColor15 }}>The welfare society Event</MediumTitle>
                    <MediumText style={{ color: colors.appTextColor9, fontSize: totalSize(1.3), }}>
                        <Spacer isTiny />
                        Welfare Community |  <MediumText style={{ color: colors.appTextColor1, fontSize: totalSize(1.3), }}>Social Causes</MediumText>
                    </MediumText>
                    <Spacer isSmall />
                    <GradientButton title={'Requested'} style={{ width: width(30), height: height(5) }} onPress={onPressRequested} />
                </Wrapper>
            </RowWrapperBasic>
        </ComponentWrapper>
    )
}

export const EventDetailsComponent = () => {
    return (

        <ComponentWrapper>
            <MediumTitle style={styles.about}>About</MediumTitle>
            <Spacer isSmall />
            <MediumTitle style={styles.heading}>Event Type:</MediumTitle>
            <Spacer isTiny />
            <RegularText style={styles.description}>Public - 0 joined </RegularText>
            <Spacer isTiny />
            <RegularText style={styles.description}>Limit - 250 Attendees</RegularText>
            <Spacer />
            <MediumTitle style={styles.heading}>Location:</MediumTitle>
            <Spacer isTiny />
            <RegularText style={styles.description}>5900 Cubero Dr NE, NewYork</RegularText>
            <Spacer />
            <MediumTitle style={styles.heading}>Date & Time:</MediumTitle>
            <Spacer isTiny />
            <RegularText style={styles.description}>11:15 am on 27 February 2023 </RegularText>
            <Spacer />
            <MediumTitle style={styles.heading}>Description:</MediumTitle>
            <Spacer isTiny />
            <RegularText style={styles.description}>Lorem ipsum dolor sit amet consectetur. In ultricies in viverra erat. Pretium ut est tortor placerat natoque iaculis rhoncus duis tortor. In in quisque mi adipiscing quis. In suspendisse et pellentesque gravida habitant. Vitae a nam donec accumsan. Mattis diam proin sed odio magna aliquet pretium. </RegularText>
            <Spacer />
        </ComponentWrapper>
    )
}

const styles = StyleSheet.create({
    pageName: {
        color: colors.appTextColor1,
        fontFamily: fontFamily.appTextBold,
        fontSize: totalSize(1.9),
        alignSelf: 'center',
    },
    chevron: {
        left: width(7),
        marginTop: height(2),
        flexDirection: 'column',
        alignSelf: 'flex-start',
        borderRadius: totalSize(10),
        elevation: 0.5,
        shadowColor: colors.appBgColor3,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        paddingHorizontal: totalSize(0.3),
        paddingTop: height(0.3),
        backgroundColor: colors.appBgColor10,
        opacity: 0.5,
        height: height(3.5)
    },
    description: {
        fontSize: totalSize(1.4),
        color: colors.appTextColor8,

    },
    about: {
        fontSize: totalSize(2),
        fontFamily: fontFamily.appTextBold,
        color: colors.appTextColor15
    },
    heading: {
        fontSize: totalSize(1.7),
        color: colors.appTextColor1
    }

});