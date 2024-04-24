import React from 'react';
import { SCREEN, colors } from '../../../constants';
import { AuthHeaderComponent, MainWrapper, ScrollView, Spacer } from '../../../components';
import { LoginForm } from './components';
import useLogin from './hook';
import { height } from 'react-native-dimension';
import { AppStatusBar } from '../../../components/commonComponents';


const SignIn = ({ navigation }) => {
  const {
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
    fullName, setFullName
  } = useLogin(navigation);

  return (
    <MainWrapper>
      <AppStatusBar bgColor={colors.appBgColor2} />
      <ScrollView>
        <Spacer height={height(7.7)} />
        <AuthHeaderComponent heading={'Login'} description={'Welcome back, Put your information to access your account'} />
        <Spacer height={height(3)} />
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onLoginPress={onLoginPress}
          emailError={emailError}
          passwordError={passwordError}
          isLoading={isLoading}
          onRegisterPress={() => navigation.navigate(SCREEN.signUp)}
          fullName={fullName}
          setFullName={setFullName}
        />
      </ScrollView>
    </MainWrapper>
  );
};

export default SignIn;
