import React, {useRef, useState} from 'react';
import {EIconName} from "../icons/Enums";
import {NewIcon} from "../icons";
import {Notifications} from "./notifications/notifications-wrapper";
import {useOuterClick} from 'react-outer-click';

interface INotifications {
    hasNew: boolean,
}

export const HeaderNotifications:React.FC<INotifications> = ({hasNew}):JSX.Element => {

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

    const notificationsClasses = ['header__notifications'];

    if (hasNew) {
        notificationsClasses.push('header__notifications_new')
    }

    if (openedState) {
        notificationsClasses.push('opened');
    }

    return (
        <div onClick={clickHandler} className={notificationsClasses.join(' ')} ref={ref}>
            <NewIcon width={32} height={32} fill={'#2D2D35'} type={EIconName.NOTIFICATION}/>
            {openedState && <Notifications/>}
        </div>
    );
};
