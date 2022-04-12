import React from 'react';
import {IIcons} from "../Models";

export const Interface = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <path
            d="M5 8.88889H19M9.66667 8.88889V19M7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19Z"
            stroke={fill} strokeWidth={strokeWidth} strokeLinecap="square"/>
    );
};
