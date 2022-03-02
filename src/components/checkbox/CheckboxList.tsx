import React from 'react';
import {ICheckbox} from "./Models";
import {CheckboxItem} from "./CheckboxItem";

interface ICheckboxList {
    checkboxes: ICheckbox[],
    onToggle: (id: number) => void,
}

export const CheckboxList: React.FC<ICheckboxList> = ({checkboxes, onToggle}) => {

    return (
        <>
            {checkboxes.map((checkboxItem) =>
                <CheckboxItem key={checkboxItem.id}
                              id={checkboxItem.id}
                              name={checkboxItem.name}
                              className={checkboxItem.className}
                              checked={checkboxItem.checked}
                              value={checkboxItem.value}
                              onToggle={onToggle}
                              disabled={checkboxItem.disabled
                              }
                />
            )}
        </>
    )
}
