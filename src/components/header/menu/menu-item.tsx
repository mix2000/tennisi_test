import React from 'react';

export interface IMenuItem {
    className?: string,
    id: number,
    value: string | React.CElement<any, any>,
    isActive?: boolean,
    index: number,
    onToggle: (index: number) => void,
}

const MenuItem: React.FC<IMenuItem> = ({
                                           id,
                                           className,
                                           value,
                                           index,
                                           isActive,
                                           onToggle
                                       }) => {

    const menuItemClasses = ['header-menu__item'];

    if (className) {
        menuItemClasses.push(className);
    }

    if (isActive) {
        menuItemClasses.push('active');
    }

    return (
        <li onClick={onToggle.bind(this, index)} key={id} className={menuItemClasses.join(' ')}>
            <span>{value}</span>
        </li>
    );
}

export default MenuItem;