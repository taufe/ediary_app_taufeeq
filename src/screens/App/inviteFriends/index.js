import useInviteFriends from './hook'
import { ComponentWrapper, MainHeader, MainWrapper, MediumTitle, RegularText, Spacer, Wrapper } from '../../../components'
import { styles } from './styles'
import { InviteFriendsList } from '../../../components/listComponent'
import { TouchableOpacity } from 'react-native'
import { totalSize } from 'react-native-dimension';
import { colors } from '../../../constants'

const InviteFriends = ({ navigation }) => {
    const { onPressSkip } = useInviteFriends(navigation)
    return (
        <MainWrapper>
            <Spacer />
            <Wrapper>
                <MainHeader title={'Invite Friend'} showBackBtn />
                <TouchableOpacity style={styles.skip} onPress={onPressSkip}>
                    <RegularText style={{ color: colors.appTextColor12 }}>Skip</RegularText>
                </TouchableOpacity>
            </Wrapper>
            <ComponentWrapper>
                <MediumTitle style={{ fontSize: totalSize(2), color: colors.appTextColor2 }}>Your Friends</MediumTitle>
            </ComponentWrapper>
            <Spacer />
            <InviteFriendsList />
        </MainWrapper>
    )
}

export default InviteFriends