import React, { useState } from 'react'
import { useClearByFocusCell } from 'react-native-confirmation-code-field';
import { SCREEN } from '../../../../constants';
const useVerifyEmail = (navigation, route) => {
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        otp,
        setOtp,
    });

    // otp validations
    const validations = () => {
        if (otp.length < 4) {
            setOtpError('Please Enter 4 digit otp code');
            return false
        } else {
            setOtpError('');
            return true
        }
    }

    // continue button press
    const onContinue = async () => {
        console.log('onContinue  called....', otp)
        // if (validations()) {
        navigation.navigate(SCREEN.codeVerifying)
        // } else {
        //     setIsLoading(false);
        // }
    }
    // on resend press
    const onResendCode = async () => {
        console.log('onResendCode  called....')

    }

    return {
        otp, setOtp, otpError, props, getCellOnLayoutHandler, onContinue, onResendCode, isLoading
    }
}

export default useVerifyEmail