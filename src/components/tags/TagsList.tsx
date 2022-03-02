import React from 'react';
import {ITags} from "./Models";

interface TagsList {
    tagsArr: ITags[],
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
                    <div key={tagItem.id} className={tagItemClass}>
                        <span>{tagItem.value}</span>
                    </div>
                )
            })}
        </>


    );
}
