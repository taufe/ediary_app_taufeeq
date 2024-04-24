import { StyleSheet } from "react-native";
import { totalSize } from 'react-native-dimension';
import { colors, fontFamily } from "../../../constants";
import { width } from 'react-native-dimension';

export const styles = StyleSheet.create({
    community: {
        fontSize: totalSize(2),
        fontFamily: fontFamily.appTextBold,
        color: colors.appTextColor15,
        marginHorizontal: width(5)

    }
})