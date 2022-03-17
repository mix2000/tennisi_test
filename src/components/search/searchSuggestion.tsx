import React from 'react';
import SearchResultList from "./searchResultList";
import SearchItem from "./searchItem";

interface ISearchSuggestion {}

const SearchSuggestion: React.FC<ISearchSuggestion> = ({children}) => {
    return (
        <div className="ts--suggestion">
            <SearchResultList title={'Часто ищут'}>
                {children}
            </SearchResultList>
        </div>
    );
};

export default SearchSuggestion;