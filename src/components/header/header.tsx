import React, {useState} from 'react';
import HeaderLogo from "./header-logo";
import HeaderSettings from "./header-settings";
import HeaderNotifications from "./header-notifications";
import HeaderUser from "./header-user";
import HeaderNavMenu from "./header-nav-menu";

const Header = () => {

    const state = {
        notifications: {
            isOpened: false,
        },
        userMenu: {
            isOpened: false,
        }
    }

    const [newPopupStatus, changePopupStatus] = useState(state.notifications.isOpened);

    const [newUserMenuStatus, changeUserMenuStatus] = useState(state.userMenu.isOpened);

    const onToggleHandler = () => {
        changePopupStatus(!newPopupStatus);
    }

    const onClickHandler = () => {
        changeUserMenuStatus(!newUserMenuStatus);
    }

    return (
        <div className={'header'}>
            <HeaderLogo/>
            <HeaderSettings/>
            <HeaderNavMenu/>
            <HeaderNotifications onToggle={onToggleHandler} isOpened={newPopupStatus} hasNew={true}/>
            <HeaderUser onClick={onClickHandler} isOpened={newUserMenuStatus}/>
        </div>
    );
};

export default Header;