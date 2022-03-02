// switch-button
import {ISwitchButton} from "../../../components/switch-button/Models";
import {ESwitchButtonClass} from "../../../components/switch-button/Enums";

export const switchButtonsArr: ISwitchButton[] = [
    {
        value: "Title",
        id: 3,
        className: ESwitchButtonClass.TS_SWITCH_BUTTON,
        name: "checkbox",
        disabled: false,
        checked: false,
    },
    {
        value: "Title",
        id: 4,
        className: ESwitchButtonClass.TS_SWITCH_BUTTON,
        name: "checkbox",
        disabled: true,
        checked: false,
    },
    {
        value: "Title",
        id: 5,
        className: ESwitchButtonClass.TS_SWITCH_BUTTON,
        name: "checkbox",
        disabled: false,
        checked: true,
    },
    {
        value: "Title",
        id: 6,
        className: ESwitchButtonClass.TS_SWITCH_BUTTON,
        name: "checkbox",
        disabled: true,
        checked: true,
    },
];