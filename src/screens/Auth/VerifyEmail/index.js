import useVerifyEmail from './hook'
import { VerifyEmailForm } from './components';
import { AuthHeaderComponent, MainWrapper, MediumText, RegularText, ScrollView, Spacer, Wrapper } from '../../../components';
import { width, height } from 'react-native-dimension';
import { colors } from '../../../constants';
const VerifyEmail = ({ navigation }) => {
  const { otp, setOtp, otpError, props, getCellOnLayoutHandler, onContinue, onResendCode, isLoading } = useVerifyEmail(navigation);
  return (
    <MainWrapper>
      <ScrollView>
        <Spacer height={height(7.7)} />
        <AuthHeaderComponent heading={'Your Code'} />
        <Wrapper onPress={onResendCode} style={{ alignSelf: 'center' }}>
          <RegularText
            color={colors.appTextColor5}
            style={{ marginRight: width(2.5), width: width(60), textAlign: 'center' }}>
            Please enter your code because it
            will be expire in{' '}
            <MediumText color={colors.appTextColor1}>1:12</MediumText>
          </RegularText>
        </Wrapper>
        <Spacer height={height(3)} />
        <VerifyEmailForm
          otp={otp}
          setOtp={setOtp}
          otpError={otpError}
          props={props}
          getCellOnLayoutHandler={getCellOnLayoutHandler}
          onContinue={onContinue}
          onResendCode={onResendCode}
          isLoading={isLoading}
          goBack={() => navigation.goBack()}
        />
      </ScrollView>
    </MainWrapper>
  )
}

export default VerifyEmail;

