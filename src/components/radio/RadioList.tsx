import React from 'react';
import {IRadio} from "./Models";
import {RadioItem} from "./RadioItem";

interface IRadioList {
    radios: IRadio[],
    onToggle: (id: number) => void,
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
