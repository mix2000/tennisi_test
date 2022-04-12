import React from 'react';

interface ISearchResultList {
    title: string
}

export const SearchResultList: React.FC<ISearchResultList> = ({
                                                           title,
                                                           children
                                                       }):JSX.Element => {
    return (
        <div className={'ts--result__wrapper'}>
            <div className="ts--search__result-title">{title}</div>
            <div className="ts--search-result-list">
                {children}
            </div>
        </div>
    );
};
