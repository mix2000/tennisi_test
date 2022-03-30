import React from 'react';

interface IProps {
    balance: number,
    symbol?: string
}

const UserBalance:React.FC<IProps> = ({balance, symbol = '₽'}) => {

      const result = balance.toLocaleString().replace(',', ' ') ;

    return (
        <div className={'h-user__balance'}>
            <span className="h-user__amount">
                {result}
            </span>
            <span className="h-user__symbol">{symbol}</span>
        </div>
    );
};

export default UserBalance;