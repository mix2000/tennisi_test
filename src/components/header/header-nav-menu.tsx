import React, {useState} from 'react';
import {NewIcon} from "../icons";
import {EIconName} from "../icons/Enums";
import MenuItem, {IMenuItem} from "./menu/menu-item";

const menuItemsInit: IMenuItem[] = [
    {
        id: 1234,
        value: 'Ставки',
        isActive: true,
        index: 0,
        onToggle: index => onchange
    },
    {
        id: 12345,
        value: 'Новости',
        isActive: false,
        index: 1,
        onToggle: index => onchange
    },
    {
        id: 123456,
        value: 'Бонусы',
        isActive: false,
        index: 2,
        onToggle: index => onchange
    },
    {
        id: 1234567,
        value: 'Пополнение счёта',
        isActive: false,
        index: 3,
        onToggle: index => onchange
    },
    {
        id: 12345678,
        value: 'Помощь',
        isActive: false,
        index: 4,
        onToggle: index => onchange
    },
    {
        id: 12345679,
        value: 'Сервисы',
        isActive: false,
        index: 5,
        onToggle: index => onchange
    },
    {
        id: 123456710,
        value: 'Документы',
        isActive: false,
        index: 6,
        onToggle: index => onchange
    },
    {
        id: 123456711,
        value: 'Контакты',
        isActive: false,
        index: 7,
        onToggle: index => onchange
    },
    {
        id: 123456712,
        value: 'Пункты приема ставок',
        isActive: false,
        index: 8,
        onToggle: index => onchange
    },
    {
        id: 123456713,
        value: <NewIcon width={32} height={32} fill={'#9F9FB0'} type={EIconName.MORE} />,
        isActive: false,
        index: 9,
        onToggle: index => onchange
    }
];


const HeaderNavMenu = () => {

    const changeTab = (index: number) => {
        const menuItemsNew: IMenuItem[] = [];

        menuItems.forEach((item) => {
            const itemNew = {...item};

            itemNew.isActive = false;

            if (itemNew.index === index) {
                itemNew.isActive = !itemNew.isActive;
            }
            menuItemsNew.push(itemNew)
        });

        setTabsItems(menuItemsNew);
    }

    const [menuItems, setTabsItems] = useState<IMenuItem[]>(menuItemsInit);

    return (
        <ul className={'header-menu'}>
            {menuItems.map((menuItem) => <MenuItem
                className={'header-menu__item'}
                index={menuItem.index}
                id={menuItem.id}
                key={menuItem.id}
                value={menuItem.value}
                isActive={menuItem.isActive}
                onToggle={changeTab}/>)}
        </ul>
    );
};

export default HeaderNavMenu;