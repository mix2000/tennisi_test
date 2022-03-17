import React from 'react';

interface ISearchResult {}

const SearchResultWrapper: React.FC<ISearchResult> = ({children}) => {
    return (
        <div className={'ts--search__result-wrapper'}>
            {children}
        </div>
    );
};

export default SearchResultWrapper;