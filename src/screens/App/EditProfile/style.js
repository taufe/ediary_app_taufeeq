import { StyleSheet } from "react-native";
import { width, height, totalSize } from 'react-native-dimension'
import { colors } from "../../../constants";

export const style = StyleSheet.create({
    cameraBtnContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,

    },
    cameraBtn: {
        backgroundColor: colors.appBgColor10,
        height: totalSize(2.8), width: totalSize(2.8), borderRadius: totalSize(2.8) / 2,
        justifyContent: 'center', alignItems: 'center',
    },
})