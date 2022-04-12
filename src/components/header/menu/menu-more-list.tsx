import React from 'react';
import {MenuMoreItem, IMenuMoreItem} from "./menu-more-item";

const menuMoreItemsArr: IMenuMoreItem[] = [
    {
        href: '',
        title: 'Наши партнёры',
    },
    {
        href: '',
        title: 'Способы оплаты',
    },
    {
        href: '',
        title: 'Частый вопросы',
    },
    {
        href: '',
        title: 'Обратная связь',
    }
]

export const MenuMoreList: React.FC = ():JSX.Element => {

    return (
        <ul className={'menu-more-list'}>
            {menuMoreItemsArr.map((item, index) => <MenuMoreItem key={index} href={item.href} title={item.title}/>)}
        </ul>
    );
};
