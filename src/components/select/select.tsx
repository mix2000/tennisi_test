import React, {useState} from 'react';
import {SelectCurrent} from "./select-current";
import {SelectList} from "./select-list";

export const Select = ():JSX.Element => {

    const currentClass = ['ts--select__current-wrapper'];

    const [isListActive, changeListState] = useState(false);

    const currentClickHandler = () => {
        changeListState(!isListActive);
    }

    if (isListActive) {
        currentClass.push('active');
    }

    return (
        <div className={'ts--select'}>
            <SelectCurrent className={currentClass.join(' ')} onClick={currentClickHandler} currentValue={'Test'}/>
            {isListActive && <SelectList/>}
        </div>
    );
};