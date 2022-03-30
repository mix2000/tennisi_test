import React from 'react';

interface IProps {
    name: string
}

const UserName: React.FC<IProps> = ({name}) => {
    return (
        <div className={'h-user__name'}>
            <span>{name}</span>
        </div>
    );
};

export default UserName;