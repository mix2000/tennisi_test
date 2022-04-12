import React, {useState} from 'react';
import {RadioItem} from "../components/radio/Radio";
import {RadioList} from "../components/radio/RadioList";
import {IRadio} from "../components/radio/Models";
import {radioArr} from "../assets/mocks/radio";

const RadioExample = ():JSX.Element => {

    // функционал checked для кастомных radio
    const [isCheckedThree, setIsCheckedThree] = useState(false);
    const handleOnChangeThree = () => {
        setIsCheckedThree(!isCheckedThree);
    };

    // состояния radio
    const [radios, setRadios] = useState<IRadio[]>(radioArr);

    // смена состояния radio
    const toggleHandlerRadios = (id: number) => {
        const newRadiosList:IRadio[] = [];

        for (let i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }

        radios.forEach((radiosItem)  => {
            const itemNew = {...radiosItem};

            if (itemNew.id === id) {
                itemNew.checked = !itemNew.checked;
            }

            newRadiosList.push(itemNew)
        });
        setRadios(newRadiosList);
    }

    return (
        <>
            <div className="row">
                <RadioItem onToggle={handleOnChangeThree} value={'Tabletennis Radio'} id={345} name={'test-radio'} checked={isCheckedThree}/>
            </div>

            <div className="row">
                <RadioList radios={radios} onToggle={toggleHandlerRadios}/>
            </div>
        </>
    );
};

export default RadioExample;