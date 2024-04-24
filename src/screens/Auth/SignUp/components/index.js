import { TouchableOpacity } from 'react-native';
import {
  ComponentWrapper,
  GradientButton,
  MediumText,
  RegularText,
  Spacer,
  TextInputBordered,
  Wrapper,
} from '../../../../components';
import { colors } from '../../../../constants';
import { appStrings } from '../../../../utilities/appStrings';
import { width, totalSize, height } from 'react-native-dimension';
import PrimaryDropDown from '../../../../components/dropDown';
import { SocialButtons } from '../../../../components/commonComponents';

export const SignUpForm = ({
  name,
  email,
  city,
  state,
  country,
  setCountry,
  password,
  showPassword,
  onChangeName,
  onChangeEmail,
  onchangePassword,
  onShowPassword,
  nameError,
  emailError,
  passwordError,
  isLoading,
  onRegisterPress,
  onLoginPress,
  countryDropdown,
  setCity,
  cityDropdown,
  setState,
  provinceDropdown,
  onpressLogin,
  address, setAddress,
  onChangeCountry
}) => {
  return (
    <ComponentWrapper>
      <Spacer isBasic />
      <TextInputBordered
        error={nameError}
        placeholder={'John Poet'}
        value={name}
        onChangeText={onChangeName}
        title={'Full Name'}
      />

      <TextInputBordered
        error={emailError}
        placeholder={'example123@gmail.com'}
        value={email}
        onChangeText={onChangeEmail}
        title={'Email'}

      />
      <TextInputBordered
        placeholder={'Enter your Address'}
        value={country}
        onChangeText={onChangeCountry}
        title={'Adress'}

      />
      {/* <PrimaryDropDown
        placeholder={'Pakistan'}
        value={country}
        setValue={setCountry}
        items={countryDropdown}
        zIndex={2}
        iconColor={colors.appIconColor8}
        iconSize={totalSize(2)}
        title={'country'}

      />
      <Spacer isSmall />
      <Wrapper style={{ flexDirection: 'row', zIndex: 1 }}>
        <PrimaryDropDown
          placeholder={'Peshawar'}
          value={city}
          setValue={setCity}
          items={cityDropdown}
          iconColor={colors.appIconColor8}
          iconSize={totalSize(2)}
          style={{ width: width(42) }}
        />
        <PrimaryDropDown
          placeholder={'KPK'}
          value={state}
          setValue={setState}
          items={provinceDropdown}
          iconColor={colors.appIconColor8}
          iconSize={totalSize(2)}
          style={{ width: width(42) }}
        />
      </Wrapper>
      <Spacer isSmall /> */}
      <TextInputBordered
        placeholder={'+92'}
        title={'Phone Number'}
      />
      <TextInputBordered
        error={passwordError}
        placeholder={'•••••••••••'}
        iconType={'ionicon'}
        iconName={!showPassword ? 'eye-off-outline' : 'eye-outline'}
        iconColor={colors.appIconColor8}
        iconSize={totalSize(2.4)}
        onPressIcon={onShowPassword}
        value={password}
        onChangeText={onchangePassword}
        secureTextEntry={!showPassword}
        title={'Password'}
      />
      <Spacer />
      <GradientButton title={'Continue'} onPress={onRegisterPress} isLoading={isLoading} />
      <Spacer />
      <TouchableOpacity style={{ alignSelf: 'center' }}>
        <MediumText color={colors.appTextColor1}>-- Or continue with --</MediumText>
      </TouchableOpacity>
      <Spacer height={height(3)} />
      <SocialButtons />
      <Spacer height={height(3)} />
      <TouchableOpacity style={{ alignSelf: 'center' }} onPress={onpressLogin}>
        <RegularText
          color={colors.appTextColor12}
          style={{ marginRight: width(2.5) }}>
          I already have an account?{"  "}
          <MediumText color={colors.appTextColor1} style={{ paddingLeft: width(2) }}>Login</MediumText>
        </RegularText>
      </TouchableOpacity>
      <Spacer />
    </ComponentWrapper>
  );
};
