// радио боксы
import {IRadioBox} from "../../../components/radio/Models";
import {ERadioBoxClass} from "../../../components/radio/Enums";

export const radioBoxArr: IRadioBox[] = [
    {
        value: "Test",
        title: "Title",
        id: 33,
        className: ERadioBoxClass.TS_RADIOBOX,
        name: "radio-box",
        disabled: false,
        checked: false,
    },
    {
        value: "Test",
        title: "Title",
        id: 44,
        className: ERadioBoxClass.TS_RADIOBOX,
        name: "radio-box",
        disabled: true,
        checked: false,
    },
    {
        value: "Test",
        title: "Title",
        id: 55,
        className: ERadioBoxClass.TS_RADIOBOX,
        name: "radio-box",
        disabled: false,
        checked: true,
    },
    {
        value: "Test",
        title: "Title",
        id: 66,
        className: ERadioBoxClass.TS_RADIOBOX,
        name: "radio-box",
        disabled: true,
        checked: true,
    },
];