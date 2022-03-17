import React from 'react';
import "./assets/styles/ui.css"

import TabsExample from "./pages-demo/tabsExample";
import ChipsExample from "./pages-demo/chipsExample";
import RadioExample from "./pages-demo/radioExample";
import RadioBoxExample from "./pages-demo/radioBoxExample";
import SwitchButtonExample from "./pages-demo/switchButtonExample";
import CheckboxExample from "./pages-demo/checkboxExample";
import TagsExample from "./pages-demo/tagsExample";
import ButtonExample from "./pages-demo/buttonExample";
import {NewIcon} from "./components/icons";
import {EIconName} from "./components/icons/Enums";
import Search from "./components/search/Search";
import SearchInput from "./components/search/searchInput";
import SearchSuggestion from "./components/search/searchSuggestion";
import SearchItem from "./components/search/searchItem";
import SearchResultWrapper from "./components/search/searchResultWrapper";
import SearchResult from "./components/search/searchResult";


const App: React.FC = () => {

    return (
        <div className="container">
            <TagsExample />

            <ChipsExample />

            <CheckboxExample />

            <RadioExample />

            <RadioBoxExample />

            <SwitchButtonExample />

            <ButtonExample/>

            <TabsExample/>

            {/*<NewIcon width={32} height={32} type={EIconName.TOP} />*/}

            <Search>
                <SearchInput />
                <SearchResultWrapper>
                    {/*<SearchSuggestion>*/}
                    {/*    <SearchItem href={'test'} value={'Test'}/>*/}
                    {/*</SearchSuggestion>*/}
                    <SearchResult>
                        <SearchItem quantity={123} href={'test2'} value={'Test2'}/>
                    </SearchResult>
                </SearchResultWrapper>
            </Search>
        </div>
    );
}

export default App;
