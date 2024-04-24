import { ComponentWrapper, MainHeader, MainWrapper, Spacer, } from '../../../components'
import { AccordionList } from '../../../components/listComponent';
import { FaqsList } from './components'
import useFaqs from './hook';

const Faq = ({ navigation }) => {
    const { isOpenAccordion,
        setIsOpenAccordion,
        toggleAccordion,
        currentIndex,
        setCurrentIndex, } = useFaqs(navigation);
    return (
        <MainWrapper>
            <Spacer />
            <MainHeader title={'FAQ'} showBackBtn />
            <Spacer />
            <ComponentWrapper>
                <AccordionList isOpenAccordion={isOpenAccordion}
                    setIsOpenAccordion={setIsOpenAccordion}
                    toggleAccordion={toggleAccordion}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex} />
            </ComponentWrapper>
        </MainWrapper>
    )
}


export default Faq