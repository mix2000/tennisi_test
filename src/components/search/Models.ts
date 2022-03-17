/**
 * интерфейс поиска
 *
 * @param {string} id id элемента
 * @param {string} [className] класс элемента
 * @param {boolean} [isShort] короткая версия или нет
 */

export interface ISearch {
    className?: string,
    isShort?: boolean
}
