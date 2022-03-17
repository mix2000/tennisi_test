import React from 'react';

interface ISearchItemQuantity {
    value?: number | string
}

const SearchItemQuantity: React.FC<ISearchItemQuantity> = ({value}) => {
    return (
        <div className={'ts--result__quantity'}>
            <span>{value}</span>
        </div>
    );
};

export default SearchItemQuantity;