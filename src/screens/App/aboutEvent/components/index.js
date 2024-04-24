import { StyleSheet } from "react-native"
import { MediumText, MediumTitle, Spacer, Wrapper } from "../../../../components"
import { totalSize, width, height } from 'react-native-dimension';
import { TouchableOpacity } from "react-native";
import { colors } from "../../../../constants";
import PrimaryDropDown from "../../../../components/dropDown";
import { ScrollView } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export const InvitationScope = ({ km, onPress, selected, isColor }) => {
    return (
        <Wrapper>
            <TouchableOpacity onPress={onPress} >
                <MediumText style={[styles.distance, { backgroundColor: selected ? colors.appBgColor1 : colors.appBgColor11, color: isColor ? colors.appTextColor4 : colors.appTextColor2 }]}>
                    {km}
                </MediumText>
            </TouchableOpacity>
        </Wrapper>
    )
}

export const AboutEventComp = ({ eventCategory, setEventCategory, eventCategories, onPressContinue, eventInvitation, setEventInvitation, eventNumberofInvitations, seteventNumberofInvitations }) => {
    return (
        <Wrapper>
            <PrimaryDropDown
                placeholder={'Private Event'}
                value={eventCategory}
                setValue={setEventCategory}
                items={eventCategories}
                zIndex={2}
                iconColor={colors.appIconColor8}
                iconSize={totalSize(2)}
                title={'Event Type'}
            />
            <Spacer isSmall />
            <PrimaryDropDown
                placeholder={'Number of Invitation'}
                value={eventInvitation}
                setValue={setEventInvitation}
                items={eventNumberofInvitations}
                zIndex={1}
                iconColor={colors.appIconColor8}
                iconSize={totalSize(2)}
                title={'Number of Invitation'}
            />
            <Spacer isSmall />
        </Wrapper>
    )
}


export const RangeSlider = ({ values, handleValuesChange }) => {

    return (
        <ScrollView>
            <Wrapper style={styles.sliderContainer}>
                <Wrapper styles={styles.distanceWrapper}>
                    <MediumText style={styles.distanceText}>{values[0]} Year</MediumText>
                </Wrapper>
                <MultiSlider
                    values={values}
                    sliderLength={width(84)}
                    onValuesChange={handleValuesChange}
                    min={0}
                    max={65}
                    step={1}
                    allowOverlap
                    snapped
                    trackStyle={{
                        height: height(1.07),
                        width: width(92),
                        borderRadius: totalSize(1),
                        backgroundColor: colors.appBgColor9,

                    }}
                    selectedStyle={{
                        backgroundColor: colors.appBgColor1,


                    }}
                    unselectedStyle={{
                        backgroundColor: colors.appBgColor9
                    }}
                    markerStyle={{
                        backgroundColor: colors.appBgColor1,
                        top: height(.45),
                    }}
                />
                <Wrapper style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Wrapper style={{ flex: 1, }}>
                        <MediumTitle style={styles.rangeText}>{values[0]} years</MediumTitle>
                    </Wrapper>
                    <MediumTitle style={styles.rangeText}>{values[1]} years</MediumTitle>
                </Wrapper>
            </Wrapper>
        </ScrollView>
    );
};


const styles = StyleSheet.create({

    distance: {
        fontSize: totalSize(1.7),
        color: colors.appTextColor2,
        backgroundColor: colors.appBgColor1,
        borderRadius: totalSize(1.1),
        paddingHorizontal: width(5),
        paddingVertical: height(2.5),
        textAlign: 'center',
        marginRight: width(5),

    },

    distanceWrapper: {
        backgroundColor: colors.appBgColor10,
        borderRadius: totalSize(20),
        marginBottom: totalSize(1.5),
        paddingHorizontal: width(3),
        paddingVertical: height(0.2),
        borderTopEndRadius: totalSize(5)
    },
    distanceText: {
        fontSize: totalSize(1.4),
        color: colors.appTextColor4,
        backgroundColor: colors.appBgColor1,
        paddingHorizontal: width(2),
        paddingVertical: height(.2),
        borderBottomLeftRadius: totalSize(.9),
        borderTopLeftRadius: totalSize(.9),
        borderTopRightRadius: totalSize(.9)

    },
    sliderContainer: {
        borderRadius: totalSize(2),
        borderColor: colors.appBorderColor9,
        paddingHorizontal: width(6),
        marginVertical: height(1),
        backgroundColor: colors.appBgColor4,
        alignItems: 'center',
        borderWidth: 1,
        marginHorizontal: width(4),
        paddingVertical: height(2)
    },
    rangeText: {
        fontSize: totalSize(1.3),
        color: '#0F172A'
    },

})

