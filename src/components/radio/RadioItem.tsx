import React from 'react';
import {IRadio} from "./Models";

interface IRadioItemType extends IRadio {
    onToggle: (id: number) => void,
}

export const RadioItem: React.FC<IRadioItemType> = ({value, id, className = "ts--radio", name, disabled= false, checked = false, onToggle}) => {

    let radioItemClass = className;
    if (disabled) {
        radioItemClass += ' disabled';
    }

    return (
        <div key={id} className={radioItemClass}>
            <input id={`radio-${id}`} name={name} type="radio" checked={checked}
                   onChange={onToggle.bind(null, id)}/>
            <label htmlFor={`radio-${id}`}><span>{value}</span></label>
        </div>
    )
}
