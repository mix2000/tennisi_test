import React from "react";
import {TagItem} from "./Tags";
import {ITags} from "./Models";

interface ITagsList {
    tagsArr: ITags[],
}

export const TagsList: React.FC<ITagsList> = ({tagsArr}):JSX.Element => {

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