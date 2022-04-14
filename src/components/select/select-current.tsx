import React from 'react';
import {ListArrow} from "../base/list-arrow";

interface IProps {
    currentValue: string,
    className: string,
    onClick: () => void
  }

export const SelectCurrent:React.FC<IProps> = ({currentValue, className, onClick}):JSX.Element => {
    return (
        <div onClick={onClick} className={className}>
                <span className={"ts--select__current-value"}>
                    {currentValue}
                </span>
            <ListArrow/>
        </div>
    );
};
