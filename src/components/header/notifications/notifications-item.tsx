import React from 'react';

interface IProps {
    date?: string;
    operation: string,
    value: string | number
}

export const NotificationsItem: React.FC<IProps> = ({
                                                 date,
                                                 operation,
                                                 value
                                             }):JSX.Element => {

    return (
        <div className={'notifications__item notification-item'}>
            <div className={'notification-item__date'}>{date}</div>
            <div className="notification-item__row">
                <div className="notification-item__name">{operation}</div>
                <div className="notification-item__price">{value}<span>₽</span></div>
            </div>
        </div>
    );
};
