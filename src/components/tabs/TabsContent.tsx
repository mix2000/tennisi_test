import React from 'react';
import {ITabsContent} from "./Models";

export const TabsContent: React.FC<ITabsContent> = ({
                                                 id,
                                                 className,
                                                 isActive,
                                                 index,
                                                 onChange,
                                                 children
                                             }):JSX.Element => {

    const tabsContentClasses = ['ts--tabs__content'];

    if (className) {
        tabsContentClasses.push(className);
    }

    if (isActive) {
        tabsContentClasses.push('active');
    }

    return (
        <div onChange={onChange.bind(this, index)} key={id} className={tabsContentClasses.join(' ')}>
            {children}
        </div>
    );
};
