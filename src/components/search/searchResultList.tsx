import React from 'react';

interface ISearchResultList {
    title: string
}

const SearchResultList: React.FC<ISearchResultList> = ({title, children}) => {
    return (
        <div className={'ts--result__wrapper'}>
            <div className="ts--search__result-title">{title}</div>
            <div className="ts--search-result-list">
                {children}
            </div>
        </div>
    );
};

export default SearchResultList;