import React from "react";
import {ITabsGeneral} from "./Models";

export interface ITabsItem extends ITabsGeneral {
    id: number,
    value: string,
    isActive?: boolean,
    index: number,
    onToggle: (index: number) => void,
}

export const TabsItem: React.FC<ITabsItem> = ({
                                                  id,
                                                  className,
                                                  value,
                                                  index,
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
        <div onClick={onToggle.bind(this, index)} key={id} className={tabItemClasses.join(' ')}>
            <span>{value}</span>
        </div>
    );
}