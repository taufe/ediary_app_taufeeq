import { StyleSheet } from "react-native";
import { MediumText, PrimaryImage, RowWrapper, RowWrapperBasic, Wrapper } from "../../../../components"
import { totalSize, height, width } from 'react-native-dimension';
import { colors } from "../../../../constants";
import { Icon } from "react-native-elements";

export const InterestComponent = ({ image, title, isSelected }) => {
    return (
        <RowWrapperBasic style={{ flexWrap: 'wrap' }}>
            <PrimaryImage size={totalSize(12)} source={image} />
            <RowWrapper style={styles.checkIcon}>
                <MediumText style={styles.title}>{title}</MediumText>
                {isSelected ? <Icon name="checkcircle" style={{ paddingLeft: width(2) }} size={totalSize(2)} color={colors.appIconColor4} type="antdesign" /> : null}
            </RowWrapper>
        </RowWrapperBasic>
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.appBgColor4,
        fontSize: totalSize(1.5),
    },
    checkIcon: {
        position: 'absolute',
        bottom: height(2),
        left: width(3),
        zIndex: 1
    }
})