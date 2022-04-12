import React from 'react';
import {IIcons} from "../Models";

export const Handball = ({fill = '#2D2D35', strokeWidth = "0.2"}: IIcons): JSX.Element => {
    return (
        <path
            d="M12 2C6.47778 2 2 6.47778 2 12C2 17.5222 6.47778 22 12 22C17.5222 22 22 17.5222 22 12C22 6.47778 17.5222 2 12 2ZM5.71111 5.71111C7.5 3.92222 9.87778 3.05556 12.2222 3.12222C12.2889 5.47778 11.4333 7.84444 9.63333 9.64444C7.83333 11.4444 5.46667 12.3 3.11111 12.2333C3.06667 9.87778 3.92222 7.51111 5.71111 5.71111ZM5.71111 18.2889C4.32222 16.9 3.5 15.1556 3.22222 13.3444C5.82222 13.3778 8.44445 12.4111 10.4333 10.4222C12.4222 8.43334 13.3889 5.82222 13.3556 3.22222C15.1667 3.5 16.9 4.32222 18.3 5.71111C19.7 7.1 20.5111 8.84445 20.7889 10.6556C18.1889 10.6222 15.5667 11.5889 13.5778 13.5778C11.5889 15.5667 10.6222 18.1778 10.6556 20.7889C8.84444 20.5 7.11111 19.6778 5.71111 18.2889ZM18.2889 18.2889C16.5 20.0778 14.1222 20.9444 11.7778 20.8778C11.7111 18.5222 12.5667 16.1556 14.3667 14.3556C16.1667 12.5556 18.5333 11.7 20.8889 11.7667C20.9333 14.1222 20.0778 16.4889 18.2889 18.2889Z"
            fill={fill} stroke={fill} strokeWidth={strokeWidth}/>
    );
};
