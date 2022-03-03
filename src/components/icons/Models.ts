/**
 Интерфейс Icon

 * @param {string} className класс элемента
 * @param {string | number} strokeWidth ширина атрибута stroke svg
 * @param {string} fill цвет заполнения svg
 * @param {number} width ширина graphic view (родительского блока - контейнера)
 * @param {number} height ширина graphic view (родительского блока - контейнера)
 * @param {string} type тип svg иконки
 */

export interface IIcons {
    className?: string,
    strokeWidth?: number | string,
    fill?: string,
    width?: number,
    height?: number,
    type?: string
}