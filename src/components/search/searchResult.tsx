import React from 'react';
import {SearchResultList} from "./searchResultList";

interface ISearchResult {}

export const SearchResult: React.FC<ISearchResult> = ({children}):JSX.Element => {
    return (
        <div className={'ts--result'}>
                <SearchResultList title={'Test'}>
                    {children}
                </SearchResultList>
        </div>
    );
};
