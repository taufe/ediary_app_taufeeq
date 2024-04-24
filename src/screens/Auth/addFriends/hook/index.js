import { SCREEN } from "../../../../constants"


const useAddFriends = (navigation) => {
    const onPressFinish = () => {
        navigation.replace(SCREEN.appStack)
    }
    return { onPressFinish }
}

export default useAddFriends