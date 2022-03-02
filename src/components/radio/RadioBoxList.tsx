import React from 'react';
import {IRadioBox} from "./Models";
import {RadioBoxItem} from "./RadioBoxItem";

interface IRadioBoxesList {
    radioBoxes: IRadioBox[],
    onToggle: (id: number) => void,
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
