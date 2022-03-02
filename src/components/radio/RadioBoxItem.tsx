import React from 'react';
import {IRadioBox} from "./Models";

interface IRadioBoxItem extends IRadioBox {
    onToggle: (id: number) => void,
}

export const RadioBoxItem: React.FC<IRadioBoxItem> = ({value, title, id, className = "ts--radio-box", name, disabled= false, checked = false, onToggle}) => {

    let radioBoxItemClass = className;
    if (disabled) {
        radioBoxItemClass += ' disabled';
    }

    return (
        <div key={id} className={radioBoxItemClass}>
            <input id={`radiobox-${id}`} name={name} type="radio" checked={checked}
                   onChange={onToggle.bind(null, id)}/>
            <label htmlFor={`radiobox-${id}`}>
                <span>{title}</span>
                <span>{value}</span>
            </label>
        </div>
    )
}
