import React, {useState} from 'react';
import {RadioBoxesList, RadioBoxItem} from "../components/radio/RadioBox";
import {IRadioBox} from "../components/radio/Models";
import {radioBoxArr} from "../assets/mocks/radio-box";

const RadioBoxExample = () => {

    // состояния radioBox
    const [radioBoxes, setRadioBoxes] = useState<IRadioBox[]>(radioBoxArr);

    // смена состояния radio box
    const toggleHandlerRadioBoxes = (id: number) => {
        const newRadiosBoxesList:IRadioBox[] = [];

        for (let i = 0; i < radioBoxes.length; i++) {
            radioBoxes[i].checked = false;
        }

        radioBoxes.forEach((radiosBoxesItem)  => {
            const itemNew = {...radiosBoxesItem};

            if (itemNew.id === id) {
                itemNew.checked = !itemNew.checked;
            }

            newRadiosBoxesList.push(itemNew)
        });
        setRadioBoxes(newRadiosBoxesList);
    }

    // функционал checked для кастомных radioBox
    const [isCheckedFour, setIsCheckedFour] = useState(false);
    const handleOnChangeFour = () => {
        setIsCheckedFour(!isCheckedFour);
    };

    return (
        <>
            <div className="row">
                <RadioBoxItem onToggle={handleOnChangeFour} checked={isCheckedFour} title={"Tabletennis title"} value={"Tabletennis Custom Radio Box"} id={213}/>
            </div>

            <div className="row">
                <RadioBoxesList radioBoxes={radioBoxes} onToggle={toggleHandlerRadioBoxes}/>
            </div>
        </>
    );
};

export default RadioBoxExample;