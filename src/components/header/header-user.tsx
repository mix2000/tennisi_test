import React from 'react';
import UserBalance from "./user/user-balance";
import UserName from "./user/user-name";
import UserPhoto from "./user/user-photo";
import UserMenu from "./user/user-menu";
import ListArrow from "../base/list-arrow";

interface IProps {
    isOpened: boolean,
    onClick: () => void
}

const HeaderUser: React.FC<IProps> = ({isOpened, onClick}) => {
    const headerUserClasses = ['header__user']

    if (isOpened) {
        headerUserClasses.push('opened');
    }

    return (
        <div onClick={onClick} className={headerUserClasses.join(' ')}>
            <div className="h-user">
                <UserPhoto/>
                <UserName name={'Иванов И.'}/>
                <UserBalance balance={42000}/>
                <ListArrow/>
            </div>

            <UserMenu/>
        </div>
    );
};

export default HeaderUser;