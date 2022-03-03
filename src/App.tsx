import React, {useState, useEffect} from 'react';
import "./assets/styles/ui.css"

// checkbox
import {ICheckbox} from "./components/checkbox/Models";
import {CheckboxItem} from "./components/checkbox/Checbox";
import {CheckboxList} from "./components/checkbox/Checbox";

// tags
import {TagItem} from "./components/tags/Tags";
import {TagsList} from "./components/tags/Tags";

// chips
import {IChips} from "./components/chips/Models";
import {ChipsItem} from "./components/chips/Chips";
import {ChipsList} from "./components/chips/Chips";

// radio
import {IRadio, IRadioBox} from "./components/radio/Models";
import {RadioItem} from "./components/radio/Radio";
import {RadioList} from "./components/radio/Radio";

//radiobox
import {RadioBoxItem} from "./components/radio/RadioBox";
import {RadioBoxesList} from "./components/radio/RadioBox";

// switch-button
import {SwitchButton} from "./components/switch-button/SwitchButton";

// button
import {Button, ButtonWithAddedText} from "./components/button/Button";

// icons
import {
    Icon_Sport_Basketball,
    Icon_Sport_Box,
    Icon_Sport_Football,
    Icon_Sport_Handball, Icon_Sport_Racing, Icon_Sport_Rugby, Icon_Sport_TableTennis,
    Icon_Sport_Tennis,
    Icon_Sport_Volleyball
} from "./components/icons/Icon";

// tabs
import {TabsContent, TabsContentWrapper, TabsControls, TabsItem, TabsWrapper} from "./components/tabs/Tabs";

// демо объекты (mocks)
import {checkboxArr} from "./assets/mocks/checkbox";
import {tagsArray} from "./assets/mocks/tags";
import {chipsArr} from "./assets/mocks/chips";
import {radioArr} from "./assets/mocks/radio";
import {radioBoxArr} from "./assets/mocks/radio-box";


const App: React.FC = () => {

    // функционал checked для кастомных чипсов
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    // функционал checked для кастомных чекбоксов
    const [isCheckedTwo, setIsCheckedTwo] = useState(false);
    const handleOnChangeTwo = () => {
        setIsCheckedTwo(!isCheckedTwo);
    };

    // функционал checked для кастомных radio
    const [isCheckedThree, setIsCheckedThree] = useState(false);
    const handleOnChangeThree = () => {
        setIsCheckedThree(!isCheckedThree);
    };

    // функционал checked для кастомных radioBox
    const [isCheckedFour, setIsCheckedFour] = useState(false);
    const handleOnChangeFour = () => {
        setIsCheckedFour(!isCheckedFour);
    };

    // функционал checked для кастомных radioBox
    const [isCheckedFive, setIsCheckedFive] = useState(false);
    const handleOnChangeFive = () => {
        setIsCheckedFive(!isCheckedFive);
    };

    // состояния чекбоксов
    const [checkboxes, setCheckboxes] = useState<ICheckbox[]>(checkboxArr);

    // состояния чипсов
    const [chips, setChips] = useState<IChips[]>(chipsArr);

    // состояния radio
    const [radios, setRadios] = useState<IRadio[]>(radioArr);

    // состояния radioBox
    const [radioBoxes, setRadioBoxes] = useState<IRadioBox[]>(radioBoxArr);

    // useEffect(() => {
    //     const saved = JSON.parse(localStorage.getItem('checkbox') as string) || '[]' as unknown as ICheckbox[]
    //     setCheckboxes(saved)
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('checkbox', JSON.stringify(checkboxes))
    // }, [checkboxes])

// смена состояния чекбоксов
    const toggleHandlerCheckboxes = (id: number) => {
        const newCheckboxes:ICheckbox[] = [];
        checkboxes.forEach((checkboxItem)  => {
            const itemNew = {...checkboxItem};
            if (itemNew.id === id) {
                itemNew.checked = !itemNew.checked;
            }
            newCheckboxes.push(itemNew)
        });
        setCheckboxes(newCheckboxes);
    }

    // смена состояния чипсов
    const toggleHandlerChips = (id: number) => {
        const newChipsList:IChips[] = [];
        chips.forEach((chipsItem)  => {
            const itemNew = {...chipsItem};
            if (itemNew.id === id) {
                itemNew.checked = !itemNew.checked;
            }
            newChipsList.push(itemNew)
        });
        setChips(newChipsList);
    }

    // смена состояния radio
    const toggleHandlerRadios = (id: number) => {
        const newRadiosList:IRadio[] = [];
        radios.forEach((radiosItem)  => {
            const itemNew = {...radiosItem};
            for (let i = 0; i < radios.length; i++) {
                radios[i].checked = false;
            }

            if (itemNew.id === id) {
                itemNew.checked = !itemNew.checked;
            }

            newRadiosList.push(itemNew)
        });
        setRadios(newRadiosList);
    }

    // смена состояния radio
    const toggleHandlerRadioBoxes = (id: number) => {
        const newRadiosBoxesList:IRadioBox[] = [];
        radioBoxes.forEach((radiosBoxesItem)  => {
            const itemNew = {...radiosBoxesItem};
            for (let i = 0; i < radioBoxes.length; i++) {
                radioBoxes[i].checked = false;
            }

            if (itemNew.id === id) {
                itemNew.checked = !itemNew.checked;
            }

            newRadiosBoxesList.push(itemNew)
        });
        setRadioBoxes(newRadiosBoxesList);
    }

    return (
        <div className="container">
            <div className="row">
                <TagsList tagsArr={tagsArray} />
            </div>

            {/*<TagsList tagsArr={tagsArray.filter((item) => item.id === 1)} />*/}

            {/*<div className="row">*/}
            {/*    <TagItem key={'tag-5'} value={'Test'} disabled={false} />*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <ChipsItem onToggle={handleOnChange} value={'Test123'} id={4} name={'test123'} checked={isChecked}/>*/}
            {/*</div>*/}
            
            {/*<div className="row">*/}
            {/*    <ChipsList chipsArr={chips} onToggle={toggleHandlerChips}/>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <CheckboxItem onToggle={handleOnChangeTwo} value={'Test123'} id={21} name={'test'} checked={isCheckedTwo}/>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <CheckboxList checkboxes={checkboxes} onToggle={toggleHandlerCheckboxes}/>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <RadioItem onToggle={handleOnChangeThree} value={'Test Radio'} id={345} name={'test-radio'} checked={isCheckedThree}/>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <RadioList radios={radios} onToggle={toggleHandlerRadios}/>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <RadioBoxItem onToggle={handleOnChangeFour} checked={isCheckedFour} title={"Test title"} value={"Test Custom Radio Box"} id={213}/>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <RadioBoxesList radioBoxes={radioBoxes} onToggle={toggleHandlerRadioBoxes}/>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <SwitchButton onToggle={handleOnChangeFive} id={234} value={"Switch Test"} checked={isCheckedFive} labelValue={"Test"} />*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <Icon_Sport_Football width={24} height={25} strokeWidth={0.2}/>*/}
            {/*    <Icon_Sport_Basketball fill={"orange"}/>*/}
            {/*    <Icon_Sport_Volleyball/>*/}
            {/*    <Icon_Sport_Tennis/>*/}
            {/*    <Icon_Sport_Box/>*/}
            {/*    <Icon_Sport_Handball/>*/}
            {/*    <Icon_Sport_Rugby/>*/}
            {/*    <Icon_Sport_Racing/>*/}
            {/*    <Icon_Sport_TableTennis/>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <Button title={"Title"} lightColor={true}/>*/}
            {/*    <Button title={"Test"} darkColor={true}/>*/}
            {/*    <Button title={"Test"}/>*/}
            {/*    <Button title={"Test Brand"} brandColor={true}/>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <ButtonWithAddedText textValue={"10"} title={"Title"} lightColor={true}/>*/}
            {/*    <ButtonWithAddedText textValue={"10"} textRight={false} title={"Test"} darkColor={true}/>*/}
            {/*    <ButtonWithAddedText textValue={"10"} title={"Test"}/>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <TabsWrapper>*/}
            {/*        <TabsControls isBordered={true}>*/}
            {/*            <TabsItem value={'Test tab Item 1'} isActive={true}/>*/}
            {/*            <TabsItem value={'Test tab Item 2'} isActive={false}/>*/}
            {/*        </TabsControls>*/}
            {/*        <TabsContentWrapper>*/}
            {/*            <TabsContent>*/}
            {/*                Test*/}
            {/*            </TabsContent>*/}
            {/*        </TabsContentWrapper>*/}
            {/*    </TabsWrapper>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
