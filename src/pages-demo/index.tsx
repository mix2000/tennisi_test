import React from 'react';
import TagsExample from "./tagsExample";
import ChipsExample from "./chipsExample";
import CheckboxExample from "./checkboxExample";
import RadioExample from "./radioExample";
import RadioBoxExample from "./radioBoxExample";
import SwitchButtonExample from "./switchButtonExample";
import ButtonExample from "./buttonExample";
import TabsExample from "./tabsExample";
import SearchExample from "./searchExample";

const ComponentsDemo = () => {
    return (
        <div>
            <div className="container">
                <TagsExample />

                <ChipsExample />

                <CheckboxExample />

                <RadioExample />

                <RadioBoxExample />

                <SwitchButtonExample />

                <ButtonExample/>

                <TabsExample/>

                {/*<NewIcon width={32} height={32} type={EIconName.TOP} />*/}

                <SearchExample/>
            </div>
        </div>
    );
};

export default ComponentsDemo;