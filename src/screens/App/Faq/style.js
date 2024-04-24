import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
import { totalSize } from 'react-native-dimension';

export const style = StyleSheet.create({
    faqCardWrapper: { marginVertical: totalSize(1.2), padding: totalSize(1.6) },
    faqText: {
        color: colors.appTextColor2,
        fontSize: totalSize(1.4),
        lineHeight: totalSize(2.4)
    }
})