
import { ComponentWrapper, MainHeader, MainWrapper, ScrollView, Spacer, } from '../../../components'
import useCreateEvent from './hook';
import { AboutEventComponent, CreateEventForm } from './components';

const CreateEvent = ({ navigation }) => {
    const { eventCategory, setEventCategory, eventCategories, featureImage,
        showCameraModal, setShowCameraModal,
        openCamera, openGallery, onPressNext } = useCreateEvent(navigation)

    return (
        <MainWrapper>
            {/* <ScrollView>
                <Spacer />
                <MainHeader title={'Create Event'} showBackBtn />
                <ComponentWrapper style={{ flex: 1 }}>
                    <AboutEventComponent title={'About Event'} description={'Fill the information about event you want to create'} />
                    <CreateEventForm
                        featureImage={featureImage}
                        eventCategory={eventCategory}
                        setEventCategory={setEventCategory}
                        eventCategories={eventCategories}
                        showCameraModal={showCameraModal}
                        setShowCameraModal={setShowCameraModal}
                        openCamera={openCamera}
                        openGallery={openGallery}
                        onPressNext={onPressNext}
                    />
                </ComponentWrapper>
            </ScrollView> */}
        </MainWrapper>
    )
}

export default CreateEvent
