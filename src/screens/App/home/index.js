import { MainWrapper, Spacer, } from '../../../components'
import { AppStatusBar } from '../../../components/commonComponents'
import { height } from 'react-native-dimension';
import useHome from './hook'
import { colors } from '../../../constants'
import { HomeProfileHeader, WeekDays } from './components'
import { MedecineList } from '../../../components/listComponent';

const Home = ({ navigation }) => {
    const { setSelectedDay } = useHome(navigation);

    return (
        <MainWrapper>
            <AppStatusBar bgColor={colors.appBgColor2} />
            <Spacer />
            <Spacer height={height(3.5)} />
            <HomeProfileHeader />
            <Spacer />
            <WeekDays setSelectedDay={setSelectedDay} />
            <Spacer />
            <MedecineList />
        </MainWrapper>
    )
}

export default Home;