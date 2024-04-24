import { SCREEN } from "../../../../constants"
const useEventComment = (navigation) => {

    const onPressCreatePost = () => {
        navigation.navigate(SCREEN.eventpost)
    }
    return { onPressCreatePost }
}

export default useEventComment