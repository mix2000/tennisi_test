import React from 'react';
import {ISearch} from "./Models";

export const Search: React.FC<ISearch> = ({
                                       className,
                                       isShort = false,
                                       children
                                   }):JSX.Element => {


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
