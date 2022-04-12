import React from 'react';
import {NewIcon} from "../../icons";
import {EIconName} from "../../icons/Enums";

export const UserMenu = ():JSX.Element => {
    return (
        <ul className={'user-menu'}>
            <li>
                <a href="">
                    <span>Скрыть имя и баланс</span>
                    <NewIcon width={24} height={24} fill={'#9F9FB0'} type={EIconName.HIDE}/>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Управление счётом</span>
                    <NewIcon width={24} height={24} fill={'#9F9FB0'} type={EIconName.BRIEFCASE}/>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Настройки</span>
                    <NewIcon width={24} height={24} fill={'#9F9FB0'} type={EIconName.FILTER}/>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Выход</span>
                    <NewIcon width={24} height={24} fill={'#9F9FB0'} type={EIconName.LOGOUT}/>
                </a>
            </li>
        </ul>
    );
};
