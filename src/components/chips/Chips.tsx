import React from 'react';
import {IChips} from "./Models";

interface IChipsItem extends IChips {
    onToggle: (id: number) => void,
}

export const ChipsItem: React.FC<IChipsItem> = ({value, id, className, name, checked= false, disabled = false, onToggle}) => {

    const ChipsItemClasses = ['ts--chips-item'];

    if (className) {
        ChipsItemClasses.push('className');
    }

    if (disabled) {
        ChipsItemClasses.push('disabled');
    }

    return (
        <div key={'chips-key' + id} className={ChipsItemClasses.join(' ')}>
            <input id={`chips-${id}`} name={name} type="checkbox" checked={checked}
                   onChange={onToggle.bind(null, id)}/>
            <label htmlFor={`chips-${id}`}><span>{value}</span></label>
        </div>
    )
}
