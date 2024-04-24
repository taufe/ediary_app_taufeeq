import { useState } from "react"
import { PickPhotoFromGallery } from "../../../../utilities"
import { SCREEN } from "../../../../constants"

const useUploadProfile = (navigation) => {
    const [addImage, setAddImage] = useState(null)

    const uploadImage = async () => {
        const image = await PickPhotoFromGallery()
        setAddImage(image?.path)
    }
    const onPressNext = () => {
        navigation.navigate(SCREEN.interests)

    }
    return { uploadImage, addImage, setAddImage, onPressNext }
}

export default useUploadProfile