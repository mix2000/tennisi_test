/**
 * интерфейс тэгов
 *
 * @param {string} value значение элемента
 * @param {number} id id элемента
 * @param {string} className класс элемента
 * @param {boolean} disabled активность элемента
 */

export interface ITags {
    value: string,
    id?: number,
    className?: string,
    disabled?: boolean,
}