import { CardWrapper, GradientButton, LargeTitle, MediumTitle, PrimaryImage, RegularText, RowWrapper, RowWrapperBasic } from "../../../../components"
import { StyleSheet } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { colors, fontFamily } from "../../../../constants";

export const InviteFriendsComponent = ({ inviteImages, name }) => {
    return (
        <CardWrapper style={styles.card}>
            <RowWrapper style={{ marginHorizontal: width(.5) }}>
                <RowWrapperBasic>
                    <PrimaryImage size={totalSize(6)} source={inviteImages} />
                    <LargeTitle style={styles.name}>{name}</LargeTitle>
                </RowWrapperBasic>
                <MediumTitle style={styles.btn}>Invite </MediumTitle>
            </RowWrapper>
        </CardWrapper>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: width(4.5),
        backgroundColor: '#F9F9F9',
        shadowColor: 0,
        paddingVertical: height(1)
    },
    btn: {
        color: colors.appTextColor1,
        fontSize: totalSize(1.6)
    },
    name: {
        fontSize: totalSize(1.4),
        paddingLeft: width(3),
        fontFamily: fontFamily.appTextBold,
        color: '#525050'
    }
})