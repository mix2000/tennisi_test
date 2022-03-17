import React from "react";
import {ITabsGeneral} from "./Models";

export const TabsWrapper: React.FC<ITabsGeneral> = ({children}) => {

    // const items = [
    //     {
    //         value: 'test',
    //         componentName: 'test',
    //     }
    // ];

    return (
        <div className='ts--tabs'>
            {children}
        </div>
    );
}

