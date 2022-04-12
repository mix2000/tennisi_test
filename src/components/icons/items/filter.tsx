import React from 'react';
import {IIcons} from "../Models";

export const Filter = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <>
            <path d="M10.5389 16.2815H5.02576" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M12.9978 7.79946H18.5109" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M9.13551 7.75351C9.13551 6.61981 8.20962 5.70053 7.06776 5.70053C5.92589 5.70053 5 6.61981 5 7.75351C5 8.88721 5.92589 9.80648 7.06776 9.80648C8.20962 9.80648 9.13551 8.88721 9.13551 7.75351Z"
                  stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M19 16.2465C19 15.1128 18.0748 14.1935 16.933 14.1935C15.7904 14.1935 14.8645 15.1128 14.8645 16.2465C14.8645 17.3802 15.7904 18.2995 16.933 18.2995C18.0748 18.2995 19 17.3802 19 16.2465Z"
                  stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        </>
    );
};