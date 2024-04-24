import { AppImages } from '../../../assets';
import { AuthHeaderComponent, ComponentWrapper, GradientButton, MainWrapper, PrimaryImage, Spacer, Wrapper } from '../../../components'
import { width } from 'react-native-dimension';
import { height } from 'react-native-dimension';
import useUploadProfile from './hook';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

const UploadProfile = ({ navigation }) => {
    const { uploadImage, addImage, onPressNext } = useUploadProfile(navigation)
    return (
        <MainWrapper>
            <Spacer />
            <PrimaryImage styles={{ alignSelf: 'center', width: width(22), height: height(5) }} source={AppImages.activeDot1} />
            <Spacer isDoubleBase />
            <Wrapper>
                <AuthHeaderComponent heading={'Upload Profile'} description={'Browse below to upload your profile image nicely'} />
            </Wrapper>
            <Spacer isDoubleBas />
            <TouchableOpacity onPress={uploadImage}>
                {addImage ?
                    <PrimaryImage styles={styles.updatedImage} source={{ uri: addImage }} />
                    :
                    <PrimaryImage styles={{ alignSelf: 'center', width: width(86), height: height(25) }} source={addImage ? { uri: addImage } : AppImages.uploadImage} />
                }
            </TouchableOpacity>
            <Spacer isDoubleBase />
            <ComponentWrapper>
                <GradientButton title={'Next'} onPress={onPressNext} />
            </ComponentWrapper>
        </MainWrapper>
    )
}

export default UploadProfile