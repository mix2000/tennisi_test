import React from 'react';
import {IIcons} from "../Models";

export const Search = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <>
            <ellipse cx="11.6729" cy="11.4823" rx="7.48231" ry="7.48231" stroke={fill} strokeWidth={strokeWidth}
                     strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.876 17.0741L19.8095 20" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round"
                  strokeLinejoin="round"/>
        </>
    );
};
