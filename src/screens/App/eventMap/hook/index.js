const useEventMap = (navigation) => {
    const onPressPin = () => {
        navigation.goBack()
    }
    return { onPressPin }
}

export default useEventMap