import { TouchableOpacity } from 'react-native';
import {
  ComponentWrapper,
  GradientButton,
  MediumText,
  RegularText,
  Spacer,
  TextInputBordered,
} from '../../../../components';
import {
  SocialButtons,
} from '../../../../components/commonComponents';
import { colors } from '../../../../constants';
import { totalSize, height } from 'react-native-dimension';
import { width } from 'react-native-dimension';

export const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  onLoginPress,
  emailError,
  passwordError,
  onRegisterPress,
  isLoading,
  onGooglePress, onApplePress,
  fullName, setFullName
}) => {
  return (
    <ComponentWrapper>
      <Spacer isBasic />
      <TextInputBordered
        placeholder={'John Poet'}
        value={fullName}
        onChangeText={setFullName
        }
        title={'Full Name'}
      />
      <Spacer isSmall />
      <TextInputBordered
        error={emailError}
        placeholder={'example@gmail.com'}
        value={email}
        onChangeText={setEmail}
        title={'Email'}
      />
      <TextInputBordered
        error={passwordError}
        placeholder={'•••••••••••'}
        iconType={'ionicon'}
        iconName={!showPassword ? 'eye-off-outline' : 'eye-outline'}
        iconColor={colors.appIconColor8}
        iconSize={totalSize(2.4)}
        onPressIcon={() => setShowPassword(!showPassword)}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        title={'Password'}
      />
      <Spacer height={height(3)} />
      <GradientButton title={'Login'} onPress={onLoginPress} isLoading={isLoading} />
      <Spacer />
      <TouchableOpacity style={{ alignSelf: 'center' }}>
        <MediumText color={colors.appTextColor1}>-- Or continue with --</MediumText>
      </TouchableOpacity>
      <Spacer height={height(3)} />
      <SocialButtons onGooglePress={onGooglePress} onApplePress={onApplePress} />
      <Spacer height={height(14)} />
      <TouchableOpacity onPress={onRegisterPress} style={{ alignSelf: 'center' }}>
        <RegularText
          color={colors.appTextColor12}
          style={{ marginRight: width(2.5) }}>
          I don’t have an account?{"  "}
          <MediumText color={colors.appTextColor1} style={{ paddingLeft: width(2) }}>Register</MediumText>
        </RegularText>
      </TouchableOpacity>
    </ComponentWrapper>
  );
};
