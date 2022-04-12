import React from 'react';
import {HeaderLogo} from "./header-logo";
import {HeaderSettings} from "./header-settings";
import {HeaderNotifications} from "./header-notifications";
import {HeaderUser} from "./header-user";
import {HeaderNavMenu} from "./header-nav-menu";
import {HeaderMobileMenu} from "./mobile-menu/header-mobile-menu";

export const Header = () => {

    return (
        <div className={'header'}>
            <HeaderMobileMenu/>
            <HeaderLogo/>
            <HeaderSettings/>
            <HeaderNavMenu/>
            <HeaderNotifications hasNew={true}/>
            <HeaderUser/>
        </div>
    );
};
