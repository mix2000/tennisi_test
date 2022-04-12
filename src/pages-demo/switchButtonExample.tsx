import React, {useState} from 'react';
import {SwitchButton} from "../components/switch-button/SwitchButton";

const SwitchButtonExample = ():JSX.Element => {

    // функционал checked для кастомных switchButton
    const [isCheckedFive, setIsCheckedFive] = useState(false);
    const handleOnChangeFive = () => {
        setIsCheckedFive(!isCheckedFive);
    };

    return (
        <>
            <div className="row">
                <SwitchButton onToggle={handleOnChangeFive} id={234} value={"Switch Tabletennis"} checked={isCheckedFive} labelValue={"Test"} />
            </div>
        </>
    );
};

export default SwitchButtonExample;