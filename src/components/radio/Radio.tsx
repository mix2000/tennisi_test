import React from 'react';
import {IRadio} from "./Models";

interface IRadioItemType extends IRadio {
    onToggle: (id: number) => void,
}

interface IRadioList {
    radios: IRadio[],
    onToggle: (id: number) => void,
}

export const RadioItem: React.FC<IRadioItemType> = ({
                                                        value,
                                                        id,
                                                        className = "ts--radio",
                                                        name,
                                                        disabled = false,
                                                        checked = false,
                                                        onToggle
                                                    }) => {

    let radioItemClass = className;
    if (disabled) {
        radioItemClass += ' disabled';
    }

    return (
        <div key={'radio-key' + id} className={radioItemClass}>
            <input id={`radio-${id}`} name={name} type="radio" checked={checked}
                   onChange={onToggle.bind(null, id)}/>
            <label htmlFor={`radio-${id}`}><span>{value}</span></label>
        </div>
    )
}

export const RadioList: React.FC<IRadioList> = ({radios, onToggle}) => {

    return (
        <>
            {radios.map((radioItem) =>
                <RadioItem onToggle={onToggle}
                           key={radioItem.id}
                           value={radioItem.value}
                           id={radioItem.id}
                           className={radioItem.className}
                           checked={radioItem.checked}
                           disabled={radioItem.disabled}
                           name={radioItem.name}/>
            )}
        </>
    )
}
