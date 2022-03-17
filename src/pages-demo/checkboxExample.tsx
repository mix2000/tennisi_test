import React, {useState} from 'react';
import {CheckboxItem, CheckboxList} from "../components/checkbox/Checbox";
import {ICheckbox} from "../components/checkbox/Models";
import {checkboxArr} from "../assets/mocks/checkbox";

const CheckboxExample = () => {

    // функционал checked для кастомных чекбоксов
    const [isCheckedTwo, setIsCheckedTwo] = useState(false);
    const handleOnChangeTwo = () => {
        setIsCheckedTwo(!isCheckedTwo);
    };

    // состояния чекбоксов
    const [checkboxes, setCheckboxes] = useState<ICheckbox[]>(checkboxArr);

// смена состояния чекбоксов
    const toggleHandlerCheckboxes = (id: number) => {
        const newCheckboxes:ICheckbox[] = [];
        checkboxes.forEach((checkboxItem)  => {
            const itemNew = {...checkboxItem};
            if (itemNew.id === id) {
                itemNew.checked = !itemNew.checked;
            }
            newCheckboxes.push(itemNew)
        });
        setCheckboxes(newCheckboxes);
    }

    return (
        <>
            <div className="row">
                <CheckboxItem onToggle={handleOnChangeTwo} value={'Test123214214'} id={2111111111} name={'test'} checked={isCheckedTwo}/>
            </div>

            <div className="row">
                <CheckboxList checkboxes={checkboxes} onToggle={toggleHandlerCheckboxes}/>
            </div>
        </>
    );
};

export default CheckboxExample;