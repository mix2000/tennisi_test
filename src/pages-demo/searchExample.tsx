import React, {useState} from 'react';
import {SearchInput} from "../components/search/searchInput";
import {SearchResultWrapper} from "../components/search/searchResultWrapper";
import {SearchSuggestion} from "../components/search/searchSuggestion";
import {SearchItem} from "../components/search/searchItem";
import {Search} from "../components/search/Search";

const SearchExample = ():JSX.Element => {

    const state = {
        inputValue: '',
        isLoaded: true,
        resultWrapper: {
            isLoaded: false,
        },
        suggestion: {
            isActive: false,
        }
    };

    const [newValue, changeValue] = useState(state.inputValue);

    const [newIsLoaded, changeIsLoaded] = useState(state.isLoaded);

    const [suggestionStatus, changeSuggestionStatus] = useState(state.suggestion.isActive);

    const [resultVisibility, changeLoading] = useState(state.resultWrapper.isLoaded);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeValue(event.target.value);

        if (event.target.value !== '') {
            changeLoading(true);
            changeSuggestionStatus(true);
            changeIsLoaded(false);

            setTimeout(function (){
                changeIsLoaded(true);
            },1000)
        }else{
            changeLoading(false);
            changeSuggestionStatus(false);
            changeIsLoaded(true);
        }
    }

    const onRemoveHandler = () => {
        changeValue('');
        changeLoading(false);
        changeSuggestionStatus(false);
    }

    return (
        <Search>
            <SearchInput onChange={onChangeHandler} onRemove={onRemoveHandler} value={newValue}/>
            <SearchResultWrapper isVisible={resultVisibility}>
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