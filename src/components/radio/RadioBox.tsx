import React from 'react';
import {IRadioBox} from "./Models";

interface IRadioBoxItem extends IRadioBox {
    onToggle: (id: number) => void,
}

export const RadioBoxItem: React.FC<IRadioBoxItem> = ({value, title, id, className = "", name, disabled= false, checked = false, onToggle}):JSX.Element => {

    const radioBoxItemClasses = ['ts--radio-box'];

    if (className) {
        radioBoxItemClasses.push(className);
    }

    if (disabled) {
        radioBoxItemClasses.push('disabled');
    }

    return (
        <div key={'radio-box-key' + id} className={radioBoxItemClasses.join(' ')}>
            <input id={`radiobox-${id}`} name={name} type="radio" checked={checked}
                   onChange={onToggle.bind(null, id)}/>
            <label htmlFor={`radiobox-${id}`}>
                <span>{title}</span>
                <span>{value}</span>
            </label>
        </div>
    )
}