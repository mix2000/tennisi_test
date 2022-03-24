import React from "react";
import {ITabsItem} from "./Models";

export const TabsItem: React.FC<ITabsItem> = ({
                                                  id,
                                                  className,
                                                  value,
                                                  isActive,
                                                  onToggle
                                              }) => {

    const tabItemClasses = ['ts--tabs__item'];

    if (className) {
        tabItemClasses.push(className);
    }

    if (isActive) {
        tabItemClasses.push('active');
    }

    return (
        <div onClick={onToggle.bind(null, id)} key={id} className={tabItemClasses.join(' ')}>
            <span>{value}</span>
        </div>
    );
}