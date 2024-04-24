import { MainHeader, MainWrapper, ScrollView, Spacer } from "../../../components";
import { EventsList } from "../../../components/listComponent";
import { sizes } from "../../../constants";
import useSavedEvents from "./hook";
import { height } from 'react-native-dimension';


const SavedEvents = ({ navigation }) => {
  const { savedEvents } = useSavedEvents(navigation);
  return (
    <MainWrapper>
      <Spacer height={height(3)} />
      <MainHeader showHeartIcon heartFill={true} showBackBtn title={'Saved Events'} />
      <ScrollView>
        <EventsList data={savedEvents} footerHeight={sizes.baseMargin} />
      </ScrollView>
    </MainWrapper>
  )
}

export default SavedEvents;