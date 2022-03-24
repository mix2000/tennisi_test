import React from 'react';
import {Button} from "../components/button/Button";
import {ButtonWithAddedIcon} from "../components/button/ButtonWithIcon";
import {ButtonWithAddedText} from "../components/button/ButtonWithAddedText";
import {EIconName} from "../components/icons/Enums";

const ButtonExample = () => {
    return (
        <>
            <div className="row">
                <Button title={"Title"} lightColor={true}/>
                <Button title={"Test"} darkColor={true}/>
                <Button title={"Test"}/>
                <Button title={"Brand"} brandColor={true}/>
            </div>

            <div className="row">
                <ButtonWithAddedText textValue={"10"} title={"Title"} lightColor={true}/>
                <ButtonWithAddedText textValue={"10"} textRight={false} title={"Test"} darkColor={true}/>
                <ButtonWithAddedText textValue={"10"} title={"Test"}/>
            </div>

            <div className="row">
               <ButtonWithAddedIcon iconFill={'white'} rounded={true} withoutText={true} iconType={EIconName.TOP} iconSize={24}/>
               <ButtonWithAddedIcon iconFill={'yellow'} iconLeft={true} title={'Tennisi test'} iconType={EIconName.BOX} iconSize={24}/>
               <ButtonWithAddedIcon iconFill={'white'} iconRight={true} title={'Tennisi test 2'} iconType={EIconName.FAVORITE} iconSize={24}/>
            </div>
        </>
    );
};

export default ButtonExample;