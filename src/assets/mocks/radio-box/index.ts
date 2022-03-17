// радио боксы
import {IRadioBox} from "../../../components/radio/Models";
import {ERadioBoxClass} from "../../../components/radio/Enums";

export const radioBoxArr: IRadioBox[] = [
    {
        value: "Test",
        title: "Title",
        id: 3333,
        className: ERadioBoxClass.TS_RADIOBOX,
        name: "radio-box",
        disabled: false,
        checked: false,
    },
    {
        value: "Test",
        title: "Title",
        id: 4444,
        className: ERadioBoxClass.TS_RADIOBOX,
        name: "radio-box",
        disabled: true,
        checked: false,
    },
    {
        value: "Test",
        title: "Title",
        id: 5555,
        className: ERadioBoxClass.TS_RADIOBOX,
        name: "radio-box",
        disabled: false,
        checked: true,
    },
    {
        value: "Test",
        title: "Title",
        id: 6666,
        className: ERadioBoxClass.TS_RADIOBOX,
        name: "radio-box",
        disabled: true,
        checked: true,
    },
];