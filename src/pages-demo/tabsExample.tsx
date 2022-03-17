import React, {useState} from 'react';
import {TabsWrapper} from "../components/tabs/Tabs";
import {TabsItem} from "../components/tabs/TabsItem";
import TabsControls from "../components/tabs/TabsControls";
import TabsContentWrapper from "../components/tabs/TabsContentWrapper";
import TabsContent from "../components/tabs/TabsContent";
import {ITabsItem} from "../components/tabs/Models";

const tabsItemsInit:ITabsItem[] = [
    {
        id: 1234,
        value: 'tab Item 1',
        isActive: true,
        onToggle: id => onchange
    },
    {
        id: 12345,
        value: 'tab Item 2',
        isActive: false,
        onToggle: id => onchange
    },
    {
        id: 123456,
        value: 'tab Item 3',
        isActive: false,
        onToggle: id => onchange
    },
    {
        id: 1234567,
        value: 'tab Item 4',
        isActive: false,
        onToggle: id => onchange
    }
];

const TabsExample = () => {

    const changeTab = (id:number) => {
        const tabsItemsNew:ITabsItem[] = [];

        for (let i = 0; i < tabsItems.length; i++) {
            tabsItems[i].isActive = false;
        }

        tabsItems.forEach((item)=>{
            const itemNew = {...item};

            if (itemNew.id === id) {
                itemNew.isActive = !itemNew.isActive;
            }
            tabsItemsNew.push(itemNew)
        })
        setTabsItems(tabsItemsNew);
    }

    const [tabsItems, setTabsItems] = useState<ITabsItem[]>(tabsItemsInit);

    return (
                <TabsWrapper>
                    <TabsControls isBordered={true}>
                        {tabsItems.map((tabItem) => <TabsItem id={tabItem.id} key={tabItem.id} value={tabItem.value} isActive={tabItem.isActive} onToggle={changeTab}/> ) }
                    </TabsControls>
                    <TabsContentWrapper>
                        <TabsContent id={1}>
                            Test
                        </TabsContent>
                    </TabsContentWrapper>
                </TabsWrapper>
    );
};

export default TabsExample;