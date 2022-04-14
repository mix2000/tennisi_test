import React from 'react';

interface IProps {
    value: string | JSX.Element | React.FC
  }

export const SelectItem:React.FC<IProps> = ({value}):JSX.Element => {
    return (
        <li className={"ts--select__item"}>
            {value}
        </li>
    );
};
