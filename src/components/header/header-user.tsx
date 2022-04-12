import React, {useRef, useState} from 'react';
import {UserBalance} from "./user/user-balance";
import {UserName} from "./user/user-name";
import {UserPhoto} from "./user/user-photo";
import {UserMenu} from "./user/user-menu";
import {ListArrow} from "../base/list-arrow";
import {useOuterClick} from 'react-outer-click';

interface IProps {

}

export const HeaderUser: React.FC<IProps> = () => {
    const headerUserClasses = ['header__user']

    const ref = useRef(null);

    const [openedState, changeOpened] = useState(false);

    const clickHandler = () => {
        changeOpened(!openedState);
    }

    useOuterClick(ref, () => {
        if (openedState) {
            clickHandler();
        }
    });

    if (openedState) {
        headerUserClasses.push('opened');
    }

    return (
        <div onClick={clickHandler} className={headerUserClasses.join(' ')} ref={ref}>
            <div className="h-user">
                <UserPhoto/>
                <UserName name={'Иванов И.'}/>
                <UserBalance balance={42000}/>
                <ListArrow/>
            </div>
            {openedState && <UserMenu/>}
        </div>
    );
};
