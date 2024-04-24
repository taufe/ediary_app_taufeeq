import { MainHeader, MainWrapper, ScrollView, Spacer, } from "../../../components";
import useSearchFilter from "./hook";
import { SearchFilterForm } from "./components";

const SearchFilter = ({ navigation }) => {
    const { interest, setInterest, interestsItems, distance, setDistance, ageRange, setAgeRange, ageRangeItems, friendList, setFriendList, friendItems,
        date, setDate, time, setTime, isDatePickerVisible, setIsDatePickerVisible, isTimePickerVisible, setIsTimePickerVisible, onApply
    } = useSearchFilter(navigation);

    return (
        <MainWrapper>
            <ScrollView>
                <Spacer />
                <MainHeader title={'Search Filter'} showBackBtn />
                <SearchFilterForm
                    interest={interest}
                    setInterest={setInterest}
                    interestsItems={interestsItems}
                    distance={distance}
                    setDistance={setDistance}
                    ageRange={ageRange}
                    setAgeRange={setAgeRange}
                    ageRangeItems={ageRangeItems}
                    friendList={friendList}
                    setFriendList={setFriendList}
                    friendItems={friendItems}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    isDatePickerVisible={isDatePickerVisible}
                    setIsDatePickerVisible={setIsDatePickerVisible}
                    isTimePickerVisible={isTimePickerVisible}
                    setIsTimePickerVisible={setIsTimePickerVisible}
                    onApply={onApply}
                />
            </ScrollView>
        </MainWrapper>
    )
}

export default SearchFilter;