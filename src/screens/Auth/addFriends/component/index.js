import { StyleSheet } from "react-native"
import { CardWrapper, LargeTitle, MediumTitle, PrimaryImage, RowWrapper, RowWrapperBasic } from "../../../../components"
import { width, totalSize } from 'react-native-dimension';
import { colors, fontFamily } from "../../../../constants";

export const AddFriendsComponent = ({ inviteImages, name }) => {
    return (
        <CardWrapper style={styles.card}>
            <RowWrapper style={{ marginHorizontal: width(1.5) }}>
                <RowWrapperBasic>
                    <PrimaryImage size={totalSize(6)} source={inviteImages} />
                    <LargeTitle style={styles.name}>{name}</LargeTitle>
                </RowWrapperBasic>
                <MediumTitle style={styles.btn}>Add </MediumTitle>
            </RowWrapper>
        </CardWrapper>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: width(4.5),
        backgroundColor: '#F9F9F9',
        shadowColor: 0,
    },
    btn: {
        color: colors.appTextColor1,
        fontSize: totalSize(1.6)
    },
    name: {
        fontSize: totalSize(1.6),
        paddingLeft: width(3),
        fontFamily: fontFamily.appTextBold,
        color: '#525050'
    }
})