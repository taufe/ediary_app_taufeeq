import { CardWrapper, LargeText, RegularText, Spacer, Wrapper } from "../../../../components"
import { totalSize, width, height } from 'react-native-dimension';
import { FlatList, TouchableOpacity } from "react-native";
import { style } from "../style";
import {
    Collapse,
    CollapseHeader,
    CollapseBody,
} from "accordion-collapse-react-native";
import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../../../constants";
import { Icon } from "react-native-elements";


export const Accordians = ({
    collapseHeader,
    description,
    isOpenAccordion,
    setIsOpenAccordion,
    toggleAccordion,
}) => {
    return (
        <Wrapper>
            <Wrapper style={styles.accordionBorder}>
                <TouchableOpacity onPress={toggleAccordion}>
                    <Wrapper style={styles.collapseHeader}>
                        <Wrapper>
                            <LargeText style={styles.questionText}>
                                {collapseHeader}
                            </LargeText>
                        </Wrapper>
                        <Icon
                            name={isOpenAccordion ? "chevron-up" : "chevron-down"}
                            color={colors.appBgColor9}
                            type="feather"
                            size={24}
                        />
                    </Wrapper>
                </TouchableOpacity>
                {isOpenAccordion ? (
                    <CollapseBody style={styles.collapse}>
                        <Collapse style={{ flexDirection: "row" }}>
                            <CollapseHeader>
                                <RegularText style={styles.collpseParagraph}>
                                    {description}
                                </RegularText>
                            </CollapseHeader>
                        </Collapse>
                    </CollapseBody>
                ) : null}
            </Wrapper>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    questionText: {
        fontSize: totalSize(1.6),
        fontFamily: fontFamily.appTextBold,
        textAlign: "start",
        color: colors.appTextColor2
    },
    collapse: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: colors.appBgColor11,
        padding: totalSize(1),

    },
    collapseHeader: {
        flexDirection: "row",
        padding: totalSize(1.2),
        backgroundColor: colors.appBgColor11,
        justifyContent: "space-between",
        width: width(92),
        borderRadius: totalSize(1.2),
        paddingVertical: height(1.7)
    },
    collpseParagraph: {
        fontSize: totalSize(1.7),
        color: colors.appTextColor9,
        borderRadius: totalSize(1.2)
    },
    accordionBorder: {
        borderColor: colors.gray,
    },
    chevronWrapper: {
        position: 'absolute',
        right: width(2.4),
        top: height(1.2),
    }
})
