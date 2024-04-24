import { GradientButton, MediumTitle, PrimaryImage, Spacer, TextInputBordered, Wrapper } from "../../../../components"
import { totalSize } from 'react-native-dimension'
import { colors, fontFamily } from "../../../../constants"
import { Icon } from "react-native-elements"
import PrimaryDropDown from "../../../../components/dropDown"
import { CameraModal } from "../../../../components/commonComponents"
import { TouchableOpacity } from "react-native"
import { style } from "../style"
import { height } from 'react-native-dimension';

export const AboutEventComponent = ({ title, description }) => {
    return (
        <Wrapper>
            <MediumTitle style={{ fontSize: totalSize(1.8), lineHeight: totalSize(2.4), color: colors.appTextColor2, fontFamily: fontFamily.appTextSemiBold }}>{title}</MediumTitle>
            <MediumTitle color={colors.appTextColor8} style={{ fontSize: totalSize(1.4), lineHeight: totalSize(2.4) }}>{description}</MediumTitle>
            <Spacer />
        </Wrapper>
    )
}

export const CreateEventForm = ({ featureImage, eventCategory, setEventCategory, eventCategories, showCameraModal, setShowCameraModal,
    openCamera, openGallery, onPressNext }) => {
    return (
        <Wrapper style={{ flex: 1, }} >
            <TouchableOpacity onPress={() => setShowCameraModal(true)}>
                {featureImage ?
                    <PrimaryImage styles={style.featureImage} source={{ uri: featureImage }} />
                    :
                    <Wrapper style={style.featureImage}>
                        <Icon name='camera' type='feather' size={totalSize(2.4)} color={colors.appTextColor8} />
                        <MediumTitle style={{ fontSize: totalSize(1.6), color: colors.appBorderColor8 }}>Upload Images</MediumTitle>
                    </Wrapper>
                }
            </TouchableOpacity>
            <Spacer />
            <TextInputBordered title={'Event Name'} placeholder={'The Welfare Society Event'} />
            <PrimaryDropDown
                placeholder={'Event Category'}
                value={eventCategory}
                setValue={setEventCategory}
                items={eventCategories}
                zIndex={1}
                iconColor={colors.appIconColor8}
                iconSize={totalSize(2)}
            />

            <TextInputBordered inputContainerStyle={{ height: height(17), paddingBottom: height(11) }} placeholder={'Description'}
            />
            <Wrapper flex={0.5} />
            <GradientButton title={'Next'} onPress={onPressNext} />
            <CameraModal visible={showCameraModal} setVisible={setShowCameraModal} openCamera={openCamera} openGallery={openGallery} />
        </Wrapper >
    )
}









