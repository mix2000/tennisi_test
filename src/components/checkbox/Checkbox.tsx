import React from 'react';
import {ICheckbox} from "./Models";

interface ICheckboxItem extends ICheckbox {
    onToggle: (id: number) => void,
}

export const CheckboxItem: React.FC<ICheckboxItem> = ({value, id, className, name, checked= false, disabled = false, onToggle}):JSX.Element => {

    const checkboxClasses = ['ts-checkbox'];

    if (className) {
        checkboxClasses.push(className);
    }

    if (disabled) {
        checkboxClasses.push('disabled');
    }

    return (
        <div key={'checkbox-key'+ id} className={checkboxClasses.join(' ')}>
            <input id={`checkbox-${id}`}
                   name={name}
                   type="checkbox"
                   checked={checked}
                   onChange={onToggle.bind(null, id)}
            />
            <label htmlFor={`checkbox-${id}`}><span>{value}</span></label>
        </div>
    )
}
