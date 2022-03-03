import React from 'react';
import {IChips} from "./Models";

interface IChipsItem extends IChips {
    onToggle: (id: number) => void,
}

interface IChipsList {
    chipsArr: IChips[],
    onToggle: (id: number) => void,
}

export const ChipsItem: React.FC<IChipsItem> = ({value, id, className = "ts--chips-item", name, checked= false, disabled = false, onToggle}) => {

    let ChipsItemClassName = className;
    if (disabled) {
        ChipsItemClassName += ' disabled';
    }

    return (
        <div key={'chips-key' + id} className={ChipsItemClassName}>
            <input id={`chips-${id}`} name={name} type="checkbox" checked={checked}
                   onChange={onToggle.bind(null, id)}/>
            <label htmlFor={`chips-${id}`}><span>{value}</span></label>
        </div>
    )
}

export const ChipsList: React.FC<IChipsList> = ({chipsArr, onToggle}) => {

    return (
        <>
            {chipsArr.map((chipsItem) =>
                <ChipsItem id={chipsItem.id}
                           key={chipsItem.id}
                           value={chipsItem.value}
                           name={chipsItem.name}
                           className={chipsItem.className}
                           disabled={chipsItem.disabled}
                           checked={chipsItem.checked}
                           onToggle={onToggle}/>
            )}
        </>
    )
}