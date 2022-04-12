import React from 'react';

interface ISearchResult {
    isVisible: boolean
}

export const SearchResultWrapper: React.FC<ISearchResult> = ({isVisible, children}) => {

    const classes = ['ts--search__result-wrapper'];

    if (isVisible) {
        classes.push('active')
    }

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    );
};
