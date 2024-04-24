import { ComponentWrapper, GradientButton, MainHeader, MainWrapper, ScrollView, Spacer, TextInputBordered, Wrapper } from '../../../components'
import { AboutEventComp, DistanceRangeSelectorComponent, RangeSlider } from './components'
import { AboutEventHeader, DatePickerComponent, TimePickerComponent } from '../../../components/commonComponents'
import useAboutEvent from './hook'
import { colors } from '../../../constants'
import { InvitationScopeList } from '../../../components/listComponent'
import { width } from 'react-native-dimension';

const AboutEvent = ({ navigation }) => {
    const { onPressContinue, eventCategories, eventCategory,
        setEventCategory, eventInvitation,
        setEventInvitation, eventNumberofInvitations,
        seteventNumberofInvitations, date,
        setDate, time, setTime, isDatePickerVisible,
        setIsDatePickerVisible, isTimePickerVisible,
        setIsTimePickerVisible, onPressLocation,
        selectedDistance, setSelectedDistance,
        handleButtonPress, values,
        handleValuesChange
    } = useAboutEvent(navigation)
    return (
        <MainWrapper>
            <ScrollView>
                <Spacer />
                <MainHeader title={'Create Event'} showBackBtn />
                <AboutEventHeader title={'About Event'} description={'Fill the information about event you want to create'} />
                <ComponentWrapper style={{ marginHorizontal: width(2) }}>
                    <AboutEventComp eventCategories={eventCategories} setEventCategory={setEventCategory} eventCategory={eventCategory} eventInvitation={eventInvitation} setEventInvitation={setEventInvitation} eventNumberofInvitations={eventNumberofInvitations} seteventNumberofInvitations={seteventNumberofInvitations} />
                    <DatePickerComponent title={'Add Date'} date={date} setDate={setDate} isVisible={isDatePickerVisible} setIsVisible={setIsDatePickerVisible} />
                    <TimePickerComponent title={'Add Time'} time={time} setTime={setTime} isVisible={isTimePickerVisible} setIsVisible={setIsTimePickerVisible} />
                    <TextInputBordered title={'Add Location'} isButton placeholder={'Location'} iconName={'location'} iconType={'evilicon'} iconColor={colors.appBgColor12} onPress={onPressLocation} />
                    <Spacer />
                </ComponentWrapper>
                <Wrapper>
                    <RangeSlider values={values} handleValuesChange={handleValuesChange} />
                </Wrapper>
                <Spacer />
                <Wrapper>
                    <InvitationScopeList
                        selectedDistance={selectedDistance}
                        setSelectedDistance={setSelectedDistance}
                        handleButtonPress={handleButtonPress}
                    />
                </Wrapper>
                <Spacer isDoubleBase />
                <ComponentWrapper>
                    <GradientButton title={'Next'} onPress={onPressContinue} />
                </ComponentWrapper>
                <Spacer />
            </ScrollView>
        </MainWrapper>
    )
}

export default AboutEvent