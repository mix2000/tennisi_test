/**
 Интерфейс Graphic View (контейнера для иконок)

 * @param {string} className класс элемента
 * @param {number} width ширина элемента
 * @param {number} height высота элемента
 * @param {boolean} rounded округление элемента
 * @param {boolean} bg с фоном или без
 */

export interface IGraphicView {
    className?: string,
    width?: number,
    height?: number,
    rounded?: boolean,
    bg?: boolean
}
