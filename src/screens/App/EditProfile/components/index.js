import { AppIcons } from "../../../../assets"
import { Avatar, ComponentWrapper, Custom, GradientButton, RowWrapper, TextInputBordered, Wrapper } from "../../../../components"
import { totalSize, width, height } from 'react-native-dimension'
import { colors } from "../../../../constants"
import { Icon } from "react-native-elements"
import { TouchableOpacity } from "react-native"
import { style } from "../style"
import { appStrings } from "../../../../utilities/appStrings"


export const CameraButton = ({ onPress }) => {
    return (
        <Wrapper style={style.cameraBtnContainer}>
            <TouchableOpacity onPress={onPress} style={style.cameraBtn}>
                <Icon
                    name="camera"
                    type="feather"
                    size={totalSize(2)}
                    color={colors.appIconColor4}
                />
            </TouchableOpacity>
        </Wrapper>
    )

}

export const EditProfileForm = ({
    isLoading, profile, name, email, city, state, country,
    onChangeName, onChangeEmail, onChangeCity, onChangeState, onChangeCountry,
    nameError, emailError, cityError, stateError, countryError, onPressSaveChanges,
    onUpdateProfile, setShowCameraModal
}) => {
    return (
        <ComponentWrapper style={{ flex: 1 }}>
            <Wrapper style={{ alignSelf: 'center', marginBottom: totalSize(7) }}>
                <Avatar source={profile ? { uri: profile } : AppIcons.avatar} size={totalSize(9.6)} />
                <CameraButton onPress={() => setShowCameraModal(true)} />
            </Wrapper>
            <TextInputBordered
                error={nameError}
                placeholder={appStrings.namePlaceholder}
                value={name}
                onChangeText={onChangeName}
                title={'Full Name'}
            />
            <TextInputBordered
                error={emailError}
                placeholder={'Pakistan'}
                value={email}
                onChangeText={onChangeEmail}
                title={'Country'}
            />

            <RowWrapper style={{ marginHorizontal: 0, alignItems: 'flex-start' }}>
                <TextInputBordered
                    error={stateError}
                    placeholder={'Islamabad'}
                    value={state}
                    onChangeText={onChangeState}
                    containerStyle={{ width: width(45) }}
                    errorContainerStyle={{ width: width(42) }}
                    title={'City'}
                />
                <TextInputBordered
                    error={countryError}
                    placeholder={'Punjab'}
                    value={country}
                    onChangeText={onChangeCountry}
                    containerStyle={{ width: width(45) }}
                    errorContainerStyle={{ width: width(42) }}
                    title={'Province'}
                />
            </RowWrapper>
            <TextInputBordered
                error={cityError}
                placeholder={'+92'}
                value={city}
                onChangeText={onChangeCity}
                title={'Phone Number'}
            />
            <Wrapper flex={0.2} />
            <GradientButton title={'Save Changes'} bgGradientColor={colors.gradiant6} onPress={onPressSaveChanges} />
        </ComponentWrapper>
    )
}