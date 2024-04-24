import { SCREEN } from "../../../../constants"

const useInviteFriends = (navigation) => {
    const onPressSkip = () => {
        navigation.navigate(SCREEN.eventPreview)
    }
    return { onPressSkip }
}

export default useInviteFriends