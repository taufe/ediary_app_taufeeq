import { AppImages } from '../../../assets';
import { ComponentWrapper, GradientButton, MainHeader, MainWrapper, PrimaryImage, ScrollView, Spacer } from '../../../components'
import { EventPostComponent, PostComponent } from './component'
import useEventPost from './hook'
import { totalSize, height } from 'react-native-dimension';

const EventPost = () => {
    const { addImage, openGallery, openCamera, video, openVideo } = useEventPost()
    return (
        <MainWrapper>
            <ScrollView>
                <Spacer height={height(3)} />
                <MainHeader showBackBtn title={'Write Here'} />
                <Spacer />
                <EventPostComponent />
                <Spacer />
                <PostComponent addImage={addImage} openGallery={openGallery} openCamera={openCamera} video={video} openVideo={openVideo} />
                <ComponentWrapper>
                    <Spacer isDoubleBase />
                    <GradientButton title={'Post'} />
                </ComponentWrapper>
            </ScrollView>
        </MainWrapper>
    )
}

export default EventPost