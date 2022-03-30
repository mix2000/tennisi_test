import React from 'react';
import {EIconName} from "../icons/Enums";
import {NewIcon} from "../icons";

interface INotifications {
    hasNew: boolean
}

const HeaderNotifications = (hasNew:INotifications) => {

    const notificationsClasses = ['header__notifications'];

    if (hasNew) {
        notificationsClasses.push('header__notifications_new')
    }

    return (
        <div className={notificationsClasses.join(' ')}>
            <NewIcon width={32} height={32} fill={'#2D2D35'} type={EIconName.NOTIFICATION}/>
        </div>
    );
};

export default HeaderNotifications;