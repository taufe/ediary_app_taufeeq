
import { ComponentWrapper, GradientButton, MainWrapper, ScrollView, Spacer } from '../../../components'
import { EventPreviewComponent, EventPreviewDescription } from './components'
import { SCREEN, colors } from '../../../constants'

const EventPreview = ({ navigation }) => {
    const customBackgroundColor = 'transparent';

    return (
        <MainWrapper>
            <ScrollView>
                <EventPreviewComponent goBack={() => navigation.goBack()} />
                <EventPreviewDescription />
                <ComponentWrapper>
                    <GradientButton onPress={() => navigation.navigate(SCREEN.home)} title={'Publish'} />
                    <GradientButton borderColor={colors.appBorderColor1} borderWidth={1} textColor={colors.appTextColor1} title={'Edit Information'} bgGradientColor={[customBackgroundColor, customBackgroundColor]} />
                    <Spacer />
                </ComponentWrapper>
            </ScrollView>
        </MainWrapper>
    )
}

export default EventPreview