import { StyleSheet } from 'react-native';
import { ComponentWrapper, MediumText, MediumTitle, PrimaryImage, RegularText, Spacer, TinyTitle, Wrapper } from '../../../../components';
import { AppImages } from '../../../../assets';
import { TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { width, height, totalSize } from 'react-native-dimension';
import { colors, fontFamily } from '../../../../constants';

export const EventPreviewComponent = ({ goBack }) => {
    return (

        <Wrapper>
            <PrimaryImage
                styles={{
                    width: width(100),
                    height: height(50),
                    borderRadius: totalSize(3.2),
                    position: 'absolute',
                    zIndex: 0,
                }}
                source={AppImages.eventPreviewImage}
            />
            <TouchableOpacity onPress={goBack}>
                <Icon
                    name="chevron-left"
                    type="feather"
                    size={totalSize(2.5)}
                    color={colors.appBgColor4}
                    style={styles.chevron}
                />
            </TouchableOpacity>
            <MediumTitle style={styles.eventPreview}>Event Preview</MediumTitle>
            <Spacer height={height(34)} />
        </Wrapper>

    );
};

export const EventPreviewDescription = () => {
    return (

        <ComponentWrapper>
            <MediumTitle style={{ fontSize: totalSize(2), color: colors.appTextColor2 }}>The welfare society Event</MediumTitle>
            <Spacer isSmall />
            <TinyTitle >
                <MediumText style={{ color: colors.appTextColor5, fontSize: totalSize(1.3), }}>
                    Welfare Community |  <MediumText style={{ color: colors.appTextColor1, fontSize: totalSize(1.3), }}>Social Causes</MediumText>
                </MediumText>
            </TinyTitle>
            <Spacer />
            <MediumTitle style={{ fontSize: totalSize(2), color: colors.appTextColor2 }}>About</MediumTitle>
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
        backgroundColor: colors.appBgColor1,
        opacity: 0.5,
        height: height(3.5)
    },
    description: {
        fontSize: totalSize(1.4),
        color: colors.appTextColor8
    },
    eventPreview: {
        fontSize: totalSize(2.4),
        fontFamily: fontFamily.appTextMedium,
        position: 'absolute',
        left: width(35),
        top: height(2)

    },
    heading: {
        fontSize: totalSize(1.7),
        color: colors.appTextColor1,
        fontFamily: fontFamily.appTextSemiBold
    }

});