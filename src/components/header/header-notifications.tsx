import React from 'react';
import {EIconName} from "../icons/Enums";
import {NewIcon} from "../icons";
import Notifications from "./notifications/notifications-wrapper";

interface INotifications {
    hasNew: boolean,
    isOpened: boolean,
    onToggle: () => void
}

const HeaderNotifications:React.FC<INotifications> = ({hasNew, isOpened, onToggle}) => {

    const notificationsClasses = ['header__notifications'];

    if (hasNew) {
        notificationsClasses.push('header__notifications_new')
    }

    if (isOpened) {
        notificationsClasses.push('opened');
    }

    return (
        <div onClick={onToggle} className={notificationsClasses.join(' ')}>
            <NewIcon width={32} height={32} fill={'#2D2D35'} type={EIconName.NOTIFICATION}/>
            <Notifications/>
        </div>
    );
};

export default HeaderNotifications;