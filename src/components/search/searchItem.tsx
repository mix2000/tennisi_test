import React from 'react';
import {EIconName} from "../icons/Enums";
import {NewIcon} from "../icons";
import {SearchItemQuantity} from "./searchItemQuantity";

interface ISearchItem {
    id?: number,
    href: string,
    className?: string,
    value: string,
    isLoaded?: boolean,
    quantity?: number | string,
}

export const SearchItem: React.FC<ISearchItem> = ({
                                               id,
                                               className,
                                               href = "",
                                               value,
                                               isLoaded,
                                               quantity
                                           }):JSX.Element => {

    const searchItemClasses = ['ts--result__item'];

    if (className) {
        searchItemClasses.push(className);
    }

    let itemRowClass = ['ts--result__item-row'];

    if (!isLoaded) {
        itemRowClass.push('skeleton');
    }

    return (
        <a key={id} href={href} className={searchItemClasses.join(' ')}>
            <div className={itemRowClass.join(' ')}>
                <NewIcon className={'ts--graphic-view_circle ts--result__icon'} width={32} height={32}
                         type={EIconName.ARROW}/>
                <span className="ts--result__text">{value}</span>
                <SearchItemQuantity value={quantity}/>
            </div>
        </a>
    );
};
