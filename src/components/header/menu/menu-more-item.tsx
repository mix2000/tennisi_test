import React from 'react';

export interface IMenuMoreItem {
    href: string,
    title: string
}

export const MenuMoreItem:React.FC<IMenuMoreItem> = ({href, title}) => {
    return (
        <li className={'menu-more-list__item'}>
            <a href={href}>
                {title}
            </a>
        </li>
    );
};
