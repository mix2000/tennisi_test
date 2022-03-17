// чекбоксы
import {ICheckbox} from "../../../components/checkbox/Models";
import {ECheckBoxClass} from "../../../components/checkbox/Enums";

export const checkboxArr: ICheckbox[] = [
    {
        value: "Title",
        id: 33333333333,
        className: ECheckBoxClass.TS_CHECKBOX,
        name: "checkbox",
        disabled: false,
        checked: false,
    },
    {
        value: "Title",
        id: 444444444444,
        className: ECheckBoxClass.TS_CHECKBOX,
        name: "checkbox",
        disabled: true,
        checked: false,
    },
    {
        value: "Title",
        id: 555555555555,
        className: ECheckBoxClass.TS_CHECKBOX,
        name: "checkbox",
        disabled: false,
        checked: true,
    },
    {
        value: "Title",
        id: 6666666666,
        className: ECheckBoxClass.TS_CHECKBOX,
        name: "checkbox",
        disabled: true,
        checked: true,
    },
];