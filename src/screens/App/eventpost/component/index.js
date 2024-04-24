import { ComponentWrapper, Custom, PrimaryImage, RegularText, RowWrapper, RowWrapperBasic, Spacer, Wrapper } from "../../../../components"
import { width, totalSize, height } from 'react-native-dimension';
import { colors } from "../../../../constants";
import { AppIcons } from "../../../../assets";
import { TextInput, StyleSheet, TouchableOpacity } from "react-native";
import VideoPlayer from 'react-native-video-player';

export const EventPostComponent = () => {

    return (
        <ComponentWrapper >
            <Wrapper style={{
                width: width(92),
                paddingBottom: 120,
                backgroundColor: '#F9F9F9',
                borderRadius: totalSize(1.6)
            }}>
                <TextInput
                    placeholder='Write here . . .'
                    placeholderTextColor={colors.appTextColor8}
                    style={{ paddingLeft: width(3), color: colors.appTextColor1 }}
                />
            </Wrapper>
            <Spacer isTiny />
            <Wrapper style={{
                borderBottomWidth: 1,
                borderBottomColor: '#DFDBDB',
                marginHorizontal: width(1)
            }}></Wrapper>
        </ComponentWrapper>
    )
}

export const PostComponent = ({ addImage, openGallery, openCamera, video, openVideo }) => {

    return (
        <Wrapper>
            <RowWrapper style={{ marginHorizontal: width(8) }}>
                <TouchableOpacity style={styles.buttons} onPress={openCamera}>
                    <RowWrapperBasic>
                        <Custom size={totalSize(3)} icon={AppIcons.camera} />

                        <RegularText style={styles.iconName}>Camera</RegularText>
                    </RowWrapperBasic>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={openVideo}>
                    <RowWrapperBasic>
                        <Custom size={totalSize(3)} icon={AppIcons.video} />
                        <RegularText style={styles.iconName}>Video</RegularText>
                    </RowWrapperBasic>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={openGallery}>
                    <RowWrapperBasic>
                        <Custom size={totalSize(3)} icon={AppIcons.image} />
                        <RegularText style={styles.iconName}>Gallery</RegularText>
                    </RowWrapperBasic>
                </TouchableOpacity>
            </RowWrapper>
            <Spacer />
            {video ? (
                <VideoPlayer
                    video={{ uri: video }}
                    videoWidth={1000}
                    videoHeight={700}
                />
            ) : (
                <PrimaryImage styles={{ width: width(100), height: height(20) }} source={{ uri: addImage }} />
            )}
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    profileName: {
        fontSize: totalSize(1.9),
        paddingLeft: width(4)
    },
    iconName: {
        fontSize: totalSize(1.9),
        paddingLeft: width(2),
        color: colors.appTextColor2

    },
    buttons: {
        backgroundColor: colors.appBgColor17,
        paddingHorizontal: width(2),
        paddingVertical: height(1.5),
        borderRadius: totalSize(1.6)
    }
})