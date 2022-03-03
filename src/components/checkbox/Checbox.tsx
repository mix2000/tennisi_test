import React from 'react';
import {ICheckbox} from "./Models";

interface ICheckboxItem extends ICheckbox {
    onToggle: (id: number) => void,
}

interface ICheckboxList {
    checkboxes: ICheckbox[],
    onToggle: (id: number) => void,
}

export const CheckboxItem: React.FC<ICheckboxItem> = ({value, id, className = 'ts-checkbox', name, checked= false, disabled = false, onToggle}) => {

    let checkBoxItemClassName = className;
    if (disabled) {
        checkBoxItemClassName += ' disabled';
    }

    return (
        <div key={'checkbox-key'+ id} className={checkBoxItemClassName}>
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

export const CheckboxList: React.FC<ICheckboxList> = ({checkboxes, onToggle}) => {

    return (
        <>
            {checkboxes.map((checkboxItem) =>
                <CheckboxItem key={checkboxItem.id}
                              id={checkboxItem.id}
                              name={checkboxItem.name}
                              className={checkboxItem.className}
                              checked={checkboxItem.checked}
                              value={checkboxItem.value}
                              onToggle={onToggle}
                              disabled={checkboxItem.disabled
                              }
                />
            )}
        </>
    )
}
