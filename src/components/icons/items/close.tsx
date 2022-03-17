import React from 'react';
import {IIcons} from "../Models";

const Close = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <path d="M18.994 5.0057L5.00859 18.9911M18.9985 19L5.00146 5" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    );
};

export default Close;