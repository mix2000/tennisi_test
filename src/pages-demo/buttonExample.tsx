import React from 'react';
import {Button} from "../components/button/Button";
import {ButtonWithAddedIcon} from "../components/button/ButtonWithIcon";
import {ButtonWithAddedText} from "../components/button/ButtonWithAddedText";
import {EIconName} from "../components/icons/Enums";
import {EButtonColor, EButtonPosition, EButtonTextPosition} from "../components/button/Enums";

const ButtonExample = ():JSX.Element => {
    return (
        <>
            <div className="row">
                <Button title={"Title"} btnColor={EButtonColor.LIGHT_COLOR}/>
                <Button title={"Test"} btnColor={EButtonColor.BRAND_COLOR}/>
                <Button btnColor={EButtonColor.DARK_COLOR} title={"Test"}/>
                <Button title={"Brand"} btnColor={EButtonColor.DARKEN_COLOR}/>
            </div>

            <div className="row">
                <ButtonWithAddedText textPosition={EButtonTextPosition.RIGHT} textValue={"10"} title={"Title"} btnColor={EButtonColor.DARK_COLOR}/>
                <ButtonWithAddedText textPosition={EButtonTextPosition.LEFT} textValue={"10"} title={"Test"} btnColor={EButtonColor.DARK_COLOR}/>
                <ButtonWithAddedText textPosition={EButtonTextPosition.RIGHT} btnColor={EButtonColor.DARK_COLOR} textValue={"10"} title={"Test"}/>
            </div>

            <div className="row">
               <ButtonWithAddedIcon iconFill={'white'} isRounded={true} btnColor={EButtonColor.DARK_COLOR} iconPosition={EButtonPosition.CENTER} iconType={EIconName.TOP} iconSize={24}/>
               <ButtonWithAddedIcon iconFill={'yellow'} btnColor={EButtonColor.DARK_COLOR} iconPosition={EButtonPosition.LEFT} title={'Tennisi test'} iconType={EIconName.BOX} iconSize={24}/>
               <ButtonWithAddedIcon iconFill={'white'} btnColor={EButtonColor.DARK_COLOR} iconPosition={EButtonPosition.RIGHT} title={'Tennisi test 2'} iconType={EIconName.FAVORITE} iconSize={24}/>
            </div>
        </>
    );
};

export default ButtonExample;