import React, {useRef, useState} from 'react';
import {EIconName} from "../../icons/Enums";
import {NewIcon} from "../../icons";
import {MenuMoreList} from "./menu-more-list";
import {useOuterClick} from 'react-outer-click';

export const MenuMore: React.FC = () => {
    const ref = useRef(null);

    const [openedState, changeOpened] = useState(false);

    const clickHandler = () => {
        changeOpened(!openedState);
    }

    const menuItemMoreClasses = ['menu-more'];

    if (openedState) {
        menuItemMoreClasses.push('active');
    }

    useOuterClick(ref, () => {
        if (openedState) {
            clickHandler();
        }
    });

    return (
        <li className={menuItemMoreClasses.join(' ')} ref={ref}>
            <div onClick={clickHandler} className="menu-more__trigger">
                <NewIcon width={32} height={32} fill={'#9F9FB0'} type={EIconName.MORE}/>
            </div>
            {openedState && <MenuMoreList/>}
        </li>
    );
};
