import { StyleSheet } from "react-native";
import { height, width, totalSize } from 'react-native-dimension';

export const styles = StyleSheet.create({
    updatedImage: {
        justifyContent: "center",
        alignItems: "center",
        height: height(25),
        borderRadius: totalSize(1.2),
        width: width(86),
        alignSelf: 'center'
    },
})