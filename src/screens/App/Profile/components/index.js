import { FlatList } from "react-native";
import { AppIcons } from "../../../../assets";
import { CardWrapper, Custom, GradientButtonSmall, MediumTitle, RowWrapper, RowWrapperBasic, Spacer, Wrapper } from "../../../../components"
import { colors } from "../../../../constants"
import { totalSize, width, height } from 'react-native-dimension';
import { profileOptionsData } from "../../../../utilities/dummyData";
import { TouchableOpacity } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { style } from "../style";


export const ProfileHeaderComponent = ({ name, profile, noOfConnects, onConnect, onViewProfile }) => {
    return (
        <Wrapper>
            <RowWrapperBasic>
                <Avatar source={AppIcons.avatar} size={totalSize(9.6)} />
                <Wrapper style={{ marginLeft: totalSize(1) }}>
                    <MediumTitle style={style.txtUserName}>{name}</MediumTitle>
                    <MediumTitle style={style.txtViewProfile} onPress={onViewProfile}>View Profile</MediumTitle>
                </Wrapper>
                <GradientButtonSmall title={'Connect'} style={style.connectBtn} onPress={onConnect} />
            </RowWrapperBasic>
            <Spacer />
            <MediumTitle style={style.connectsText}>{noOfConnects} Connects</MediumTitle>

        </Wrapper>
    )
}


export const ProfileOptionsComponent = ({ icon, title, description, onPress, screenName }) => {
    return (
        <TouchableOpacity onPress={() => onPress(screenName)} activeOpacity={0.7}>
            <CardWrapper style={{ paddingVertical: height(.4), shadowColor: 0, color: '#F9F9F9' }}>
                <RowWrapper style={{ marginHorizontal: width(2) }}>
                    <Wrapper>
                        <RowWrapperBasic style={{ marginVertical: totalSize(1.5) }}>
                            <Custom icon={icon} size={totalSize(2.4)} />
                            <Wrapper style={{ marginLeft: totalSize(1.3), }}>
                                <MediumTitle style={style.optionTitle}>{title}</MediumTitle>
                                <MediumTitle style={style.optionDescription}>{description}</MediumTitle>
                            </Wrapper>
                        </RowWrapperBasic>
                    </Wrapper>
                    <Wrapper>
                        <Icon name="chevron-right" type="feather" color={colors.appIconColor12} />
                    </Wrapper>
                </RowWrapper>
            </CardWrapper>
        </TouchableOpacity>
    )
}

export const ProfileOptionsList = ({ onPress }) => {
    return (
        <FlatList
            data={profileOptionsData}
            ItemSeparatorComponent={<Spacer isSmall />}
            renderItem={({ item }) => {
                return (
                    <ProfileOptionsComponent
                        icon={item?.icon}
                        title={item?.title}
                        description={item?.description}
                        screenName={item?.screenName}
                        onPress={onPress}
                    />
                )
            }}
        />
    )
}