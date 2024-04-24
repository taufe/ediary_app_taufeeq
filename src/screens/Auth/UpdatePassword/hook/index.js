import { useState } from 'react';
import { SCREEN } from '../../../../constants';

const useUpdatePassword = (navigation, route) => {
    // all local states
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    // validation for password and confirm password
    const validations = () => {
        !password
            ? setPasswordError('Please enter your password, it is a required field')
            : password.length < 6
                ? setPasswordError('Password should be at least 6 characters long')
                : setPasswordError('');
        !confirmPassword
            ? setConfirmPasswordError('Please enter confirm password, it is a required field')
            : confirmPassword.length < 6
                ? setConfirmPasswordError('Confirm Password should be at least 6 characters long')
                : confirmPassword !== password ? setConfirmPasswordError('Password and confirm password should be the same')
                    : setConfirmPasswordError('');
        if (password?.length >= 6 && confirmPassword?.length >= 6 && password === confirmPassword) {
            return true;
        } else {
            return false;
        }
    };

    // click on update password button
    const onUpdatePassword = () => {
        // if (validations()) {
        // setIsLoading(true);
        if (route?.params?.screen) {
            navigation.goBack()
        } else {
            navigation.navigate(SCREEN.signIn)
        }
        // } else {
        //     setIsLoading(false);
        // }
    };

    return {
        password, setPassword, showPassword, setShowPassword, passwordError, setPasswordError,
        confirmPassword, setConfirmPassword, showConfirmPassword, setShowConfirmPassword, confirmPasswordError,
        onUpdatePassword, setConfirmPasswordError, isLoading
    };
};

export default useUpdatePassword;
