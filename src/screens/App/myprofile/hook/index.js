import { useState } from "react"
import { PickPhotoFromGallery } from "../../../../utilities"
import { SCREEN } from "../../../../constants"

const useMyProfile = (navigation) => {
    // useState Hooks
    const [profile, setProfile] = useState(false)

    const onPressProfile = async () => {
        const uploadImage = await PickPhotoFromGallery()
        setProfile(uploadImage?.path)
    }

    const onPressEditInformation = () => {
        navigation.navigate(SCREEN.editProfile)
    }

    const onPressLogout = () => {
        navigation.navigate(SCREEN.signIn)
    }


    return { profile, setProfile, onPressProfile, onPressEditInformation, onPressLogout }
}

export default useMyProfile