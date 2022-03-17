import React from "react";
import {ITabsItem} from "./Models";

export const TabsItem: React.FC<ITabsItem> = ({id, className = "", value, isActive, onToggle}) => {

    let tabItemClassName = className;
    if (isActive) {
        tabItemClassName += " active";
    }

    return (
        <div onClick={onToggle.bind(null, id)} key={id} className={'ts--tabs__item' + tabItemClassName}>
            <span>{value}</span>
        </div>
    );
}