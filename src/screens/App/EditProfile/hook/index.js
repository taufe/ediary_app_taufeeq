import { useState } from 'react';
import Validations from '../../../../utilities/validations';
import { SCREEN } from '../../../../constants';
import { PickPhotoFromGallery, takePhotoFromCamera } from '../../../../utilities';

const useEditProfile = (navigation) => {
    // all local states
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState('');
    const [state, setState] = useState('');
    const [stateError, setStateError] = useState('');
    const [country, setCountry] = useState('');
    const [countryError, setCountryError] = useState('');

    const [showCameraModal, setShowCameraModal] = useState(false);


    // validation for signUp
    const validations = () => {
        !name
            ? setNameError('Please enter your name, it is a required field')
            : setNameError('');
        !email
            ? setEmailError('Please enter your email, it is a required field')
            : !Validations.validateEmail(email)
                ? setEmailError('Email format is invalid')
                : setEmailError('');
        !city
            ? setCityError('Please enter your city, it is a required field')
            : setCityError('');
        !state
            ? setStateError('Please enter your state, it is a required field')
            : setStateError('');
        !country
            ? setCountryError('Please enter your country, it is a required field')
            : setCountryError('');

        if (
            name &&
            email &&
            Validations.validateEmail(email) &&
            city &&
            state &&
            country
        ) {
            console.log('true return')
            return true;
        } else {
            console.log('false return')
            return false;
        }
    };


    // change password pressed
    const onPressSaveChanges = () => {
        // navigation.navigate(SCREEN.updatePassword)
        navigation.navigate(SCREEN.profile);
    }


    // update profile pressed
    const onUpdateProfile = () => {
        console.log('onUpdateProfile  called... ')
        // if (validations()) {
        // update profile code here
        // setIsLoading(true)
        navigation?.goBack()
        // } else {
        // setIsLoading(false)
        // }
    }

    // open camera
    const openCamera = async () => {
        let image = await takePhotoFromCamera()
        setShowCameraModal(false)
        setProfile(image?.path)
    }

    // change profile photo from gallery
    const openGallery = async () => {
        try {
            let image = await PickPhotoFromGallery()
            setShowCameraModal(false)
            setProfile(image?.path)
        } catch (error) {
        }
    }

    return {
        isLoading, setIsLoading,
        profile,
        name,
        setName,
        nameError,
        setNameError,
        email,
        setEmail,
        emailError,
        setEmailError,
        city,
        setCity,
        cityError,
        setCityError,
        state,
        setState,
        stateError,
        setStateError,
        country,
        setCountry,
        countryError,
        setCountryError,
        onPressSaveChanges,
        onUpdateProfile,
        showCameraModal, setShowCameraModal,
        openCamera, openGallery,
    };
};

export default useEditProfile;
