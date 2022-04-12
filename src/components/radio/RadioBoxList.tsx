import React from "react";
import {RadioBoxItem} from "./RadioBox";
import {IRadioBox} from "./Models";

interface IRadioBoxesList {
    radioBoxes: IRadioBox[],
    onToggle: (id: number) => void,
}

export const RadioBoxesList: React.FC<IRadioBoxesList> = ({radioBoxes, onToggle}):JSX.Element => {

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