import { AuthHeaderComponent, MainWrapper, RegularText, Wrapper } from "../../../components"
import { height } from 'react-native-dimension';
import LottieView from 'lottie-react-native';
import { SCREEN, colors } from "../../../constants";
import { useEffect } from "react";

const CodeVerifying = ({ navigation }) => {

    useEffect(() => {
        const timeOut = setTimeout(() => {
            navigation.navigate(SCREEN.uploadProfile)
        }, 1500)
        return () => clearTimeout(timeOut)
    }, [])

    return (
        <MainWrapper>
            <Wrapper style={{ flex: 1, justifyContent: 'center', marginBottom: height(6) }}>
                <AuthHeaderComponent heading={'Code Verifying'} description={'Wait for a while so that your code verify and get start'} />
                <LottieView source={require('../../../assets/gifs/loader.json')} autoPlay loop style={{
                    width: 120,
                    height: 120,
                    alignSelf: 'center',
                }} />
                <RegularText style={{ color: colors.appTextColor10, textAlign: 'center' }}>Wating...</RegularText >
            </Wrapper>
        </MainWrapper>
    )
}

export default CodeVerifying