import { useState } from 'react';
import { AccordionData } from '../../../../utilities/dummyData';


const useFaqs = (navigation) => {
    // all local states
    const [isOpenAccordion, setIsOpenAccordion] = useState(
        Array(AccordionData.length).fill(false)
    );

    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleAccordion = (index) => {
        const newIsOpenAccordion = [...isOpenAccordion];
        newIsOpenAccordion[index] = !newIsOpenAccordion[index];
        setIsOpenAccordion(newIsOpenAccordion);
        setCurrentIndex(index);
    };
    return {
        currentIndex, setCurrentIndex, toggleAccordion, isOpenAccordion, setIsOpenAccordion
    };
};
export default useFaqs;
