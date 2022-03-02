import React from 'react';
import {ISwitchButton} from "./Models";

interface ISwitchButtonsItem extends ISwitchButton{
    onToggle: (id: number) => void,
}

export const SwitchButton: React.FC<ISwitchButtonsItem> =
    (
        {value,
         id,
         className= "ts--switch-button",
         name,
         disabled= false,
         checked = false,
         labelValue,
         onToggle}) =>
    {

    let switchButtonsItemClass: string = className;
    if (disabled) {
        switchButtonsItemClass += ' disabled';
    }

    let labelElem;
    if (labelValue) {
        labelElem = <label htmlFor={`switch-${id}`}><span>{labelValue}</span></label>
    }else {
        labelElem= <label htmlFor={`switch-${id}`}></label>
    }

    return (
        <>
            <div key={id} className={switchButtonsItemClass}>
                <input id={`switch-${id}`} name={name} type="checkbox" checked={checked}
                       onChange={onToggle.bind(null, id)}/>
                {labelElem}
            </div>
        </>
    )
}
