import React from 'react';
import {IRadioBox} from "./Models";

interface IRadioBoxItem extends IRadioBox {
    onToggle: (id: number) => void,
}

interface IRadioBoxesList {
    radioBoxes: IRadioBox[],
    onToggle: (id: number) => void,
}

export const RadioBoxItem: React.FC<IRadioBoxItem> = ({value, title, id, className = "ts--radio-box", name, disabled= false, checked = false, onToggle}) => {

    let radioBoxItemClass = className;
    if (disabled) {
        radioBoxItemClass += ' disabled';
    }

    return (
        <div key={'radio-box-key' + id} className={radioBoxItemClass}>
            <input id={`radiobox-${id}`} name={name} type="radio" checked={checked}
                   onChange={onToggle.bind(null, id)}/>
            <label htmlFor={`radiobox-${id}`}>
                <span>{title}</span>
                <span>{value}</span>
            </label>
        </div>
    )
}

export const RadioBoxesList: React.FC<IRadioBoxesList> = ({radioBoxes, onToggle}) => {

    return (
        <>
            {radioBoxes.map((radioBoxItem) =>
                <RadioBoxItem onToggle={onToggle}
                              key={radioBoxItem.id}
                              value={radioBoxItem.value}
                              title={radioBoxItem.title}
                              id={radioBoxItem.id}
                              className={radioBoxItem.className}
                              name={radioBoxItem.name}
                              disabled={radioBoxItem.disabled}
                              checked={radioBoxItem.checked}
                />
            )}
        </>
    )
}