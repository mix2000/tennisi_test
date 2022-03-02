import React from 'react';
import {IChips} from "./Models";
import {ChipsItem} from "./ChipsItem";

interface IChipsList {
    chipsArr: IChips[],
    onToggle: (id: number) => void,
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

