import { CodeField, Cursor, useBlurOnFulfill, } from 'react-native-confirmation-code-field';
import { ComponentWrapper, GradientButton, MediumText, RegularText, SmallText, Spacer, Wrapper } from '../../../../components';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors, sizes } from '../../../../constants';
import { height, width, totalSize } from 'react-native-dimension';

// verify email otp code input
export const OTPInput = ({ props, value, onChangeText, getCellOnLayoutHandler }) => {
    const ref = useBlurOnFulfill({ value });
    return (
        <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={onChangeText}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            cellCount={4}
            renderCell={({ index, symbol, isFocused, }) => (
                <MediumText
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                </MediumText>
            )}
        />
    )
}
// this form contains otp code field , resend text button and continue button
export const VerifyEmailForm = ({ otp, setOtp, otpError, getCellOnLayoutHandler, props, isLoading, onResendCode, onContinue, goBack }) => {
    return (
        <ComponentWrapper style={{ flex: 1 }}>
            <OTPInput props={props} value={otp} onChangeText={setOtp} getCellOnLayoutHandler={getCellOnLayoutHandler} />
            {
                otpError && (
                    <ComponentWrapper
                        style={{ marginLeft: width(0) }}
                        animation="shake">
                        <Spacer height={sizes.TinyMargin} />
                        <SmallText color={colors.appTextColor9}>{otpError}</SmallText>
                    </ComponentWrapper>
                )
            }
            <Spacer isDoubleBase />
            <GradientButton title={'Verify'} onPress={onContinue} isLoading={isLoading} textColor={colors.appTextColor4} />
            <GradientButton
                title={'Resend'}
                isLoading={isLoading}
                bgGradientColor={[colors.appBgColor4, colors.appBgColor4]}
                borderWidth={1}
                borderColor={colors.appBorderColor1}
                textColor={colors.appTextColor1}
            />
            <Wrapper flex={0.95} />
            <TouchableOpacity onPress={goBack} style={{ alignSelf: 'center' }}>
                <RegularText
                    color={colors.appTextColor12}
                    style={{ marginRight: width(2.5) }}>
                    If it is not working?{' '}
                    <MediumText color={colors.appTextColor1}>Go back</MediumText>
                </RegularText>
            </TouchableOpacity>
        </ComponentWrapper>
    )
}

const styles = StyleSheet.create({
    cell: {
        height: height(6.43),
        width: width(19.53),
        borderWidth: 1,
        borderColor: colors.appBorderColor8,
        borderRadius: totalSize(1.1),
        lineHeight: height(6.5),
        textAlign: 'center',
        color: colors.appTextColor5
    },
    focusCell: { borderColor: colors.appBorderColor12 }
})