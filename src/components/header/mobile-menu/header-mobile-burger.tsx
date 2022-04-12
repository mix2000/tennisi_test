import React from 'react';
import {NewIcon} from "../../icons";
import {EIconName} from "../../icons/Enums";

export const HeaderMobileBurger = ():JSX.Element => {
    return (
        <div className={'header-mobile-menu__burger'}>
            <NewIcon width={24} height={24} viewBox={"0 0 22 14"} type={EIconName.BURGER}/>
            <span>Меню</span>
        </div>
    );
};