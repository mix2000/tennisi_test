import React from 'react';
import {IIcons} from "../Models";

export const More = ({fill = '#2D2D35', strokeWidth = '1.2'}: IIcons): JSX.Element => {
    return (
        <>
            <circle cx="5" cy="12" r="2.4" stroke={fill} strokeWidth={strokeWidth}/>
            <circle cx="12" cy="12" r="2.4" stroke={fill} strokeWidth={strokeWidth}/>
            <circle cx="19" cy="12" r="2.4" stroke={fill} strokeWidth={strokeWidth}/>
        </>
    );
};
