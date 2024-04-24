import { ComponentWrapper, GradientButton, MediumText, MediumTitle, Spacer, Wrapper } from "../../../../components"
import PrimaryDropDown from "../../../../components/dropDown"
import { colors } from "../../../../constants"
import { height } from 'react-native-dimension'
import { Slider } from 'react-native-elements';
import { style } from "../style"
import { DatePickerComponent, TimePickerComponent } from "../../../../components/commonComponents"
export const DistanceRangeSelector = ({ styles, title, value, onSliderChange }) => {
    return (
        <Wrapper style={[{ marginVertical: height(1), }, styles]}>
            <MediumTitle style={style.heading}>{title}</MediumTitle>
            <Wrapper style={style.sliderContainer}>
                <Wrapper style={style.distanceWrapper}>
                    <MediumText style={style.distanceText}>{value} Miles</MediumText>
                </Wrapper>
                <Slider
                    value={value}
                    onValueChange={onSliderChange}
                    trackStyle={style.sliderTrack}
                    thumbStyle={style.sliderThumb}
                    minimumTrackTintColor={colors.appBgColor1}
                    maximumTrackTintColor={colors.appBgColor6}
                    step={1}
                    maximumValue={100}


                />
                <Wrapper style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Wrapper style={{ flex: 1 }}>
                        <MediumTitle style={style.count}>0</MediumTitle>
                    </Wrapper>
                    <Wrapper style={{ flex: 1 }}>
                        <MediumTitle style={style.count}>10</MediumTitle>
                    </Wrapper>
                    <Wrapper style={{ flex: 1 }}>
                        <MediumTitle style={style.count}>20</MediumTitle>
                    </Wrapper>
                    <Wrapper style={{ flex: 1 }}>
                        <MediumTitle style={style.count}>30</MediumTitle>
                    </Wrapper>
                    <Wrapper style={{ flex: 1 }}>
                        <MediumTitle style={style.count}>40</MediumTitle>
                    </Wrapper>
                    <Wrapper style={{ flex: 1 }}>
                        <MediumTitle style={style.count}>50 Miles</MediumTitle>
                    </Wrapper>

                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export const SearchFilterForm = ({ interest, setInterest, interestsItems, distance, setDistance, ageRange, setAgeRange, ageRangeItems,
    friendList, setFriendList, friendItems, date, setDate, time, setTime, isDatePickerVisible, setIsDatePickerVisible,
    isTimePickerVisible, setIsTimePickerVisible, onApply
}) => {
    return (
        <ComponentWrapper>
            <PrimaryDropDown
                title="Choose Your Interest"
                value={interest}
                setValue={setInterest}
                items={interestsItems}
                zIndex={3}
            />
            <Spacer isSmall />
            <PrimaryDropDown
                title="Choose Age Range"
                value={ageRange}
                setValue={setAgeRange}
                items={ageRangeItems}
                zIndex={2}
            />
            <Spacer isSmall />
            <PrimaryDropDown
                title="Friend List"
                value={friendList}
                setValue={setFriendList}
                items={friendItems}
                zIndex={1}
            />
            <Spacer isSmall />
            <DatePickerComponent date={date} setDate={setDate} isVisible={isDatePickerVisible} setIsVisible={setIsDatePickerVisible} />
            <TimePickerComponent time={time} setTime={setTime} isVisible={isTimePickerVisible} setIsVisible={setIsTimePickerVisible} />
            <Spacer isSmall />
            <DistanceRangeSelector title={'Select Distance Range'} value={distance} onSliderChange={setDistance} />
            <Spacer height={height(4)} />
            <GradientButton title={'Apply Filter'} onPress={onApply} />
        </ComponentWrapper>
    )
}