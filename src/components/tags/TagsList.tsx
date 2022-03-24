import React from "react";
import {TagItem} from "./Tags";
import {ITags} from "./Models";

interface TagsList {
    tagsArr: ITags[],
}

export const TagsList: React.FC<TagsList> = ({tagsArr}) => {

    return (
        <>
            {tagsArr.map((tagItem) => {

                return (
                    <TagItem key={tagItem.id} className={tagItem.className} value={tagItem.value}/>
                )
            })}
        </>
    );
}