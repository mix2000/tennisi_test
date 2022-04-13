import React from 'react';
import {IIcons} from "../Models";

const ArrowDown = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <path d="M15.2 11L12.2 14L9.20001 11" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    );
};

export default ArrowDown;