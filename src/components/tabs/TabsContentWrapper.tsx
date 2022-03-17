import React from 'react';
import {ITabsGeneral} from "./Models";

const TabsContentWrapper: React.FC<ITabsGeneral> = ({children}) => {
    return (
        <div className={'ts--tabs__wrapper'}>
            {children}
        </div>
    );
};

export default TabsContentWrapper;