import React, {useState} from 'react';
import {EIconName} from "../icons/Enums";
import {NewIcon} from "../icons";
import SearchRemove from "./searchRemove";

interface ISearchInput {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onRemove:(event: React.MouseEvent) => void
}

const SearchInput: React.FC<ISearchInput> = ({onChange, onRemove, value}) => {

    return (
        <div className={'ts--search__input-wrapper'}>
            <div className={'ts--search__icon'}>
                <NewIcon width={32} height={32} type={EIconName.SEARCH} />
            </div>
            <input onChange={onChange} type="search" placeholder="Поиск" value={value} />
            <SearchRemove onRemove={onRemove} />
        </div>
    );
};

export default SearchInput;