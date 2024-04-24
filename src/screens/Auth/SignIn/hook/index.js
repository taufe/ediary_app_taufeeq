import { useState } from 'react';
import Validations from '../../../../utilities/validations';
import Toast from 'react-native-simple-toast';
import { SCREEN } from '../../../../constants';
import { StackActions } from '@react-navigation/native';

const useLogin = (navigation, route) => {
  // all local states
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // validation for email and password
  const validations = () => {
    !email
      ? setEmailError('Please enter your email, it is a required field')
      : !Validations.validateEmail(email)
        ? setEmailError('Email format is invalid')
        : setEmailError('');
    !password
      ? setPasswordError('Please enter your password, it is a required field')
      : password.length < 6
        ? setPasswordError('Password should be at least 6 characters long')
        : setPasswordError('');
    if (email && password?.length >= 6 && Validations.validateEmail(email)) {
      return true;
    } else {
      return false;
    }
  };

  // click on login button
  const onLoginPress = () => {
    // if (validations()) {
    //   Toast.show('Login Successful');
    //   setIsLoading(true);
    // navigation.navigate(SCREEN.home)
    // navigation.navigate(SCREEN.appStack, { screen: SCREEN.home });
    // navigation.navigate(SCREEN.appStack);
    navigation.dispatch(StackActions.replace(SCREEN.appStack))

    // } else {
    //   setIsLoading(false);
    // }
  };


  // on google press
  const onGooglePress = () => {
    // handle google login
    console.log('handle google login...')
  }

  // on apple press
  const onApplePress = () => {
    // handle apple login
    console.log('handle apple login...')
  }



  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    onLoginPress,

    emailError,
    passwordError,
    isLoading,
    onGooglePress, onApplePress,
    fullName, setFullName
  };
};

export default useLogin;
