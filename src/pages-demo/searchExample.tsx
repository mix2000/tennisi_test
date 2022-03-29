import React, {useState} from 'react';
import SearchInput from "../components/search/searchInput";
import SearchResultWrapper from "../components/search/searchResultWrapper";
import SearchSuggestion from "../components/search/searchSuggestion";
import SearchItem from "../components/search/searchItem";
import SearchResult from "../components/search/searchResult";
import Search from "../components/search/Search";

const SearchExample = () => {

    const state = {
        inputValue: '',
        isLoaded: true,
        suggestion: {
            isActive: false,
        }
    };


    const [newValue, changeValue] = useState(state.inputValue);

    const [newIsLoaded, changeIsLoaded] = useState(state.isLoaded);

    const [suggestionStatus, changeSuggestionStatus] = useState(state.suggestion.isActive);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeValue(event.target.value);
        changeSuggestionStatus(true);
        changeIsLoaded(false);

        setTimeout(function (){
            console.log('hello')
            changeIsLoaded(true);
        },1000)
    }

    const onRemoveHandler = () => {
        changeValue('');
        changeSuggestionStatus(false);
    }

    return (
        <Search>
            <SearchInput onChange={onChangeHandler} onRemove={onRemoveHandler} value={newValue}/>
            <SearchResultWrapper>
                <SearchSuggestion isActive={suggestionStatus}>
                    <SearchItem isLoaded={newIsLoaded} href={'test'} value={'Test'}/>
                </SearchSuggestion>
                {/*<SearchResult>*/}
                {/*    <SearchItem isLoaded={newIsLoaded} quantity={123} href={'test2'} value={'Test2'}/>*/}
                {/*</SearchResult>*/}
            </SearchResultWrapper>
        </Search>
    );
};

export default SearchExample;