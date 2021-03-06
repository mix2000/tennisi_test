import React from 'react';

interface ISearchItemQuantity {
    value?: number | string
}

export const SearchItemQuantity: React.FC<ISearchItemQuantity> = ({value}):JSX.Element => {
    return (
        <div className={'ts--result__quantity'}>
            <span>{value}</span>
        </div>
    );
};
