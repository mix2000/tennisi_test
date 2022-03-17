// радио кнопки
import {IRadio} from "../../../components/radio/Models";
import {ERadioClass} from "../../../components/radio/Enums";

export const radioArr: IRadio[] = [
    {
        value: "Title",
        id: 333,
        className: ERadioClass.TS_RADIO,
        name: "radio",
        disabled: false,
        checked: false,
    },
    {
        value: "Title",
        id: 444,
        className: ERadioClass.TS_RADIO,
        name: "radio",
        disabled: true,
        checked: false,
    },
    {
        value: "Title",
        id: 555,
        className: ERadioClass.TS_RADIO,
        name: "radio",
        disabled: false,
        checked: true,
    },
    {
        value: "Title",
        id: 666,
        className: ERadioClass.TS_RADIO,
        name: "radio",
        disabled: true,
        checked: true,
    },
];