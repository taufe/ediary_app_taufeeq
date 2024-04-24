import { AppIcons } from "../../../../assets"
import { ComponentWrapper, Custom, GradientButton, MediumText, RowWrapperBasic, Spacer, Wrapper } from "../../../../components"
import { StyleSheet, TouchableOpacity } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension';
import { colors } from "../../../../constants";

export const MyProfileComponent = ({ onPressEditInformation, onPressLogout }) => {
    return (
        <Wrapper>
            <ComponentWrapper style={{ paddingLeft: width(5) }}>
                <Spacer isDoubleBase />
                <RowWrapperBasic >
                    <Custom size={totalSize(2.4)} icon={AppIcons.user} />
                    <MediumText style={styles.name}>John Poet</MediumText>
                </RowWrapperBasic>
                <Spacer height={height(4)} />
                <RowWrapperBasic >
                    <Custom size={totalSize(2.4)} icon={AppIcons.sms} />
                    <MediumText style={styles.name}>Example@gmail.com</MediumText>
                </RowWrapperBasic>
                <Spacer height={height(4)} />
                <RowWrapperBasic >
                    <Custom size={totalSize(2.4)} icon={AppIcons.calling} />
                    <MediumText style={styles.name}>+972 233 2323 23</MediumText>
                </RowWrapperBasic>
                <Spacer height={height(4)} />
                <RowWrapperBasic >
                    <Custom size={totalSize(2.4)} icon={AppIcons.mapActive} />
                    <MediumText style={styles.name}>Islamabad, Punjab, Pakistan</MediumText>
                </RowWrapperBasic>
                <Spacer height={height(4)} />
                <TouchableOpacity onPress={onPressLogout}>
                    <RowWrapperBasic >
                        <Custom size={totalSize(2.4)} icon={AppIcons.logout} />
                        <MediumText style={styles.name}>Log out</MediumText>
                    </RowWrapperBasic>
                </TouchableOpacity>
                <Spacer height={height(8)} />
            </ComponentWrapper>
            <ComponentWrapper>
                <GradientButton onPress={onPressEditInformation} borderColor={colors.appBorderColor1} borderWidth={1} textColor={colors.appTextColor1} title={'Edit Information'} bgGradientColor={[colors.appBorderColor4, colors.appBgColor4]} />
            </ComponentWrapper>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor2,
        paddingLeft: width(7)
    }
})