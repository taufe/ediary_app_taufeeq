import React from 'react';
import { AuthHeaderComponent, MainWrapper, ScrollView, Spacer } from '../../../components';
import { SignUpForm } from './components';
import useSignUp from './hook';
import { SCREEN } from '../../../constants';
import { height } from 'react-native-dimension';

const SignUp = ({ navigation }) => {
  const { name, setName, nameError, setNameError, email, setEmail, emailError, setEmailError,
    city, setCity, cityError, setCityError, state, setState, stateError, setStateError, country, setCountry,
    countryError, setCountryError, password, setPassword, passwordError, setPasswordError, showPassword,
    setShowPassword, isLoading, onRegisterPress, onGooglePress, onApplePress, countryDropdown,
    cityDropdown, provinceDropdown, onpressLogin, address, setAddress
  } = useSignUp(navigation);
  return (
    <MainWrapper>
      <ScrollView>
        <Spacer height={height(7.7)} />
        <AuthHeaderComponent heading={'Register'} description={'Put all of your personal information like name, email, contact etc'} />
        <Spacer height={height(3)} />
        <SignUpForm
          isLoading={isLoading}
          name={name}
          email={email}
          city={city}
          state={state}
          country={country}
          setCountry={setCountry}
          password={password}
          nameError={nameError}
          emailError={emailError}
          cityError={cityError}
          stateError={stateError}
          countryError={countryError}
          passwordError={passwordError}
          showPassword={showPassword}
          countryDropdown={countryDropdown}
          setCity={setCity}
          cityDropdown={cityDropdown}
          setState={setState}
          provinceDropdown={provinceDropdown}
          address={address}
          setAddress={setAddress}
          onShowPassword={() => setShowPassword(!showPassword)}
          onChangeName={text => { setName(text), setNameError('') }}
          onChangeEmail={text => { setEmail(text), setEmailError('') }}
          onChangeCity={text => { setCity(text), setCityError('') }}
          onChangeState={text => { setState(text), setStateError('') }}
          onChangeCountry={text => { setCountry(text), setCountryError('') }}
          onchangePassword={text => { setPassword(text), setPasswordError('') }}
          onRegisterPress={onRegisterPress}
          onpressLogin={() => navigation.navigate(SCREEN.signIn)}
          onGooglePress={onGooglePress}
          onApplePress={onApplePress}
        />
      </ScrollView>
    </MainWrapper>
  );
};

export default SignUp;
