import React from 'react';
import UserBalance from "./user/user-balance";
import UserName from "./user/user-name";
import UserPhoto from "./user/user-photo";

interface IProps {
    isActive: boolean
}

const HeaderUser: React.FC<IProps> = ({isActive}) => {
    const headerUserClasses = ['header__user h-user']

    if (isActive) {
        headerUserClasses.push('header__user_active');
    }

    return (
        <div className={headerUserClasses.join(' ')}>
            <UserPhoto/>
            <UserName name={'Дмитрий К.'}/>
            <UserBalance balance={42000}/>
        </div>
    );
};

export default HeaderUser;