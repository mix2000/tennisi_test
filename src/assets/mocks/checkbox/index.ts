// чекбоксы
import {ICheckbox} from "../../../components/checkbox/Models";
import {ECheckBoxClass} from "../../../components/checkbox/Enums";

export const checkboxArr: ICheckbox[] = [
    {
        value: "Title",
        id: 3,
        className: ECheckBoxClass.TS_CHECKBOX,
        name: "checkbox",
        disabled: false,
        checked: false,
    },
    {
        value: "Title",
        id: 4,
        className: ECheckBoxClass.TS_CHECKBOX,
        name: "checkbox",
        disabled: true,
        checked: false,
    },
    {
        value: "Title",
        id: 5,
        className: ECheckBoxClass.TS_CHECKBOX,
        name: "checkbox",
        disabled: false,
        checked: true,
    },
    {
        value: "Title",
        id: 6,
        className: ECheckBoxClass.TS_CHECKBOX,
        name: "checkbox",
        disabled: true,
        checked: true,
    },
];