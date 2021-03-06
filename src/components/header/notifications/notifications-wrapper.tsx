import React from 'react';
import {NotificationsItem} from "./notifications-item";
import {Button} from "../../button/Button";
import {EButtonColor} from "../../button/Enums";

interface IProps {
    // isActive?: boolean,
}

export const Notifications:React.FC<IProps> = ():JSX.Element => {
    return (
        <div className={'notifications'}>
            <div className="notifications__title">Уведомления</div>
            <div className="notifications__list">
                <NotificationsItem date={'Сегодня, 15:45'} operation={'Пополнение баланса'} value={2000}/>
                <NotificationsItem date={'8 декабря, 23:50'} operation={'Пополнение баланса'} value={2000}/>
                <NotificationsItem date={'7 декабря, 20:19'} operation={'Пополнение баланса'} value={2000}/>
            </div>
            <Button btnColor={EButtonColor.DARK_COLOR} className={'notifications__btn'} title={'Все уведомления'}/>
        </div>
    );
};
