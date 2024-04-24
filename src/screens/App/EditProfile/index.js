
import { MainHeader, MainWrapper, ScrollView, } from '../../../components'
import { EditProfileForm } from './components';
import useEditProfile from './hook';
import { CameraModal } from '../../../components/commonComponents';

const EditProfile = ({ navigation }) => {

    const { isLoading, profile, name, setName, nameError, setNameError, email, setEmail, emailError, setEmailError, city, setCity,
        cityError, setCityError,
        state,
        setState,
        stateError,
        setStateError,
        country,
        setCountry,
        countryError,
        setCountryError, onPressSaveChanges,
        onUpdateProfile, showCameraModal, setShowCameraModal,
        openCamera, openGallery, } = useEditProfile(navigation);

    return (
        <MainWrapper>
            <ScrollView>
                <MainHeader title={'Edit Profile'} showBackBtn />
                <EditProfileForm
                    isLoading={isLoading}
                    profile={profile}
                    name={name}
                    email={email}
                    city={city}
                    state={state}
                    country={country}

                    nameError={nameError}
                    emailError={emailError}
                    cityError={cityError}
                    stateError={stateError}
                    countryError={countryError}
                    onChangeName={text => { setName(text), setNameError('') }}
                    onChangeEmail={text => { setEmail(text), setEmailError('') }}
                    onChangeCity={text => { setCity(text), setCityError('') }}
                    onChangeState={text => { setState(text), setStateError('') }}
                    onChangeCountry={text => { setCountry(text), setCountryError('') }}
                    onchangePassword={text => { setPassword(text), setPasswordError('') }}
                    onUpdateProfile={onUpdateProfile}
                    onPressSaveChanges={onPressSaveChanges}
                    setShowCameraModal={setShowCameraModal}
                />
                <CameraModal visible={showCameraModal} setVisible={setShowCameraModal} openCamera={openCamera} openGallery={openGallery} />
            </ScrollView>
        </MainWrapper>
    )
}
export default EditProfile