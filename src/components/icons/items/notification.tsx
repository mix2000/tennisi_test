import React from 'react';
import {IIcons} from "../Models";

const Notification = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 17.2629C17.0753 17.2629 19.4232 16.6118 19.65 13.9985C19.65 11.3869 18.013 11.5549 18.013 8.35061C18.013 5.84774 15.6407 3.00001 12 3.00001C8.35927 3.00001 5.98694 5.84774 5.98694 8.35061C5.98694 11.5549 4.34998 11.3869 4.34998 13.9985C4.57763 16.6217 6.92557 17.2629 12 17.2629Z"
                  stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.1502 19.9715C12.9224 21.3347 11.0072 21.3509 9.76776 19.9715" stroke={fill}
                  strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        </>
    );
};

export default Notification;