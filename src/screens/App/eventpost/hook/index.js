
import { useState } from 'react';
import { PickPhotoFromGallery, takePhotoFromCamera } from '../../../../utilities';
import ImagePicker from 'react-native-image-crop-picker';
const useEventPost = () => {

    // hook useState
    const [addImage, setAddImage] = useState(null)
    const [video, setVideo] = useState(null)

    const openGallery = async () => {
        try {
            let image = await PickPhotoFromGallery()
            setAddImage(image?.path)
        } catch (error) {
        }
    }

    const openCamera = async () => {
        let image = await takePhotoFromCamera()
        setAddImage(image?.path)
    }

    const openVideo = async () => {
        try {
            const video = await ImagePicker.openPicker({
                mediaType: 'video',
            });
            setVideo(video?.path)
        } catch (error) {
            console.log('Error while picking a video', error);
        }
    };

    return { addImage, setAddImage, openGallery, openCamera, video, setVideo, openVideo }
}

export default useEventPost