import React from 'react';

interface IProps {
    name: string
}

export const UserName: React.FC<IProps> = ({name}):JSX.Element => {
    return (
        <div className={'h-user__name'}>
            <span>{name}</span>
        </div>
    );
};
