import React, {useState} from 'react';
import {TabsWrapper} from "../components/tabs/TabsWrapper";
import {TabsItem} from "../components/tabs/TabsItem";
import TabsControls from "../components/tabs/TabsControls";
import TabsContentWrapper from "../components/tabs/TabsContentWrapper";
import TabsContent from "../components/tabs/TabsContent";
import {ITabsItem} from "../components/tabs/TabsItem";

const tabsItemsInit: ITabsItem[] = [
    {
        id: 1234,
        value: 'tab Item 1',
        isActive: true,
        index: 0,
        onToggle: index => onchange
    },
    {
        id: 12345,
        value: 'tab Item 2',
        isActive: false,
        index: 1,
        onToggle: index => onchange
    },
    {
        id: 123456,
        value: 'tab Item 3',
        isActive: false,
        index: 2,
        onToggle: index => onchange
    },
    {
        id: 1234567,
        value: 'tab Item 4',
        isActive: false,
        index: 3,
        onToggle: index => onchange
    }
];

const TabsExample = () => {

    const changeTab = (index: number) => {
        const tabsItemsNew: ITabsItem[] = [];

        tabsItems.forEach((item) => {
            const itemNew = {...item};

            itemNew.isActive = false;

            if (itemNew.index === index) {
                itemNew.isActive = !itemNew.isActive;
            }
            tabsItemsNew.push(itemNew)
        });

        setTabsItems(tabsItemsNew);
    }

    const [tabsItems, setTabsItems] = useState<ITabsItem[]>(tabsItemsInit);

    return (
        <TabsWrapper>
            <TabsControls isBordered={true}>
                {tabsItems.map((tabItem) => <TabsItem
                    index={tabItem.index}
                    id={tabItem.id}
                    key={tabItem.id}
                    value={tabItem.value}
                    isActive={tabItem.isActive}
                    onToggle={changeTab}/>)}
            </TabsControls>
            <TabsContentWrapper>
                <TabsContent onChange={changeTab} index={tabsItems[0].index} isActive={tabsItems[0].isActive}>
                    Test1
                </TabsContent>
                <TabsContent onChange={changeTab} index={tabsItems[1].index} isActive={tabsItems[1].isActive}>
                    Test2
                </TabsContent>
                <TabsContent onChange={changeTab} index={tabsItems[2].index} isActive={tabsItems[2].isActive}>
                    Test3
                </TabsContent>
                <TabsContent onChange={changeTab} index={tabsItems[3].index} isActive={tabsItems[3].isActive}>
                    Test4
                </TabsContent>
            </TabsContentWrapper>
        </TabsWrapper>
    );
};

export default TabsExample;