import React from 'react';
import {IIcons} from "../Models";

const Theme = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <path
            d="M9.875 5C9.62801 5.72657 9.49405 6.50538 9.49405 7.31548C9.49405 11.2867 12.7133 14.506 16.6845 14.506C17.4946 14.506 18.2734 14.372 19 14.125C18.0362 16.9602 15.3516 19 12.1905 19C8.21929 19 5 15.7807 5 11.8095C5 8.64843 7.03982 5.96377 9.875 5Z"
            stroke={fill} strokeWidth={strokeWidth} strokeLinecap="square"/>
    );
};

export default Theme;