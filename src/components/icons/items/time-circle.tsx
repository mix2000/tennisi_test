import React from 'react';
import {IIcons} from "../Models";

export const TimeCircle = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M21 12C21 16.9709 16.9709 21 12 21C7.02908 21 3 16.9709 3 12C3 7.02908 7.02908 3 12 3C16.9709 3 21 7.02908 21 12Z"
                  stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.34 14.8622L11.6719 12.674V7.95801" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round"
                  strokeLinejoin="round"/>
        </>
    );
};
