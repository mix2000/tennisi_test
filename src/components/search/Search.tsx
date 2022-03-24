import React from 'react';
import {ISearch} from "./Models";

const Search: React.FC<ISearch> = ({
                                       className,
                                       isShort = false,
                                       children
                                   }) => {


    const searchClasses = ['ts--search'];

    if (className) {
        searchClasses.push(className);
    }

    if (isShort) {
        searchClasses.push('ts--search_short');
    }

    return (
        <div className={searchClasses.join(' ')}>
            {children}
        </div>
    );
};

export default Search;