import React from 'react';
import HeaderLogo from "./header-logo";
import HeaderSettings from "./header-settings";
import HeaderNotifications from "./header-notifications";
import HeaderUser from "./header-user";
import HeaderNavMenu from "./header-nav-menu";

const Header = () => {
    return (
        <div className={'header'}>
            <HeaderLogo/>
            <HeaderSettings/>
            <HeaderNavMenu/>
            <HeaderNotifications hasNew={false}/>
            <HeaderUser isActive={false}/>
        </div>
    );
};

export default Header;