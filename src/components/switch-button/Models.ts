
/**
 * @param {string} value значение элемента
 * @param {number} id id элемента
 * @param {string} className класс элемента
 * @param {string} name аттрибут name элемента
 * @param {boolean} disabled активность элемента
 * @param {boolean} checked аттрибут checked элемента
 * @param {boolean} labelValue значение label у элемента SwitchButton
 */

export interface ISwitchButton {
    value?: string,
    id: number,
    className?: string,
    name?: string,
    disabled?: boolean,
    checked?: boolean,
    labelValue?: string | number
}