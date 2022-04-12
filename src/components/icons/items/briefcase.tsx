import React from 'react';
import {IIcons} from "../Models";

export const Briefcase = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <>
            <path d="M12.0002 15.6908V13.7435" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M16.6906 6.97996C17.9703 6.97996 19 8.03153 19 9.32872V11.9692C17.1374 13.0744 14.6766 13.7422 11.9962 13.7422C9.31585 13.7422 6.86263 13.0744 5 11.9692V9.32104C5 8.02385 6.03732 6.97996 7.31693 6.97996H16.6906Z"
                  stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M14.6502 6.97726V6.69633C14.6502 5.75989 13.9006 5 12.9769 5H11.0234C10.0996 5 9.35004 5.75989 9.35004 6.69633V6.97726"
                stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M5.01855 14.7731L5.16166 16.6989C5.25858 17.9969 6.32542 19.0001 7.60882 19.0001H16.3912C17.6746 19.0001 18.7414 17.9969 18.8383 16.6989L18.9815 14.7731"
                stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        </>
    );
};
