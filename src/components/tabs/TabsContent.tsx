import React from 'react';
import {ITabsContent} from "./Models";

const TabsContent: React.FC<ITabsContent> = ({id, className, isActive, children}) => {

    let itemClassName = className;
    if (isActive) {
        itemClassName += " active";
    }

    return (
        <div key={id} className={'ts--tabs__content' + itemClassName}>
            {children}
        </div>
    );
};

export default TabsContent;