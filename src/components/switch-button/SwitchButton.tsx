import React from 'react';
import {ISwitchButton} from "./Models";

interface ISwitchButtonsItem extends ISwitchButton {
    onToggle: (id: number) => void,
}

export const SwitchButton: React.FC<ISwitchButtonsItem> =
    (
        {
            value,
            id,
            className,
            name,
            disabled = false,
            checked = false,
            labelValue,
            onToggle
        }):JSX.Element => {


        const switchButtonItemClasses = ['ts--switch-button'];

        if (className) {
            switchButtonItemClasses.push(className);
        }


        if (disabled) {
            switchButtonItemClasses.push('disabled');
        }

        let labelElem;
        if (labelValue) {
            labelElem = <label htmlFor={`switch-${id}`}><span>{labelValue}</span></label>
        } else {
            labelElem = <label htmlFor={`switch-${id}`}></label>
        }

        return (
            <>
                <div key={'switch-key' + id} className={switchButtonItemClasses.join(' ')}>
                    <input id={`switch-${id}`} name={name} value={value} type="checkbox" checked={checked}
                           onChange={onToggle.bind(null, id)}/>
                    {labelElem}
                </div>
            </>
        )
    }
