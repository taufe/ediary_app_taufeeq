import { StyleSheet } from "react-native";
import { totalSize, width, height } from 'react-native-dimension';
import { colors, fontFamily } from "../../../constants";

export const style = StyleSheet.create({
    sliderThumb: { height: totalSize(2), width: totalSize(2), backgroundColor: colors.appBgColor1 },
    sliderTrack: { height: height(1.07), width: width(80.69), borderRadius: totalSize(1), },
    distanceWrapper: {
        backgroundColor: colors.appBgColor1,
        marginBottom: totalSize(1.5),
        paddingHorizontal: width(3),
        paddingVertical: height(0.5),
        borderTopEndRadius: totalSize(1),
        borderTopStartRadius: totalSize(1),
        borderBottomStartRadius: totalSize(1),
        marginBottom: -4

    },
    distanceText: { fontSize: totalSize(1.4), },
    sliderContainer: {
        borderWidth: 1,
        borderRadius: totalSize(2),
        borderColor: colors.appBorderColor8,
        paddingHorizontal: width(6),
        paddingVertical: height(3.5),
        backgroundColor: colors.appBgColor4,
        alignItems: 'center'
    },
    heading: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor12,
        backgroundColor: colors.appTextColor4,
        position: 'absolute',
        zIndex: 1,
        paddingHorizontal: width(2),
        top: -9,
        marginLeft: width(5)
    },
    count: {
        fontFamily: fontFamily.appTextSemiBold,
        fontSize: totalSize(1.3),
        color: colors.appTextColor2
    }
})