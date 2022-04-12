import React from 'react';
import {ITabsControls} from "./Models";

export const TabsControls: React.FC<ITabsControls> = ({
                                                   className,
                                                   isBordered,
                                                   children}):JSX.Element => {

    const tabsControlsClasses = ['ts--tabs__controls'];

    if (className) {
        tabsControlsClasses.push(className);
    }

    if (isBordered) {
        tabsControlsClasses.push('ts--tabs__controls_bordered');
    }

    return (
        <div className={tabsControlsClasses.join(' ')}>
            {children}
        </div>
    );
};
