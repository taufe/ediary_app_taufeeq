import { ComponentWrapper, GradientButton, TextInputBordered, Wrapper } from "../../../../components"
import { colors } from "../../../../constants"
import { appStrings } from "../../../../utilities/appStrings";
import { totalSize } from 'react-native-dimension';

export const UpdatePasswordForm = ({ password, showPassword, passwordError, onShowPassword,
    confirmPassword, showConfirmPassword, confirmPasswordError, onShowConfirmPassword
    , onchangeConfirmPassword, onChangePassword, onUpdatePassword, isLoading }) => {
    return (
        <ComponentWrapper style={{ flex: 1 }}>
            <TextInputBordered
                error={passwordError}
                placeholder={appStrings.passwordPlaceholder}
                iconType={'ionicon'}
                iconName={!showPassword ? 'eye-off-outline' : 'eye-outline'}
                iconColor={colors.appIconColor8}
                iconSize={totalSize(2.4)}
                onPressIcon={onShowPassword}
                value={password}
                onChangeText={onChangePassword}
                secureTextEntry={!showPassword}
            />

            <TextInputBordered
                error={confirmPasswordError}
                placeholder={appStrings.confirmPasswordPlaceholder}
                iconType={'ionicon'}
                iconName={!showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                iconColor={colors.appIconColor8}
                iconSize={totalSize(2.4)}
                onPressIcon={onShowConfirmPassword}
                value={confirmPassword}
                onChangeText={onchangeConfirmPassword}
                secureTextEntry={!showConfirmPassword}
            />

            <Wrapper flex={0.85} />
            <GradientButton title={'Update Password'} onPress={onUpdatePassword} isLoading={isLoading} />
        </ComponentWrapper>
    )
}