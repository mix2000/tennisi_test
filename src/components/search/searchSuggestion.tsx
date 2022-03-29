import React from 'react';
import SearchResultList from "./searchResultList";

interface ISearchSuggestion {
    isActive: boolean
}

const SearchSuggestion: React.FC<ISearchSuggestion> = ({isActive, children}) => {
    const suggestionClasses = ['ts--suggestion'];

    if (isActive) {
        suggestionClasses.push('ts--suggestion_active');
    }

    return (
        <div className={suggestionClasses.join(' ')}>
            <SearchResultList title={'Часто ищут'}>
                {children}
            </SearchResultList>
        </div>
    );
};

export default SearchSuggestion;