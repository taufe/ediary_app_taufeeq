import { ComponentWrapper, MainHeader, MainWrapper, MediumTitle, RegularText, RowWrapperBasic, ScrollView, Spacer, } from '../../../components'
import { TermsDescription, TermsTitle } from './components';
import useTermsAndConditions from './hook';

const TermsAndConditions = ({ navigation }) => {
    const { termsAndConditions } = useTermsAndConditions(navigation);
    return (
        <ScrollView>
            <MainHeader title={'Terms & Conditions'} showBackBtn />
            <ComponentWrapper>
                <TermsTitle title={termsAndConditions.termsTitle} />
                <TermsDescription text={termsAndConditions.termsDescription} />
                <TermsTitle title={termsAndConditions.privacyTitle} />
                <TermsDescription text={termsAndConditions.privacyDescription} />
                <Spacer />
            </ComponentWrapper>
        </ScrollView>
    )
}


export default TermsAndConditions