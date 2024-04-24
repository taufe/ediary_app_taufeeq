import { useState } from "react";
import { eventCategoriesDropdownData } from "../../../../utilities/dummyData";
import { PickPhotoFromGallery, takePhotoFromCamera } from "../../../../utilities";
import { SCREEN } from "../../../../constants";

const useCreateEvent = (navigation) => {
    // all local states
    // event categories d
    const [eventCategory, setEventCategory] = useState('');
    const [eventCategories, setEventCategories] = useState(eventCategoriesDropdownData)

    const [featureImage, setFeatureImage] = useState(null)
    const [eventName, setEventName] = useState('')
    const [eventDescription, setEventDescription] = useState('')

    const [showCameraModal, setShowCameraModal] = useState(false);


    // open camera
    const openCamera = async () => {
        let image = await takePhotoFromCamera()
        setShowCameraModal(false)
        setFeatureImage(image?.path)
    }

    // change profile photo from gallery
    const openGallery = async () => {
        try {
            let image = await PickPhotoFromGallery()
            setShowCameraModal(false)
            setFeatureImage(image?.path)
        } catch (error) {
        }
    }

    const onPressNext = () => {
        navigation.navigate(SCREEN.aboutEvent)
    }

    return {
        eventCategory, setEventCategory, eventCategories, featureImage, setFeatureImage, eventName, setEventName,
        eventDescription, setEventDescription, showCameraModal, setShowCameraModal,
        openCamera, openGallery, onPressNext
    }
}

export default useCreateEvent;