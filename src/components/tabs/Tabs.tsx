import React from "react";
import {ITabsContent, ITabsControls, ITabsGeneral, ITabsItems} from "./Models";

export const TabsWrapper: React.FC<ITabsGeneral> = ({id, className= "ts--tabs", children}) => {

    return (
        <div id={id} className={className}>
            {children}
        </div>
    );
}

export const TabsControls: React.FC<ITabsControls> = ({id, className= "ts--tabs__controls", isBordered, children}) => {

    let tabsControlsClassName = className;
    if (isBordered) {
        tabsControlsClassName += " ts--tabs__controls_bordered";
    }

    return (
        <div id={id} className={tabsControlsClassName}>
            {children}
        </div>
    );
}

export const TabsContentWrapper: React.FC<ITabsGeneral> = ({id, className= "ts--tabs__wrapper", children}) => {

    return (
        <div id={id} className={className}>
            {children}
        </div>
    );
}

export const TabsContent: React.FC<ITabsContent> = ({id, className= "ts--tabs__content", isActive, children}) => {

    let tabsContentClassName = className;
    if (isActive) {
        tabsContentClassName += " active";
    }

    return (
        <div id={id} className={className}>
            {children}
        </div>
    );
}

export const TabsItem: React.FC<ITabsItems> = ({id, className= "ts--tabs__item", value, isActive}) => {

    let tabItemClassName = className;
    if (isActive) {
        tabItemClassName += " active";
    }

    return (
        <div id={id} className={tabItemClassName}>
            <span>{value}</span>
        </div>
    );
}
