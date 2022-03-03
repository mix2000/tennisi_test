import React from 'react';
import {ITags} from "./Models";

interface TagsList {
    tagsArr: ITags[],
}

export const TagItem: React.FC<ITags> = ({value, id, className = 'ts--tag', disabled = false}) => {

    let tagItemClass = className;
    if (disabled) {
        tagItemClass += ' disabled';
    }

    return (
        <div key={'tag-key' + id} className={tagItemClass}>
            <span>{value}</span>
        </div>
);
}

export const TagsList: React.FC<TagsList> = ({tagsArr}) => {

    return (
        <>
            {tagsArr.map((tagItem) => {

                let tagItemClass = tagItem.className;
                if (tagItem.disabled) {
                    tagItemClass += ' disabled';
                }

                return (
                    <TagItem key={tagItem.id} className={tagItemClass} value={tagItem.value}/>
                )
            })}
        </>
    );
}