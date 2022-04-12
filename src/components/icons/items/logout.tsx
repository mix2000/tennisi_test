import React from 'react';
import {IIcons} from "../Models";

export const Logout = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <>
            <path
                d="M14.0041 8.59367V7.90755C14.0041 6.41103 12.7907 5.19764 11.2942 5.19764H7.70918C6.21339 5.19764 5 6.41103 5 7.90755V16.0924C5 17.589 6.21339 18.8024 7.70918 18.8024H11.3016C12.7937 18.8024 14.0041 17.5926 14.0041 16.1005V15.4071"
                stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12H10.1452" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M16.8465 9.85559L18.9997 11.9993L16.8465 14.1437" stroke={fill} strokeWidth={strokeWidth}
                  strokeLinecap="round" strokeLinejoin="round"/>
        </>
    );
};