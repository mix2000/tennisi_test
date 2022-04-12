import React from 'react';
import {IRadio} from "./Models";

interface IRadioItemType extends IRadio {
    onToggle: (id: number) => void,
}

export const RadioItem: React.FC<IRadioItemType> = ({
                                                        value,
                                                        id,
                                                        className,
                                                        name,
                                                        disabled = false,
                                                        checked = false,
                                                        onToggle
                                                    }):JSX.Element => {

    const radioItemClasses = ['ts--radio'];

    if (className) {
        radioItemClasses.push(className);
    }

    if (disabled) {
        radioItemClasses.push('disabled');
    }

    return (
        <div key={'radio-key' + id} className={radioItemClasses.join(' ')}>
            <input id={`radio-${id}`} name={name} type="radio" checked={checked}
                   onChange={onToggle.bind(null, id)}/>
            <label htmlFor={`radio-${id}`}><span>{value}</span></label>
        </div>
    )
}
