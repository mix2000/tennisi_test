import React from 'react';
import {EIconName} from "../icons/Enums";
import {NewIcon} from "../icons";

interface ISearchInput {
    onClick?: () => void,
}

const SearchInput: React.FC<ISearchInput> = ({onClick}) => {
    return (
        <div className={'ts--search__input-wrapper'}>
            <div className={'ts--search__icon'}>
                <NewIcon width={32} height={32} type={EIconName.SEARCH} />
            </div>
            <input type="search" placeholder="Поиск"/>
            <div onClick={onClick} className="ts--search__remove">
                <NewIcon className={'ts--graphic-view_circle ts--graphic-view_with-bg'} width={16} height={16} type={EIconName.CLOSE} />
            </div>
        </div>
    );
};

export default SearchInput;