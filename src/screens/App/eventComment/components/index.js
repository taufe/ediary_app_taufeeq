import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ComponentWrapper, Custom, MediumTitle, PrimaryImage, RegularText, RowWrapperBasic, Spacer } from '../../../../components';
import { Icon } from 'react-native-elements';
import { totalSize, width, height } from 'react-native-dimension';
import { colors } from '../../../../constants';
import { TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const PostCommentDetails = ({ profileImages, postImages, welfareCommunity, description, likeCount, commentCount, usageTime, onPresspost, index }) => {
    return (
        <TouchableOpacity onPress={onPresspost} style={index !== 0 && styles.paddingLeft}>
            <ComponentWrapper >
                <RowWrapperBasic>
                    <PrimaryImage size={totalSize(4)} source={profileImages} />
                    <MediumTitle style={{ fontSize: totalSize(1.4), marginHorizontal: width(2) }}>{welfareCommunity}</MediumTitle>
                    <RegularText style={{ fontSize: totalSize(1) }}>{'\u2B24'}</RegularText>
                    <RegularText style={styles.time}>{usageTime}</RegularText>
                    <Spacer isSmall />
                </RowWrapperBasic>
                <RegularText style={styles.description}>
                    {description}
                </RegularText>
                <Spacer isSmall />
                <RowWrapperBasic>
                    <Icon
                        name={'heart'}
                        type="font-awesome"
                        size={totalSize(2.4)}
                        color={colors.appIconColor12}
                    />
                    <RegularText style={styles.count}>{likeCount}</RegularText>
                    <Icon
                        name={'comment'}
                        type="font-awesome"
                        size={totalSize(2.4)}
                        color={colors.appBorderColor6}
                    />
                    <RegularText style={styles.count}>{commentCount}</RegularText>
                </RowWrapperBasic>
                <Spacer isSmall />
                {postImages && postImages !== "" && (
                    <RowWrapperBasic style={{
                        borderBottomWidth: 1,
                        borderBottomColor: colors.appTextColor8,
                        width: width(70)
                    }}>
                        <Custom size={totalSize(3.6)} icon={postImages} />
                        <TextInput
                            placeholder='Write your Comment'
                            placeholderTextColor={colors.appTextColor1}
                            style={{ paddingLeft: width(3), color: colors.appTextColor1 }}
                        />
                    </RowWrapperBasic>
                )}
                <Spacer />
            </ComponentWrapper>
        </TouchableOpacity>
    )
}

export const CreateButton = ({ onPressCreatePost }) => {
    return (
        <TouchableOpacity onPress={onPressCreatePost}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={colors.gradiant5}
                style={styles.createButton}
            >
                <Icon name='plus' type='feather' color={colors.appButtonColor4} style={{ marginTop: height(2.6) }} />
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    description: {
        fontSize: totalSize(1.4),
        color: colors.appTextColor8,

    },
    time: {
        fontSize: totalSize(1.1),
        paddingLeft: width(2),
        opacity: .5
    },
    count: {
        paddingLeft: width(2.5),
        paddingRight: width(3.5)
    },
    paddingLeft: {
        paddingLeft: width(3)
    },
    createButton: {
        width: width(18),
        height: height(9),
        borderRadius: totalSize(10),
        backgroundColor: 'red',
        position: 'absolute',
        right: width(4.5),
        bottom: -20,
        alignItems: 'center'
    }

});