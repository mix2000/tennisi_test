/**
 * @param {string} value значение элемента
 * @param {number} id id элемента
 * @param {string} [className] класс элемента
 * @param {string} name аттрибут name элемента
 * @param {boolean} [disabled] активность элемента
 * @param {boolean} [checked] аттрибут checked элемента
 */

export interface IChips {
    value: string,
    id: number,
    className?: string,
    name: string,
    disabled?: boolean,
    checked?: boolean
}