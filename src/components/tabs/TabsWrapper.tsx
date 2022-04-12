import React from "react";
import {ITabsGeneral} from "./Models";

export const TabsWrapper: React.FC<ITabsGeneral> = ({
                                                        className,
                                                        children
                                                    }):JSX.Element => {

    const tabsWrapperClasses = ['ts--tabs'];

    if (className) {
        tabsWrapperClasses.push(className);
    }

    return (
        <div className={tabsWrapperClasses.join(' ')}>
            {children}
        </div>
    );
}

