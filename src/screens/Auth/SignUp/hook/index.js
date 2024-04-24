import { useState } from 'react';
import Validations from '../../../../utilities/validations';
import Toast from 'react-native-simple-toast';
import { SCREEN } from '../../../../constants';
import { ProvinceData, cityData, countryData } from '../../../../utilities/dummyData';

const useSignUp = (navigation, route) => {
  // all local states
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState('');
  const [state, setState] = useState('');
  const [stateError, setStateError] = useState('');
  const [country, setCountry] = useState('');
  const [countryError, setCountryError] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [address, setAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const [countryDropdown, setCountryDropdown] = useState(countryData)
  const [cityDropdown, setcityDropdown] = useState(cityData)
  const [provinceDropdown, setProvinceDropdown] = useState(ProvinceData)
  // validation for signUp
  const validations = () => {
    !name
      ? setNameError('Please enter your name, it is a required field')
      : setNameError('');
    !email
      ? setEmailError('Please enter your email, it is a required field')
      : !Validations.validateEmail(email)
        ? setEmailError('Email format is invalid')
        : setEmailError('');
    !city
      ? setCityError('Please enter your city, it is a required field')
      : setCityError('');
    !state
      ? setStateError('Please enter your state, it is a required field')
      : setStateError('');
    !country
      ? setCountryError('Please enter your country, it is a required field')
      : setCountryError('');
    !password
      ? setPasswordError('Please enter your password, it is a required field')
      : password.length < 6
        ? setPasswordError('Password should be at least 6 characters long')
        : setPasswordError('');

    if (
      name &&
      email &&
      Validations.validateEmail(email) &&
      city &&
      state &&
      country &&
      password &&
      password.length >= 6
    ) {
      return true;
    } else {
      return false;
    }
  };

  // click on register button
  const onRegisterPress = () => {
    // if (validations()) {
    // setIsLoading(true);
    navigation.navigate(SCREEN.appStack)
    // } else {
    //   setIsLoading(false);
    // }
  };

  // on google press
  const onGooglePress = () => {
    // handle google signup
    console.log('handle google signup...')
  }

  // on apple press
  const onApplePress = () => {
    // handle apple signup
    console.log('handle apple signup...')
  }

  return {
    name,
    setName,
    nameError,
    setNameError,
    email,
    setEmail,
    emailError,
    setEmailError,
    city,
    setCity,
    cityError,
    setCityError,
    state,
    setState,
    stateError,
    setStateError,
    country,
    setCountry,
    countryError,
    setCountryError,
    password,
    setPassword,
    passwordError,
    setPasswordError,
    showPassword,
    setShowPassword,
    isLoading,
    onRegisterPress,
    onGooglePress,
    onApplePress,
    countryDropdown,
    setCountryDropdown,
    cityDropdown, setcityDropdown,
    provinceDropdown, setProvinceDropdown,
    address, setAddress

  };
};

export default useSignUp;
