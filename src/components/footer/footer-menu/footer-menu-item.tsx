import React from 'react';

export interface IFooterMenuItem {
    href: string,
    value: string
}

export const FooterMenuItem: React.FC<IFooterMenuItem> = ({
                                                       href,
                                                       value
                                                   }) => {
    return (
        <li className={'footer-menu__item'}>
            <a href={href}>
                {value}
            </a>
        </li>
    );
};
