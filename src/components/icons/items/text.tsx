import React from 'react';
import {IIcons} from "../Models";

export const Text = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M19 12C19 15.8663 15.8663 19 12 19C8.13373 19 5 15.8663 5 12C5 8.13373 8.13373 5 12 5C15.8663 5 19 8.13373 19 12Z"
                  stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.0018 14.45V10.25M12.0018 10.25H9.90179M12.0018 10.25H14.1018" stroke={fill}
                  strokeWidth={strokeWidth} strokeLinecap="round"/>
        </>
    );
};