import { StyleSheet } from "react-native";
import { width, height, totalSize } from 'react-native-dimension';
import { colors } from "../../../constants";

export const style = StyleSheet.create({
    connectsText: { fontSize: totalSize(1.6), color: colors.appTextColor1 },
    connectBtn: { width: width(26), height: totalSize(4.5), paddingVertical: 0, marginHorizontal: 0, marginLeft: width(7), },
    optionTitle: { fontSize: totalSize(1.6), marginBottom: totalSize(0.3), color: colors.appTextColor2 },
    optionDescription: { color: colors.appTextColor8, fontSize: totalSize(1.2) },
    txtViewProfile: {
        fontSize: totalSize(1.6),
        textDecorationLine: "underline",
        color: colors.appTextColor8
    },
    txtUserName: { fontSize: totalSize(2), color: colors.appTextColor2 }
})