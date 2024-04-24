import { AuthHeader, ScrollView } from '../../../components'
import { appStrings } from '../../../utilities/appStrings'
import useUpdatePassword from './hook'
import { UpdatePasswordForm } from './components'

const UpdatePassword = ({ navigation, route }) => {
    const { password, setPassword, showPassword, setShowPassword, passwordError, setPasswordError,
        confirmPassword, setConfirmPassword, showConfirmPassword, setShowConfirmPassword, confirmPasswordError, setConfirmPasswordError,
        onUpdatePassword, isLoading, } = useUpdatePassword(navigation, route);

    return (
        <ScrollView>
            <AuthHeader showBackBtn={true} title={appStrings.updatePasswordScreenTitle} description={appStrings.updatePasswordScreenDescription} />
            <UpdatePasswordForm
                password={password}
                passwordError={passwordError}
                showPassword={showPassword}
                onShowPassword={() => setShowPassword(!showPassword)}
                onChangePassword={(text) => { setPassword(text), setPasswordError('') }}
                confirmPassword={confirmPassword}
                confirmPasswordError={confirmPasswordError}
                showConfirmPassword={showConfirmPassword}
                onShowConfirmPassword={() => setShowConfirmPassword(!showConfirmPassword)}
                onchangeConfirmPassword={(text) => { setConfirmPassword(text), setConfirmPasswordError('') }}
                onUpdatePassword={onUpdatePassword}
                isLoading={isLoading}
            />
        </ScrollView>
    )
}

export default UpdatePassword;
