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
import {Select} from "../components/select/select";

export const ComponentsDemo = ():JSX.Element => {
    return (
        <div>
                <TagsExample />

                <ChipsExample />

                <CheckboxExample />

                <RadioExample />

                <RadioBoxExample />

                <SwitchButtonExample />

                <ButtonExample/>

                <div className="row">
                    <TabsExample/>
                </div>

                <SearchExample/>

                <div className="row">
                    <Select/>
                </div>
        </div>
    );
};
