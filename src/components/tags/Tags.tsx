import React from 'react';
import {ITags} from "./Models";

export const TagItem: React.FC<ITags> = ({
                                             value,
                                             id,
                                             className,
                                             disabled = false
                                         }):JSX.Element => {

    const tagItemClasses = ['ts--tag'];

    if (className) {
        tagItemClasses.push(className);
    }

    if (disabled) {
        tagItemClasses.push('disabled');
    }

    return (
        <div key={'tag-key' + id} className={tagItemClasses.join(' ')}>
            <span>{value}</span>
        </div>
    );
}