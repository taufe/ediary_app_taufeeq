import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN } from '../../constants';
import * as Auth from '../../screens/Auth';
const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      //   initialRouteName={SCREEN.signIn}
      initialRouteName={SCREEN.onboarding}>
      <Screen name={SCREEN.onboarding} component={Auth.Onboarding} />
      <Screen name={SCREEN.signIn} component={Auth.SignIn} />
      <Screen name={SCREEN.signUp} component={Auth.SignUp} />
      <Screen name={SCREEN.codeVerifying} component={Auth.CodeVerifying} />
      <Screen name={SCREEN.verifyEmail} component={Auth.VerifyEmail} />
      <Screen name={SCREEN.uploadProfile} component={Auth.UploadProfile} />
      <Screen name={SCREEN.interests} component={Auth.Interests} />
      <Screen name={SCREEN.addFriends} component={Auth.AddFriends} />
    </Navigator>
  );
};
export default AuthNavigation;
