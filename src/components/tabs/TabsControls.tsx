import React from 'react';
import {ITabsControls} from "./Models";

const TabsControls: React.FC<ITabsControls> = ({className = '', isBordered, children}) => {

    let currentClass = className
    if (isBordered) {
        currentClass += ' ts--tabs__controls_bordered';
    }

    return (
        <div className={'ts--tabs__controls' + currentClass}>
            {children}
        </div>
    );
};

export default TabsControls;