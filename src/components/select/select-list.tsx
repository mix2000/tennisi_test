import React from 'react';
import {SelectItem} from "./select-item";
import {NewIcon} from "../icons";
import {EIconName} from "../icons/Enums";

export const SelectList = ():JSX.Element => {
    return (
        <div className={"ts--select__list-wrapper"}>
            <ul className={"ts--select__list"}>
                <SelectItem value={
                    <NewIcon type={EIconName.TWITTER}/>
                }/>
                <SelectItem value={'Test'}/>
                <SelectItem value={'Test'}/>
                <SelectItem value={'Test'}/>
                <SelectItem value={'Test'}/>
                <SelectItem value={'Test'}/>
            </ul>
        </div>
    );
};