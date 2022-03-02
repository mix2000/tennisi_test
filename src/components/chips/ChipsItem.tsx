import React from 'react';
import {IChips} from "./Models";

interface IChipsItem extends IChips {
    onToggle: (id: number) => void,
}

export const ChipsItem: React.FC<IChipsItem> = ({value, id, className = "ts--chips-item", name, checked= false, disabled = false, onToggle}) => {

    let ChipsItemClassName = className;
    if (disabled) {
        ChipsItemClassName += ' disabled';
    }

    return (
        <div key={id} className={ChipsItemClassName}>
            <input id={`chips-${id}`} name={name} type="checkbox" checked={checked}
                   onChange={onToggle.bind(null, id)}/>
            <label htmlFor={`chips-${id}`}><span>{value}</span></label>
        </div>
    )
}

