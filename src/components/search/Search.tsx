import React from 'react';
import {ISearch} from "./Models";

const Search: React.FC<ISearch> = ({className, isShort = false, children}) => {

    let searchClass = className;
    if (isShort) {
        searchClass += ' ts--search_short';
    }

    return (
        <div className={'ts--search' + searchClass}>
            {children}
        </div>
    );
};

export default Search;