import React from 'react';
import {ITabsGeneral} from "./Models";

const TabsContentWrapper: React.FC<ITabsGeneral> = ({
                                                        className,
                                                        children
                                                    }) => {

    const tabsContentWrapperClasses = ['ts--tabs__wrapper'];

    if (className) {
        tabsContentWrapperClasses.push(className);
    }

    return (
        <div className={tabsContentWrapperClasses.join(' ')}>
            {children}
        </div>
    );
};

export default TabsContentWrapper;