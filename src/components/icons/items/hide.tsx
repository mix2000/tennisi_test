import React from 'react';
import {IIcons} from "../Models";

const Hide = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <>
            <path
                d="M10.3056 13.6888C9.87041 13.2544 9.60553 12.6641 9.60553 12.0019C9.60553 10.6753 10.6741 9.60595 12 9.60595C12.6561 9.60595 13.2601 9.87159 13.6876 10.306"
                stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.3494 12.426C14.1738 13.4023 13.4049 14.1727 12.4294 14.3498" stroke={fill}
                  strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M7.9552 16.0403C6.75417 15.0973 5.73705 13.72 4.99994 12.0028C5.74462 10.2781 6.76855 8.89319 7.97714 7.94266C9.17817 6.99213 10.5638 6.47601 12.0002 6.47601C13.4449 6.47601 14.8299 6.9997 16.0384 7.95704"
                stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M17.6364 9.62054C18.157 10.3122 18.6149 11.1107 19.0001 12.0014C17.5115 15.4501 14.8809 17.5275 11.9998 17.5275C11.3467 17.5275 10.7027 17.4215 10.0836 17.2149"
                stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.9709 6.03121L6.03333 17.9688" stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round"
                  strokeLinejoin="round"/>
        </>
    );
};

export default Hide;