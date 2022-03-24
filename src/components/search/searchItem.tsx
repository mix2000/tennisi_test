import React from 'react';
import {EIconName} from "../icons/Enums";
import {NewIcon} from "../icons";
import SearchItemQuantity from "./searchItemQuantity";

interface ISearchItem {
    id?: number,
    href: string,
    className?: string,
    value: string,
    quantity?: number | string,
}

const SearchItem: React.FC<ISearchItem> = ({
                                               id,
                                               className,
                                               href = "",
                                               value,
                                               quantity
                                           }) => {

    const searchItemClasses = ['ts--result__item'];

    if (className) {
        searchItemClasses.push(className);
    }

    return (
        <a key={id} href={href} className={searchItemClasses.join(' ')}>
            <NewIcon className={'ts--graphic-view_circle ts--result__icon'} width={32} height={32}
                     type={EIconName.ARROW}/>
            <span className="ts--result__text">{value}</span>
            <SearchItemQuantity value={quantity}/>
        </a>
    );
};

export default SearchItem;