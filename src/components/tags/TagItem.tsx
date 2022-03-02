import React from 'react';
import {ITags} from "./Models";

export const TagItem: React.FC<ITags> = ({value, id, className = 'ts--tag', disabled = false}) => {

    let tagItemClass = className;
    if (disabled) {
        tagItemClass += ' disabled';
    }

    return (
        <div key={id} className={tagItemClass}>
            <span>{value}</span>
        </div>
    );
}
