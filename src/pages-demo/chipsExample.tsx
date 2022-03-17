import React, {useState} from 'react';
import {IChips} from "../components/chips/Models";
import {ChipsItem, ChipsList} from "../components/chips/Chips";
import {chipsArr} from "../assets/mocks/chips";

const ChipsExample = () => {

    // функционал checked для кастомных чипсов
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    // состояния чипсов
    const [chips, setChips] = useState<IChips[]>(chipsArr);

    // смена состояния чипсов
    const toggleHandlerChips = (id: number) => {
        const newChipsList:IChips[] = [];
        chips.forEach((chipsItem)  => {
            const itemNew = {...chipsItem};
            if (itemNew.id === id) {
                itemNew.checked = !itemNew.checked;
            }
            newChipsList.push(itemNew)
        });
        setChips(newChipsList);
    }

    return (
        <>
            <div className="row">
                <ChipsItem onToggle={handleOnChange} value={'Test123'} id={4} name={'test123'} checked={isChecked}/>
            </div>

            <div className="row">
                <ChipsList chipsArr={chips} onToggle={toggleHandlerChips}/>
            </div>
        </>
    );
};

export default ChipsExample;