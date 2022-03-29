import React from 'react';
import {NewIcon} from "../icons";
import {EIconName} from "../icons/Enums";

interface IProps {
    onRemove:(event: React.MouseEvent) => void
}

const SearchRemove = ({onRemove}:IProps) => {
    return (
        <div onClick={onRemove} className="ts--search__remove">
            <NewIcon className={'ts--graphic-view_circle ts--graphic-view_with-bg'} width={16} height={16} type={EIconName.CLOSE} />
        </div>
    );
};

export default SearchRemove;