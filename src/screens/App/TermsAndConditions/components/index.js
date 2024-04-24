import { MediumTitle, RegularText, RowWrapperBasic } from "../../../../components"
import { colors } from "../../../../constants"
import { totalSize } from 'react-native-dimension'

export const TermsTitle = ({ title, }) => {
    // Split the text by spaces to get an array of words
    const words = title?.split(' ');

    // Store the start text (all words except the last one) in one variable
    const startText = words?.slice(0, -1)?.join(' ');

    // Store the last word in another variable
    const lastWord = words[words?.length - 1];

    return (
        <RowWrapperBasic style={{ marginVertical: totalSize(1.2), }}>
            <MediumTitle style={{ fontSize: totalSize(2), color: colors.appTextColor2 }}>{startText}</MediumTitle>
            <MediumTitle color={colors.appTextColor1} style={{ fontSize: totalSize(2) }}>{' '}{lastWord}</MediumTitle>
        </RowWrapperBasic>
    )
}

export const TermsDescription = ({ text }) => {
    return (
        <RegularText style={{ fontSize: totalSize(1.2), lineHeight: totalSize(2.4), color: colors.appTextColor12 }}>
            {text}
        </RegularText>
    )
}
