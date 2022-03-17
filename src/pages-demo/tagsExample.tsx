import React from 'react';
import {TagItem, TagsList} from "../components/tags/Tags";
import {tagsArray} from "../assets/mocks/tags";

const TagsExample = () => {
    return (
        <>
            <div className="row">
                <TagsList tagsArr={tagsArray} />
            </div>

            <div className="row">
                <TagItem key={'tag-5'} value={'Test'} disabled={false} />
            </div>
        </>
    );
};

export default TagsExample;