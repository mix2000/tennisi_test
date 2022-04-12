import React from 'react';
import {IIcons} from "../Models";

export const Burger = ({fill = '#2E4668', strokeWidth = "1.5", viewBox = '"0 0 24 14"'}: IIcons): JSX.Element => {
    return (
        <path d="M21 7H1M21 1H1M21 13H1" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round"
              strokeLinejoin="round"/>
    );
};
