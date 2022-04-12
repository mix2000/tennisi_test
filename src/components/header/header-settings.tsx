import React from 'react';
import {NewIcon} from "../icons";
import {EIconName} from "../icons/Enums";

export const HeaderSettings = () => {
    return (
        <div className={'header__settings'}>
            <NewIcon width={32} height={32} fill={'#2D2D35'} type={EIconName.SETTINGS}/>
        </div>
    );
};
