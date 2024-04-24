import { useState } from 'react';
import { termsAndConditionsData } from '../../../../utilities/dummyData';


const useTermsAndConditions = (navigation) => {
    // all local states
    const [termsAndConditions, setTermsAndConditions] = useState(termsAndConditionsData)
    //
    return {
        termsAndConditions
    };
};
export default useTermsAndConditions;
