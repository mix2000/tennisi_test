import React from 'react';
import {IIcons} from "../Models";

const Arrow = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <path d="M7.10051 16.8995L17 7M17 7V17M17 7H7" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round"/>
    );
};

export default Arrow;