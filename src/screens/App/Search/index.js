import { ComponentWrapper, MainHeader, MainWrapper, Spacer, TextInputSearch } from "../../../components";
import { ComponentHeader } from "../../../components/commonComponents";
import { EventsList } from "../../../components/listComponent";
import { sizes } from "../../../constants";
import { appStrings } from "../../../utilities/appStrings";
import useSearch from "./hook";

const Search = ({ navigation }) => {
    const { searchResults, onFilterPressed, searchTerm, setSearchTerm } = useSearch(navigation);

    return (
        <MainWrapper>
            <MainHeader title={'Search'} showBackBtn />
            <ComponentWrapper>
                <TextInputSearch value={searchTerm} onChangeText={setSearchTerm} placeholder={appStrings.searchEventPlaceholder} onPressFilter={onFilterPressed} />
                <Spacer isTiny />
            </ComponentWrapper>
            <ComponentHeader title={'Search Result'} />
            <EventsList data={searchResults} footerHeight={sizes.baseMargin} />
        </MainWrapper>
    )
}

export default Search;