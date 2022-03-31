import React from 'react';
import FooterMenuColumn from "./footer-menu-column";
import {IFooterMenuItem} from "./footer-menu-item";

const menuOne: IFooterMenuItem[] = [
    {
        value: 'О компании',
        href: ''
    },
    {
        value: 'Правила',
        href: ''
    },
    {
        value: 'Новости',
        href: ''
    },
    {
        value: 'Справочный центр',
        href: ''
    },
    {
        value: 'Платежи',
        href: ''
    },
]

const menuTwo: IFooterMenuItem[] = [
    {
        value: 'Акции',
        href: ''
    },
    {
        value: 'Идентификация',
        href: ''
    },
    {
        value: 'VIP-программа',
        href: ''
    },
    {
        value: 'Благотворительность',
        href: ''
    },
]

const menuThree: IFooterMenuItem[] = [
    {
        value: 'Лицензии',
        href: ''
    },
    {
        value: 'Товарный знак',
        href: ''
    },
    {
        value: 'Свидетельство СРО',
        href: ''
    },
    {
        value: 'Федеральный закон',
        href: ''
    },
    {
        value: 'Банковская гарантия',
        href: ''
    },
]

const menuFour: IFooterMenuItem[] = [
    {
        value: '8 800 100-45-32',
        href: 'tel:88001004532'
    },
    {
        value: 'tennisibet_admin@mail.ru',
        href: 'mailto:tennisibet_admin@mail.ru'
    },
    {
        value: '119311, Москва, Ломоносовский проспект, д. 25, корп. 2, пом. 9',
        href: ''
    },
]
const FooterMenu = () => {
    return (
        <div className={'footer-menu'}>
            <FooterMenuColumn items={menuOne} title={'Помощь'}/>
            <FooterMenuColumn items={menuTwo} title={'Сервисы'}/>
            <FooterMenuColumn items={menuThree} title={'Документы'}/>
            <FooterMenuColumn items={menuFour} title={'Контакты'} withSocials={true}/>
        </div>
    );
};

export default FooterMenu;