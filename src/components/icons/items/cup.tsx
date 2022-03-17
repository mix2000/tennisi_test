import React from 'react';
import {IIcons} from "../Models";

const Cup = ({fill = '#2D2D35', strokeWidth = '1.5'}: IIcons): JSX.Element => {
    return (
        <path
            d="M17 5.5H21V7.5C21 9.70914 19.2091 11.5 17 11.5H16M7 5.5H3V7.5C3 9.70914 4.79086 11.5 7 11.5H8M12 13.5C9.23858 13.5 7 11.2614 7 8.5V3.5H17V8.5C17 11.2614 14.7614 13.5 12 13.5ZM12 13.5V16.5M8 20.5H16V18.5C16 17.3954 15.1046 16.5 14 16.5H10C8.89543 16.5 8 17.3954 8 18.5V20.5Z"
            stroke={fill} strokeWidth="1.5"/>
    );
};

export default Cup;