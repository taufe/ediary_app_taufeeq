import { StyleSheet } from 'react-native'
import { totalSize, width, height } from 'react-native-dimension'
import { colors } from '../../../constants'

export const style = StyleSheet.create({
    featureImage: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.appBgColor4,
        height: height(19),
        borderRadius: totalSize(1.2),
        width: width(90),
        borderWidth: 1,
        borderColor: colors.appBorderColor9,
        marginLeft: width(1)
    },

    inputStyle: {
        height: height(21.78),
        textAlignVertical: 'top',
    },
    containerStyle: {
        height: height(21.78),
        borderRadius: totalSize(1.8),
        paddingTop: height(1.2)

    }
})